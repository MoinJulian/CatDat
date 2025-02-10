import { CATEGORIES } from '$lib/database/categories.data'
import { json, type RequestHandler } from '@sveltejs/kit'

// TODO: add info about monomorphisms, related categories, etc.
export const GET: RequestHandler = async (event) => {
	const show_all = event.url.searchParams.has('all')
	if (!show_all) return json(CATEGORIES)
	const { category_system } = await import('$lib/data-utils/deductions')
	const data = category_system.entities
	return json(data)
}
