import { categories_dictionary } from './dictionaries/categories'
import { category_properties_dictionary } from './dictionaries/category-properties'
import type { Category, CategoryProperty } from './types'

export const categories_list: Category[] = Object.entries(categories_dictionary).map(
	([name, category]) => ({
		name,
		...category,
	}),
)

export const category_property_list: CategoryProperty[] = Object.entries(
	category_properties_dictionary,
).map(([name, property]) => ({
	name,
	...property,
}))
