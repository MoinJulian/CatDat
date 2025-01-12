import type { category_properties_dictionary } from './dictionaries/category-properties'

export type Category = {
	id: number
	name: string
	notation: string
	objects: string
	morphisms: string
	description?: string
	properties: (keyof typeof category_properties_dictionary)[]
	non_properties: (keyof typeof category_properties_dictionary)[]
}

export type CategoryProperty = {
	id: string
	name: string
	description: string
}
