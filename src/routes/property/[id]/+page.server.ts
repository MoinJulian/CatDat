import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { categories_list, category_property_list } from '$lib/lists'
import type { category_properties_dictionary } from '$lib/dictionaries/category-properties'

export const load: PageServerLoad = (event) => {
	const id = event.params.id
	const property = category_property_list.find(
		(properrty) => properrty.id.toString() === id,
	)
	if (!property) return error(404, 'Property not found')

	const categories_with_this_property = categories_list.filter((category) =>
		category.properties.includes(
			property.name as keyof typeof category_properties_dictionary,
		),
	)
	return { property, categories_with_this_property }
}
