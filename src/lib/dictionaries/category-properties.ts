import type { CategoryProperty } from '$lib/types'

export const category_properties_dictionary = {
	'small': {
		id: 1,
		description:
			'The collection of objects and the collection of morphisms is a set, i.e. small.',
	},
	'locally small': {
		id: 2,
		description:
			'For every pair of objects A,B, the collection of morphisms A -> B is a set, i.e. small.',
	},
	'complete': {
		id: 3,
		description: 'Every small diagram in the category has a limit.',
	},
	'cocomplete': {
		id: 4,
		description: 'Every small diagram in the category has a colimit.',
	},
	'cartesian closed': {
		id: 5,
		description: 'All finite products and exponentials exist.',
	},
	'has a preadditive structure': {
		id: 6,
		description:
			"Each hom-set carries the structure of an abelian group and composition is bilinear. Notice that 'preadditive' is an extra structure. This property just says that some preadditive structure exists.",
	},
	'abelian': {
		id: 7,
		description:
			'A category is abelian if it is additive, every morphism has a kernel and a cokernel, and every monomorphism and epimorphism is normal. As opposed to many other concepts of categories, being abelian turns out to be a mere property. For example, monoidal not just a property.',
	},
	'has finite limits': {
		id: 8,
		description: 'Every finite diagram in the category has a limit.',
	},
	'has finite colimits': {
		id: 9,
		description: 'Every finite diagram in the category has a colimit.',
	},
	'has a zero object': {
		id: 10,
		description: 'A zero object is both initial and terminal.',
	},
	'locally finitely presentable': {
		id: 11,
		description:
			'A category is locally finitely presentable if it is cocomplete and every object is a filtered colimit of finitely presentable objects.',
	},
	'elementary topos': {
		id: 12,
		description:
			'An elementary topos is a cartesian closed category with finite limits and subobject classifiers.',
	},
	'Grothendieck topos': {
		id: 13,
		description:
			'A Grothendieck topos is a category that is equivalent to the category of sheaves on a site.',
	},
	'well-powered': {
		id: 14,
		description:
			'A category is well-powered if the collection of subobjects of each object is a set.',
	},
} as const satisfies Record<string, Omit<CategoryProperty, 'name'>>
