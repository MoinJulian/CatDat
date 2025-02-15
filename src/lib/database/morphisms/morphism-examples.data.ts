import type { CategoryID } from '../categories/categories.data'
import type { MorphismTypeID } from './morphism-types.data'

export type MorphismExample = {
	id: string
	category: CategoryID
	description: string
	properties: MorphismTypeID[]
	non_properties: MorphismTypeID[]
}

// TODO: find counterexamples for all converses of registered implications
// TODO: render thse on the page

export const MORPHISM_EXAMPLES: MorphismExample[] = [
	{
		id: 'constantmap',
		category: 'Set',
		description: 'The constant map $f : \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = 0$ for all $x \\in \\mathbb{Z}$.',
		properties: ['morphism'],
		non_properties: ['epimorphism', 'monomorphism'],
	},
	{
		id: 'inclusionset',
		category: 'Set',
		description: 'The inclusion map $i : \\mathbb{N} \\to \\mathbb{Z}$.',
		properties: ['split monomorphism'],
		non_properties: ['epimorphism'],
	},
	{
		id: 'inclusiongrp',
		category: 'Grp',
		description: 'The inclusion homomorphism $i : \\mathbb{Z} \\to \\mathbb{Q}$.',
		properties: ['effective monomorphism'],
		non_properties: ['split monomorphism'],
	},
]
