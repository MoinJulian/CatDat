import { render_formulas } from '$lib/commons/rendering'
import { get_category, is_valid_category } from '$lib/data-utils/data.helpers'
import {
	categories_with_deduced_properties_dictionary,
	category_system,
} from '$lib/data-utils/deductions'
import { max_categories } from './comparison.config'

export function get_comparison(compared_ids: string[]) {
	const is_valid = compared_ids.every(is_valid_category)
	if (!is_valid) throw new Error('Invalid query')

	if (compared_ids.length > max_categories) throw new Error('Too many categories')

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
		throw new Error('Table could not be generated')
	}

	return {
		compared_categories,
		comparison_table,
	}
}
