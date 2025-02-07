import type { PageServerLoad } from './$types'
import { select } from '$lib/commons/utils'
import { CATEGORIES, type Category } from '$lib/data/categories.data'

export const load: PageServerLoad = () => {
	const simplified_categories = select(CATEGORIES as Category[], ['id', 'name'])
	return { categories: simplified_categories }
}
