import type { Implication } from '$lib/types'

export const implications: Implication[] = [
	{
		assumptions: ['locally small'],
		conclusions: ['small'],
	},
	{
		assumptions: ['small'],
		conclusions: ['well-powered'],
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['well-powered', 'well-copowered', 'complete', 'cocomplete'],
	},
	{
		assumptions: ['abelian'],
		conclusions: [
			'preadditive',
			'finitely cocomplete',
			'finitely complete',
			'pointed',
		],
	},
	{
		assumptions: ['elementary topos'],
		conclusions: ['cartesian closed', 'finitely cocomplete', 'finitely complete'],
	},
	{
		assumptions: ['elementary topos', 'locally small'],
		conclusions: ['well-powered', 'well-copowered'],
	},
	{
		assumptions: ['complete'],
		conclusions: ['finitely complete'],
	},
	{
		assumptions: ['cocomplete'],
		conclusions: ['finitely cocomplete'],
	},
	{
		assumptions: ['preadditive'],
		conclusions: ['locally small'],
	},
	{
		assumptions: ['preadditive', 'initial object'],
		conclusions: ['pointed'],
	},
	{
		assumptions: ['preadditive', 'terminal object'],
		conclusions: ['pointed'],
	},
	{
		assumptions: ['Grothendieck topos'],
		conclusions: ['elementary topos', 'locally small', 'complete', 'cocomplete'],
	},
	{
		assumptions: ['products'],
		conclusions: ['finite products'],
	},
	{
		assumptions: ['finitely complete'],
		conclusions: ['finite products'],
	},
	{
		assumptions: ['finite products'],
		conclusions: ['terminal object'],
	},
	{
		assumptions: ['coproducts'],
		conclusions: ['finite coproducts'],
	},
	{
		assumptions: ['finitely complete'],
		conclusions: ['finite coproducts'],
	},
	{
		assumptions: ['finite coproducts'],
		conclusions: ['initial object'],
	},
	{
		assumptions: ['pointed'],
		conclusions: ['terminal object', 'initial object'],
	},
	{
		assumptions: ['cartesian closed'],
		conclusions: ['finite products'],
	},
]
