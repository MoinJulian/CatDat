import type { Category } from '$lib/types'

export const categories_dictionary = {
	'Category of sets': {
		id: 1,
		notation: '\\mathbf{Set}',
		objects: 'sets',
		morphisms: 'functions / maps',
		description:
			'The category of sets plays a fundamental role in category theory. Due to the Yoneda embedding, many results about general categories can be reduced to the category of sets. It is also usually the first example of a category that one encounters.',
		properties: ['cartesian closed', 'cocomplete', 'cocomplete', 'locally small'],
		non_properties: ['small', 'abelian'],
	},
	'Category of abelian groups': {
		id: 2,
		notation: '\\mathbf{Ab}',
		objects: 'abelian groups',
		morphisms: 'group homomorphisms',
		description: 'This is the prototype of an abelian category.',
		properties: ['locally small', 'abelian', 'complete', 'cocomplete'],
		non_properties: ['small', 'cartesian closed'],
	},
} as const satisfies Record<string, Omit<Category, 'name'>>
