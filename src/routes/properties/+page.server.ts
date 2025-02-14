import { select } from '$lib/commons/utils'
import { PROPERTIES } from '$lib/database/categories/properties.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	const sorted_properties = PROPERTIES.toSorted((a, b) =>
		a.id.toLowerCase().localeCompare(b.id.toLowerCase()),
	)

	return { properties: select('id', 'prefix').from(sorted_properties) }
}
