import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

import { get_comparison } from '$lib/commons/comparison'

export const load: PageServerLoad = (event) => {
	const compared_ids = event.params.ids.split('/')

	try {
		return get_comparison(compared_ids)
	} catch (e) {
		const message = e instanceof Error ? e.message : 'Invalid query'
		return error(404, message)
	}
}
