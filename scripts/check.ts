import properties_Ab from './data/properties/Ab.json'
import non_properties_Ab from './data/non_properties/Ab.json'
import properties_Top from './data/properties/Top.json'
import non_properties_Top from './data/non_properties/Top.json'
import dotenv from 'dotenv'
import { createClient } from '@libsql/client'

dotenv.config()

const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN

if (!DB_URL) throw new Error('No DB_URL found')
if (!DB_AUTH_TOKEN) throw new Error('No DB_AUTH_TOKEN found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN!,
})

await db.execute('PRAGMA foreign_keys = ON')

check()

async function check() {
	await check_properties('Ab', properties_Ab)
	await check_non_properties('Ab', non_properties_Ab)
	await check_properties('Top', properties_Top)
	await check_non_properties('Top', non_properties_Top)
	await assert_no_unknown_properties('Set')
	await assert_no_unknown_properties('Ab')
}

async function check_properties(category_id: string, expected: string[]) {
	const properties = await get_properties(category_id)
	const ok = are_equal_sets(new Set(properties), new Set(expected))
	if (!ok) throw new Error(`❌ Incorrect properties of ${category_id}`)
	console.info(`✅ Properties of ${category_id} are correct`)
}

async function check_non_properties(category_id: string, expected: string[]) {
	const non_properties = await get_non_properties(category_id)
	const ok = are_equal_sets(new Set(non_properties), new Set(expected))
	if (!ok) throw new Error(`❌ Incorrect non-properties of ${category_id}`)
	console.info(`✅ Non-properties of ${category_id} are correct`)
}

async function assert_no_unknown_properties(category_id: string) {
	const unknown_properties = await get_unknown_properties(category_id)
	if (unknown_properties.length > 0) {
		throw new Error(
			`❌ Found ${unknown_properties.length} unknown properties for ${category_id}, expected 0.`,
		)
	}
	console.info(`✅ No unknown properties for ${category_id}`)
}

async function get_properties(category_id: string) {
	const res = await db.execute(
		`
			SELECT property_id FROM category_properties
			WHERE category_id = ?
		`,
		[category_id],
	)
	return res.rows.map(({ property_id }) => property_id) as string[]
}

async function get_non_properties(category_id: string) {
	const res = await db.execute(
		`
			SELECT non_property_id FROM category_non_properties
			WHERE category_id = ?
		`,
		[category_id],
	)
	return res.rows.map(({ non_property_id }) => non_property_id) as string[]
}

async function get_unknown_properties(category_id: string) {
	const res = await db.execute(
		`
			SELECT p.id FROM properties p
			WHERE NOT EXISTS (
				SELECT 1 FROM category_properties
				WHERE property_id = p.id AND category_id = ?
			)
			AND NOT EXISTS (
				SELECT 1 FROM category_non_properties
				WHERE non_property_id = p.id AND category_id = ?
			)
			ORDER BY lower(p.id)
		`,
		[category_id, category_id],
	)

	return res.rows.map(({ id }) => id) as string[]
}

function are_equal_sets<T>(a: Set<T>, b: Set<T>) {
	return a.size === b.size && [...a].every((el) => b.has(el))
}
