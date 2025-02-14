import type { CategoryID } from '$lib/database/categories/categories.data'
import { CATEGORY_EPIMORPHISMS } from '$lib/database/categories/category-epimorphisms.data'
import { CATEGORY_ISOMORPHISMS } from '$lib/database/categories/category-isomorphisms.data'
import { CATEGORY_MONOMORPHISMS } from '$lib/database/categories/category-monomorphisms.data'
import { get_category, get_related_categories, get_tags } from './data.helpers'
import { categories_with_deduced_properties_dictionary } from './deductions'

export function get_detailed_category(id: CategoryID) {
	const category = get_category(id)
	const tags = get_tags(id)
	const related_categories = get_related_categories(id)

	const {
		properties,
		non_properties,
		deduced_properties,
		deduced_non_properties,
		unknown_properties,
	} = categories_with_deduced_properties_dictionary[id]

	const isomorphisms = CATEGORY_ISOMORPHISMS[id]
	const monomorphisms = CATEGORY_MONOMORPHISMS[id]
	const epimorphisms = CATEGORY_EPIMORPHISMS[id]

	return {
		...category,
		tags,
		related_categories,
		monomorphisms,
		epimorphisms,
		isomorphisms,
		properties,
		non_properties,
		deduced_properties,
		deduced_non_properties,
		unknown_properties,
	}
}
