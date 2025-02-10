import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

import { max_categories } from '../compare.config'
import { render_formulas } from '$lib/commons/rendering'
import { get_category, is_valid_category } from '$lib/data-utils/data.helpers'
import {
	categories_with_deduced_properties_dictionary,
	category_system,
} from '$lib/data-utils/deductions'

export const load: PageServerLoad = (event) => {
	const compared_ids = event.params.ids.split('/')
	const is_valid = compared_ids.every(is_valid_category)

	if (!is_valid) throw error(404, 'Invalid query')

	if (compared_ids.length > max_categories) throw error(404, 'Too many categories')

	const compared_categories = compared_ids.map((id) => {
		const { name, notation } = get_category(id)
		return {
			id,
			name,
			notation: render_formulas(notation),
		}
	})

	const compared_categories_with_properties = compared_ids.map(
		(id) => categories_with_deduced_properties_dictionary[id],
	)

	const comparison_table = category_system.get_comparison_table(
		compared_categories_with_properties,
	)

	if (!comparison_table) {
		return error(404, 'Invalid query')
	}

	return {
		compared_categories,
		comparison_table,
	}
}
