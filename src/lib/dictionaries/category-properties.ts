import type { CategoryProperty } from '$lib/types'

export const category_properties_dictionary = {
	'small': {
		id: '1',
		description:
			'The collection of objects and the collection of morphisms is a set, i.e. small.',
	},
	'locally small': {
		id: '2',
		description:
			'For every pair of objects A,B, the collection of morphisms A -> B is a set, i.e. small.',
	},
	'complete': {
		id: '3',
		description: 'Every small diagram in the category has a limit.',
	},
	'cocomplete': {
		id: '4',
		description: 'Every small diagram in the category has a colimit.',
	},
	'cartesian closed': {
		id: '5',
		description: 'All finite products and exponentials exist.',
	},
	'abelian': {
		id: '6',
		description:
			'A category is abelian if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
	},
} as const satisfies Record<string, Omit<CategoryProperty, 'name'>>
