import { select } from '$lib/commons/utils'
import type { CategorySimple } from '$lib/data-utils/data.helpers'
import { CATEGORIES } from '$lib/database/categories.data'

export const load = () => {
	const categories: CategorySimple[] = select('id', 'name').from(CATEGORIES)
	return { categories }
}
