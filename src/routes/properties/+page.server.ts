import { select } from '$lib/commons/utils'
import { PROPERTIES } from '$lib/database/properties.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	const properties = select('id', 'prefix').from(PROPERTIES)

	return { properties }
}
