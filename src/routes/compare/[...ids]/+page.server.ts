import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

import {
	categories_dictionary_detailed,
	category_system,
} from '$lib/categories/categories.utils'
import { is_valid_category } from '$lib/categories/categoryIDs'
import { max_categories } from '../compare.config'

export const load: PageServerLoad = (event) => {
	const ids = event.params.ids.split('/')
	const is_valid = ids.every(is_valid_category)

	if (!is_valid) throw error(404, 'Invalid query')

	if (ids.length > max_categories) throw error(404, 'Too many categories')

	const compared_categories = ids.map((id) => categories_dictionary_detailed[id])
	const comparison_table = category_system.get_comparison_table(compared_categories)

	if (!comparison_table) {
		return error(404, 'Invalid query')
	}

	return {
		compared_categories,
		comparison_table,
	}
}
