import { query } from '$lib/server/db'
import { are_equal_sets } from '$lib/server/utils'
import sql from 'sql-template-tag'
import properties_Ab from './properties/Ab.json'
import non_properties_Ab from './non_properties/Ab.json'
import properties_Top from './properties/Top.json'
import non_properties_Top from './non_properties/Top.json'

async function get_properties(category_id: string) {
	const { rows, err } = await query<{ property_id: string }>(sql`
        SELECT property_id FROM category_properties
        WHERE category_id = ${category_id}
    `)
	if (err) throw new Error('Database error')
	return rows.map(({ property_id }) => property_id)
}

async function get_non_properties(category_id: string) {
	const { rows, err } = await query<{ non_property_id: string }>(sql`
        SELECT non_property_id FROM category_non_properties
        WHERE category_id = ${category_id}
    `)
	if (err) throw new Error('Database error')
	return rows.map(({ non_property_id }) => non_property_id)
}

async function get_unknown_properties(category_id: string) {
	const { rows, err } = await query<{ id: string }>(sql`
		SELECT p.id FROM properties p
		WHERE NOT EXISTS (
			SELECT 1 FROM category_properties
			WHERE property_id = p.id AND category_id = ${category_id}
		)
		AND NOT EXISTS (
			SELECT 1 FROM category_non_properties
			WHERE non_property_id = p.id AND category_id = ${category_id}
		)
		ORDER BY lower(p.id)	
	`)

	if (err) throw new Error('Database error')
	return rows.map(({ id }) => id)
}

async function check_properties(category_id: string, expected: string[]) {
	const properties = await get_properties(category_id)
	const ok = are_equal_sets(new Set(properties), new Set(expected))
	if (!ok) throw new Error(`Incorrect properties of ${category_id}`)
	console.info(`Properties of ${category_id} are OK`)
}

async function check_non_properties(category_id: string, expected: string[]) {
	const non_properties = await get_non_properties(category_id)
	const ok = are_equal_sets(new Set(non_properties), new Set(expected))
	if (!ok) throw new Error(`Incorrect non-properties of ${category_id}`)
	console.info(`Non-properties of ${category_id} are OK`)
}

async function assert_no_unknown_properties(category_id: string) {
	const unknown_properties = await get_unknown_properties(category_id)
	if (unknown_properties.length > 0) {
		throw new Error(
			`Found ${unknown_properties.length} unknown properties for ${category_id}, expected 0.`,
		)
	}
	console.info(`No unknown properties for ${category_id}, OK`)
}

async function check() {
	await check_properties('Ab', properties_Ab)
	await check_non_properties('Ab', non_properties_Ab)
	await check_properties('Top', properties_Top)
	await check_non_properties('Top', non_properties_Top)
	await assert_no_unknown_properties('Set')
	await assert_no_unknown_properties('Ab')
}

check()
