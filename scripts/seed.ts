import { createClient } from '@libsql/client'
import fs from 'node:fs/promises'
import path from 'node:path'
import dotenv from 'dotenv'

dotenv.config({ quiet: true })

const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN

if (!DB_URL) throw new Error('No DB_URL found')
if (!DB_AUTH_TOKEN) throw new Error('No DB_AUTH_TOKEN found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN!,
})

const data_folder = path.join(process.cwd(), 'database', 'data')
const unsorted_files = await fs.readdir(data_folder, 'utf8')
const files = unsorted_files.filter((f) => f.endsWith('.sql')).sort()

const invalid_file = files.find((file) => !file.match(/^\d{3}_/))
if (invalid_file) throw new Error(`Invalid file name: ${invalid_file}`)

for (const file of files) {
	const sql = await fs.readFile(path.join(data_folder, file), 'utf8')

	const tx = await db.transaction()
	try {
		await tx.executeMultiple(sql)
		await tx.commit()
		const operation = file.includes('clear') ? 'Clear data' : 'Insert data'
		console.info(`${operation}: ${file}`)
	} catch (err) {
		console.error(`Failed to process ${file}`, err)
		await tx.rollback()
		process.exit(1)
	}
}

console.info('Inserted all data')
