import { properties_dictionary, type PropertyName } from './dictionaries/properties'
import type { Implication } from './types'

export function get_dual_implication(implication: Implication): Implication | null {
	const dual_implication: Implication = {
		assumptions: [],
		conclusions: [],
	}
	for (const assumption of implication.assumptions) {
		const property = properties_dictionary[assumption]
		if (!property.dual) return null
		dual_implication.assumptions.push(property.dual as PropertyName)
	}
	for (const conclusion of implication.conclusions) {
		const property = properties_dictionary[conclusion]
		if (!property.dual) return null
		dual_implication.conclusions.push(property.dual as PropertyName)
	}

	if (implication.equivalent) {
		dual_implication.equivalent = true
	}

	return dual_implication
}

export function get_new_dual_implication(implication: Implication): Implication | null {
	const dual_implication = get_dual_implication(implication)
	if (!dual_implication) return null
	const is_the_same =
		implication.assumptions.toSorted().join(',') ===
			dual_implication.assumptions.toSorted().join(',') &&
		implication.conclusions.toSorted().join(',') ===
			dual_implication.conclusions.toSorted().join(',')
	if (is_the_same) return null
	return dual_implication
}
