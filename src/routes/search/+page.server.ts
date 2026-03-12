import { get_search_results } from '$lib/commons/search'

export const load = ({ url }) => {
	return get_search_results(url)
}
