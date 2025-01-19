import { categories_detailed } from './categories/categories.dict'
import type { PropertyID } from './properties/propertyIDs'

export function get_suitable_categories(
	properties: PropertyID[],
	non_properties: PropertyID[],
) {
	if (properties.length === 0 && non_properties.length === 0) return []

	return categories_detailed.filter((category) => {
		const has_all_properties = properties.every((property) =>
			category.properties.some((prop) => prop.id === property),
		)
		const has_no_non_properties = non_properties.every(
			(property) => !category.properties.some((prop) => prop.id === property),
		)
		return has_all_properties && has_no_non_properties
	})
}
