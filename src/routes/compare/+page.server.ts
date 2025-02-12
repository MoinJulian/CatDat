import { select } from '$lib/commons/utils'
import type { CategorySimple } from '$lib/data-utils/data.helpers'
import { CATEGORIES } from '$lib/database/categories.data'
import type { PageServerLoad } from '../missing/$types'

export const load: PageServerLoad = () => {
	const categories: CategorySimple[] = select('id', 'name').from(CATEGORIES)
	return { categories }
}
