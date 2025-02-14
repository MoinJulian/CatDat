import { select } from '$lib/commons/utils'
import { get_tags } from '$lib/data-utils/data.helpers'
import { CATEGORIES } from '$lib/database/categories/categories.data'
import type { PageServerLoad } from '../missing/$types'

export const load: PageServerLoad = (event) => {
	const categories = select('id', 'name').from(CATEGORIES)
	const tag = event.url.searchParams.get('tag')
	if (!tag) {
		return { categories, tag: null }
	}
	const categories_with_tag = categories.filter(({ id }) => get_tags(id).includes(tag))
	return { categories: categories_with_tag, tag }
}
