import { implications } from '$lib/implications/implications'
import { implications_with_duals } from '$lib/properties/properties.utils'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (event) => {
	const show_all = event.url.searchParams.has('show_all')
	const implications_to_show = show_all ? implications_with_duals : implications
	return {
		implications: implications_to_show.toSorted((a, b) =>
			a.assumptions[0].localeCompare(b.assumptions[0]),
		),
		show_all,
	}
}
