import { categories } from '$lib/dictionaries/categories'
import { add_details } from '$lib/details'

const categories_with_properties = categories.map((cat) => add_details(cat))

export function get_suitable_categories(properties: string[], non_properties: string[]) {
	if (properties.length === 0 && non_properties.length === 0) {
		return []
	}

	const suitable_categories = []

	for (const category of categories_with_properties) {
		const has_all_properties = properties.every((property) =>
			category.properties.some((prop) => prop.name === property),
		)
		const has_no_non_properties = non_properties.every(
			(property) => !category.properties.some((prop) => prop.name === property),
		)
		if (has_all_properties && has_no_non_properties) {
			suitable_categories.push(category)
		}
	}
	return suitable_categories
}
