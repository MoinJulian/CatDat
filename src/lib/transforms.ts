import { category_properties_dictionary } from './dictionaries/category-properties'
import type { Category, CategoryWithProperties } from './types'

export function add_properties(category: Category): CategoryWithProperties {
	const actual_properties = category.properties.map((name) => ({
		name,
		...category_properties_dictionary[name],
	}))
	const actual_non_properties = category.non_properties.map((name) => ({
		name,
		...category_properties_dictionary[name],
	}))
	const { properties: _, non_properties: __, ...rest } = category
	return {
		...rest,
		properties: actual_properties,
		non_properties: actual_non_properties,
	}
}
