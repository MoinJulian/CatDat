import type { Implication } from '$lib/types'
import { properties } from '$lib/properties/properties'
import { implications } from './implications'
import { get_new_dual_implication, get_self_dual_implication } from './dualization'

export const implications_with_duals: Implication[] = [
	...implications,
	...implications.map(get_new_dual_implication),
	...properties.map((property) => get_self_dual_implication(property.id)),
].filter((implication) => implication != null)
