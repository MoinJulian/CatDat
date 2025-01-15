import type { NormalizedImplication, PropertyName } from '$lib/types'

import { isSubset } from '$lib/utils'
import { implications } from './implications'
import { properties_list } from './properties'

/**
 * Converts implications of the form [p1,...,ps] ---> [q1,...,qt] to
 * implications of the form {p1,....,ps} ---> q.
 * Also takes into account reversible implications.
 */
function get_normalized_implications(): NormalizedImplication[] {
	const normalized_implications: NormalizedImplication[] = []

	for (const { conclusions, assumptions, equivalent } of implications) {
		for (const conclusion of conclusions) {
			normalized_implications.push({
				assumptions: new Set(assumptions),
				conclusion,
			})
		}

		if (equivalent) {
			for (const assumption of assumptions) {
				normalized_implications.push({
					assumptions: new Set(conclusions),
					conclusion: assumption,
				})
			}
		}
	}
	return normalized_implications
}

export const normalized_implications = get_normalized_implications()

/**
 * A deduction is an iterated implication using some of the assumptions.
 * For example: Given implications p -> q,q' and q -> r, then r is a deduction of p.
 */
export function get_deductions(assumptions: Set<PropertyName>): Set<PropertyName> {
	let done = false
	const deductions: Set<PropertyName> = assumptions

	while (!done) {
		done = true
		for (const property of properties_list) {
			const conclusion = property.name as PropertyName
			if (deductions.has(conclusion)) continue

			const implication = normalized_implications.find(
				(implication) =>
					implication.conclusion === conclusion &&
					isSubset(implication.assumptions, deductions),
			)
			if (implication) {
				deductions.add(conclusion)
				done = false
			}
		}
	}

	return deductions
}
