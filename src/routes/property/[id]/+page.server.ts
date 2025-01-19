import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type { Property } from '$lib/types'
import { categories_detailed } from '$lib/categories/categories.dict'
import { properties_dictionary } from '$lib/properties/property.dict'
import { is_valid_property } from '$lib/properties/propertyIDs'

export const load: PageServerLoad = (event) => {
	const id = event.params.id.replaceAll('_', ' ')
	const valid = is_valid_property(id)

	if (valid) {
		const property = properties_dictionary[id]

		const categories_with_this_property = categories_detailed.filter((category) =>
			category.properties.some((p) => p.id === property.id),
		)

		const categories_without_this_property = categories_detailed.filter((category) =>
			category.non_properties.some((p) => p.id === property.id),
		)

		return {
			property,
			categories_with_this_property,
			categories_without_this_property,
		}
	}

	return error(404, 'Property not found')
}
