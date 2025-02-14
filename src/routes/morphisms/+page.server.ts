import { render_nested_formulas } from '$lib/commons/rendering'
import { MORPHISM_IMPLICATIONS } from '$lib/database/morphisms/morphism-implications.data'
import { MORPHISM_TYPES } from '$lib/database/morphisms/morphism-types.data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	const morphisms = render_nested_formulas(MORPHISM_TYPES)

	const morphism_implications = render_nested_formulas(MORPHISM_IMPLICATIONS)
	return { morphisms, morphism_implications }
}
