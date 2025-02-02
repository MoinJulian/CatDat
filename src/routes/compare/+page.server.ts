import { categories } from '$lib/categories/categories'
import { shorten_category } from '$lib/categories/categories.utils'
import type { PageServerLoad } from '../missing/$types'

export const load: PageServerLoad = () => {
	return { categories: categories.map(shorten_category) }
}
