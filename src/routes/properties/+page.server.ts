import type { PageServerLoad } from './$types'

import { propertyIDs } from '$lib/data-utils/data.utils'

export const load: PageServerLoad = () => {
	return { propertyIDs }
}
