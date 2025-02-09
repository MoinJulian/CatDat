import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

import { render_nested_formulas } from '$lib/commons/rendering'
import { is_valid_category } from '$lib/data-utils/data.helpers'
import { get_detailed_category } from '$lib/data-utils/details'

export const load: PageServerLoad = (event) => {
	const id = event.params.id

	const is_valid = is_valid_category(id)
	if (!is_valid) return error(404, 'Invalid category ID')

	const detailed_category = get_detailed_category(id)
	const rendered_category = render_nested_formulas(detailed_category)

	return {
		category: rendered_category,
	}
}
