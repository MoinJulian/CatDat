import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

import {
	categories_dictionary_detailed,
	category_system,
} from '$lib/categories/categories.utils'
import { is_valid_category } from '$lib/categories/categoryIDs'
import { max_categories } from '../compare.config'
import { render_formulas } from '$lib/commons/rendering'

export const load: PageServerLoad = (event) => {
	const ids = event.params.ids.split('/')
	const is_valid = ids.every(is_valid_category)

	if (!is_valid) throw error(404, 'Invalid query')

	if (ids.length > max_categories) throw error(404, 'Too many categories')

	const compared_categories_detailed = ids.map(
		(id) => categories_dictionary_detailed[id],
	)
	const comparison_table = category_system.get_comparison_table(
		compared_categories_detailed,
	)
	const compared_categories = compared_categories_detailed.map((category) => ({
		id: category.id,
		name: category.name,
		notation: render_formulas(category.notation),
	}))

	if (!comparison_table) {
		return error(404, 'Invalid query')
	}

	return {
		compared_categories,
		comparison_table,
	}
}
