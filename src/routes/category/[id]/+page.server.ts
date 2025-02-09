import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_formulas, render_nested_formulas } from '$lib/commons/rendering'
import { CATEGORY_RELATIONS } from '$lib/database/category-relations.data'
import {
	get_category,
	get_epis,
	get_isos,
	get_monos,
	get_property,
	is_valid_category,
} from '$lib/data-utils/data.helpers'
import { select } from '$lib/commons/utils'
import { CATEGORY_TAGS } from '$lib/database/category-tags.data'
import { categories_with_deduced_properties_dictionary } from '$lib/data-utils/deductions'
import { CATEGORY_PROPERTIES } from '$lib/database/category-properties.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/category-non-properties.data'

// TODO: clean this load function, separate out the logic
export const load: PageServerLoad = (event) => {
	const id = event.params.id

	const is_valid = is_valid_category(id)
	if (!is_valid) return error(404, 'Invalid category ID')

	const category = get_category(id)
	const tags = CATEGORY_TAGS[id]

	const related_category_ids = CATEGORY_RELATIONS[id]

	const related_categories = select('id', 'notation')
		.from(related_category_ids.map(get_category))
		.map(render_nested_formulas)

	const deductions = categories_with_deduced_properties_dictionary[id]

	const isomorphisms = render_nested_formulas(get_isos(id))
	const monomorphisms = render_nested_formulas(get_monos(id))
	const epimorphisms = render_nested_formulas(get_epis(id))

	const reasons = CATEGORY_PROPERTIES[id]

	// TODO: clean this code up later
	const properties_with_reasons = Array.from(deductions.properties).map(
		(property_id) => {
			const property = get_property(property_id)
			const reason = render_formulas(
				reasons.find((entry) => entry[0] === property_id)?.[1] ?? '',
			)
			return { property, reason }
		},
	)

	// TODO: clean this code up later
	const non_properties_with_reasons = Array.from(deductions.non_properties).map(
		(property_id) => {
			const property = get_property(property_id)
			const reason = render_formulas(
				CATEGORY_NON_PROPERTIES[id].find(
					(entry) => entry[0] === property_id,
				)?.[1] ?? '',
			)
			return { property, reason }
		},
	)

	return {
		category: render_nested_formulas(category),
		tags,
		related_categories,
		properties_with_reasons,
		non_properties_with_reasons,
		deduced_properties: Array.from(deductions.deduced_properties).map(get_property),
		deduced_non_properties: Array.from(deductions.deduced_non_properties).map(
			get_property,
		),
		unknown_properties: Array.from(deductions.unknown_properties).map(get_property),
		all_properties: Array.from(deductions.all_properties).map(get_property),
		all_non_properties: Array.from(deductions.all_non_properties).map(get_property),
		isomorphisms,
		monomorphisms,
		epimorphisms,
	}
}
