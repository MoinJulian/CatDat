import { browser } from '$app/environment'
import { storage_key } from '$lib/commons/comparison.config'

export function get_saved_category_names(): string[] {
	if (!browser) return []

	const names_string = window.sessionStorage.getItem(storage_key)
	if (!names_string) return []

	try {
		const parsed_names: unknown = JSON.parse(names_string)
		const is_valid =
			Array.isArray(parsed_names) &&
			parsed_names.every((name) => typeof name === 'string')

		return is_valid ? parsed_names : []
	} catch {
		console.error('Error parsing category names from sessionStorage')
		return []
	}
}
