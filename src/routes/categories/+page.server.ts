import type { PageServerLoad } from './$types'
import { select } from '$lib/commons/utils'
import { CATEGORIES } from '$lib/data/categories.data'

export const load: PageServerLoad = () => {
	const simplified_categories = select(CATEGORIES, ['id', 'name'])
	return { categories: simplified_categories }
}
