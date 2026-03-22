import sql from 'sql-template-tag'
import { query } from './db'

export async function get_deployment_status() {
	const { rows } = await query<{ status: 'ready' | 'deploying' }>(
		sql`SELECT status FROM deployment_status WHERE id = 1`,
	)
	if (!rows?.length) return null
	return rows[0].status
}
