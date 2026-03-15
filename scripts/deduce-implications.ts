import dotenv from 'dotenv'
import { createClient } from '@libsql/client'

dotenv.config()

const DB_URL = process.env.DB_URL
const DB_AUTH_TOKEN = process.env.DB_AUTH_TOKEN
const LOG_DETAILS = process.env.LOG_DETAILS

if (!DB_URL) throw new Error('No DB_URL found')
if (!DB_AUTH_TOKEN) throw new Error('No DB_AUTH_TOKEN found')
if (!LOG_DETAILS) console.warn('No LOG_DETAILS found')

const db = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN!,
})

await db.execute('PRAGMA foreign_keys = ON')

deduce_implications()

async function deduce_implications() {
	await clear_deduced_implications()
	await create_dualized_implications()
	await create_self_dual_implications()
}

async function clear_deduced_implications() {
	await db.execute(`DELETE FROM implications WHERE is_deduced = TRUE`)
}

async function create_dualized_implications() {
	const res = await db.execute(`
        SELECT
            v.id,
            v.assumptions,
            v.conclusions,
            v.is_equivalence,
            v.reason,
            (
                SELECT json_group_array(p.dual_property_id)
                FROM json_each(v.assumptions) a
                JOIN properties p ON p.id = a.value
            ) AS dual_assumptions,
            (
                SELECT json_group_array(p.dual_property_id)
                FROM json_each(v.conclusions) c
                JOIN properties p ON p.id = c.value
            ) AS dual_conclusions
        FROM implications_view v
        WHERE v.is_deduced = FALSE
    `)

	const implications = res.rows as unknown as {
		id: string
		assumptions: string
		conclusions: string
		dual_assumptions: string
		dual_conclusions: string
		is_equivalence: number
		reason: string
	}[]

	const dualizable_implications = implications.filter((impl) => {
		const has_null =
			JSON.parse(impl.dual_assumptions).includes(null) ||
			JSON.parse(impl.dual_conclusions).includes(null)
		if (has_null) return false

		const assumptions = new Set(JSON.parse(impl.assumptions))
		const conclusions = new Set(JSON.parse(impl.conclusions))
		const dual_assumptions = new Set(JSON.parse(impl.dual_assumptions))
		const dual_conclusions = new Set(JSON.parse(impl.dual_conclusions))

		return (
			!are_equal_sets(assumptions, dual_assumptions) ||
			!are_equal_sets(conclusions, dual_conclusions)
		)
	})

	await db.batch(
		dualizable_implications.map((impl) => ({
			sql: `
            INSERT INTO implication_input (
                id,
                assumptions,
                conclusions,
                is_equivalence,
                reason,
                is_deduced
            ) VALUES (?, ?, ?, ?, ?, TRUE)`,
			args: [
				`dual_${impl.id}`,
				impl.dual_assumptions,
				impl.dual_conclusions,
				impl.is_equivalence,
				`[dualized] ${impl.reason}`,
			],
		})),
		'write',
	)

	console.info(`Dualized ${dualizable_implications.length} implications`)
	if (LOG_DETAILS === 'true') console.info(dualizable_implications.map((i) => i.id))
}

async function create_self_dual_implications() {
	const { rows } = await db.execute(`
        INSERT INTO implication_input (
            id,
            assumptions,
            conclusions,
            is_equivalence,
            reason,
            is_deduced
        )
        SELECT
            'selfdual_' || p.id,
            json_array('self-dual', p.id),
            json_array(p.dual_property_id),
            FALSE,
            'trivial by self-duality',
            TRUE
        FROM
            properties p
        WHERE
            p.dual_property_id IS NOT NULL
            AND p.id != 'self-dual'
            AND p.id != p.dual_property_id
            AND p.invariant_under_equivalences = TRUE
        RETURNING id
    `)

	console.info(`Created ${rows.length} self-dual implications`)
	if (LOG_DETAILS === 'true') console.info(rows.map((i) => i.id))
}

function are_equal_sets<T>(a: Set<T>, b: Set<T>) {
	return a.size === b.size && [...a].every((el) => b.has(el))
}
