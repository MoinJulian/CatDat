import { categories_detailed } from './categories/categories.dict'
import type { PropertyID } from './properties/propertyIDs'
import type { CategoryDetailed } from './types'

export function get_suitable_categories(
	properties: PropertyID[],
	non_properties: PropertyID[],
): CategoryDetailed[] {
	if (properties.length === 0 && non_properties.length === 0) return []

	return categories_detailed.filter((category) => {
		const has_all_properties = properties.every(
			(property) =>
				category.properties.includes(property) ||
				category.deduced_properties.includes(property),
		)
		const has_all_non_properties = non_properties.every(
			(property) =>
				category.non_properties.includes(property) ||
				category.deduced_non_properties.includes(property),
		)
		return has_all_properties && has_all_non_properties
	})
}
