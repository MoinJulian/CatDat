import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (event) => {
	const id_1 = event.params.id1
	const id_2 = event.params.id2
	return { id_1, id_2 }
}
