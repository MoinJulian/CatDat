import { select } from '$lib/commons/utils'
import { CATEGORIES } from '$lib/database/categories.data'
import type { PageServerLoad } from '../missing/$types'

export const load: PageServerLoad = () => {
	return { categories: select('id', 'name').from(CATEGORIES) }
}
