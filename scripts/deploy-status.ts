import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config({ quiet: true })
const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN

if (!DB_URL) throw new Error('No DB_URL found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN,
})

const status = process.argv[2]?.slice(2)

await db.execute(
	`
    UPDATE deployment_status SET
        status = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
`,
	[status],
)
