import type { PageServerLoad } from './$types'
import { category_system } from '$lib/categories/categories.utils'
import { categories } from '$lib/categories/categories'

export const load: PageServerLoad = () => {
	return {
		missing_basic_combinations: category_system.missing_basic_combinations,
		categories_with_unknown_properties:
			category_system.entities_with_unknown_properties,
		categories_with_unknown_monomorphisms: categories.filter(
			(category) =>
				!category.monomorphisms || category.monomorphisms.includes('TODO:'),
		),
		categories_with_unknown_epimorphisms: categories.filter(
			(category) =>
				!category.epimorphisms || category.epimorphisms.includes('TODO:'),
		),
	}
}
