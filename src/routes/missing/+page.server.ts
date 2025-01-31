import type { PageServerLoad } from './$types'
import { category_system } from '$lib/categories/categories.utils'

export const load: PageServerLoad = () => {
	return {
		missing_basic_combinations: category_system.missing_basic_combinations,
		categories_with_unknown_properties:
			category_system.entities_with_unknown_properties,
	}
}
