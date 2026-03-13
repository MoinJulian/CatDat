import { browser } from '$app/environment'
import { is_string_array } from '$lib/commons/utils'
import {
	SELECTED_NON_PROPERTIES_STORAGE_KEY,
	SELECTED_PROPERTIES_STORAGE_KEY,
} from './search.config'

export function get_saved_search(): [string[], string[]] {
	if (!browser) return [[], []]

	const properties_string = window.sessionStorage.getItem(
		SELECTED_PROPERTIES_STORAGE_KEY,
	)
	const non_properties_string = window.sessionStorage.getItem(
		SELECTED_NON_PROPERTIES_STORAGE_KEY,
	)

	if (!properties_string || !non_properties_string) return [[], []]

	try {
		const parsed_properties: unknown = JSON.parse(properties_string)
		const parsed_non_properties: unknown = JSON.parse(non_properties_string)

		const is_valid =
			is_string_array(parsed_properties) && is_string_array(parsed_non_properties)

		return is_valid ? [parsed_properties, parsed_non_properties] : [[], []]
	} catch {
		console.error('Error parsing saved search from sessionStorage')
		return [[], []]
	}
}

export function save_search(
	selected_properties: string[],
	selected_non_properties: string[],
) {
	if (!browser) return

	window.sessionStorage.setItem(
		SELECTED_PROPERTIES_STORAGE_KEY,
		JSON.stringify(selected_properties),
	)
	window.sessionStorage.setItem(
		SELECTED_NON_PROPERTIES_STORAGE_KEY,
		JSON.stringify(selected_non_properties),
	)
}
