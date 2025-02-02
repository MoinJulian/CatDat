import type { PageServerLoad } from './$types'
import { category_system, shorten_category } from '$lib/categories/categories.utils'
import { categories } from '$lib/categories/categories'

const has_todo = (entry: string | undefined) => !entry || entry.includes('TODO')

export const load: PageServerLoad = () => {
	return {
		missing_basic_combinations: category_system.missing_basic_combinations,
		categories_with_unknown_properties:
			category_system.entities_with_unknown_properties.map(shorten_category),
		categories_with_unknown_special_morphisms: categories
			.filter(
				(category) =>
					has_todo(category.special_morphisms.isomorphisms) ||
					has_todo(category.special_morphisms.monomorphisms) ||
					has_todo(category.special_morphisms.epimorphisms),
			)
			.map(shorten_category),
	}
}
