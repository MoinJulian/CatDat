import type { Implication } from '$lib/commons/types'

/**
 * Each implication must have the following properties:
 * - equivalent (optional, set to "true" for equivalences)
 * - assumptions: a list of registered properties
 * - conclusions: a list of registered properties
 */
export const implications: readonly Readonly<Implication>[] = [
	// size constraints
	{
		assumptions: ['small'],
		conclusions: ['locally small', 'essentially small'],
	},
	{
		assumptions: ['essentially small'],
		conclusions: ['well-powered', 'well-copowered'],
	},
	{
		assumptions: ['essentially small', 'complete'],
		conclusions: ['thin'],
	},
	{
		assumptions: ['finite'],
		conclusions: ['small'],
	},
	// trivialish categories
	{
		assumptions: ['discrete'],
		conclusions: [
			'thin',
			'groupoid',
			'locally small',
			'well-powered',
			'connected limits',
		],
	},
	{
		assumptions: ['discrete', 'connected'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['trivial'],
		conclusions: [
			'essentially small',
			'finitary algebraic',
			'Grothendieck topos',
			'split abelian',
			'self-dual',
		],
	},
	{
		assumptions: ['thin'],
		conclusions: ['equalizers', 'left cancellative'],
	},
	{
		assumptions: ['thin', 'inhabited'],
		conclusions: ['generator'],
	},
	{
		assumptions: ['left cancellative', 'coequalizers'],
		conclusions: ['thin'],
	},
	// limits and colimits
	{
		equivalent: true,
		assumptions: ['complete'],
		conclusions: ['products', 'equalizers'],
	},
	{
		equivalent: true,
		assumptions: ['finitely complete'],
		conclusions: ['finite products', 'equalizers'],
	},
	{
		equivalent: true,
		assumptions: ['complete'],
		conclusions: ['finitely complete', 'filtered limits'],
	},
	{
		assumptions: ['products'],
		conclusions: ['finite products'],
	},
	{
		equivalent: true,
		assumptions: ['finite products'],
		conclusions: ['terminal object', 'binary products'],
	},
	{
		assumptions: ['finite products', 'filtered limits'],
		conclusions: ['products'],
	},
	{
		assumptions: ['binary products', 'equalizers'],
		conclusions: ['pullbacks'],
	},
	{
		assumptions: ['binary products', 'pullbacks'],
		conclusions: ['equalizers'],
	},
	{
		assumptions: ['pullbacks', 'terminal object'],
		conclusions: ['binary products'],
	},
	{
		assumptions: ['terminal object'],
		conclusions: ['connected'],
	},
	{
		equivalent: true,
		assumptions: ['pointed'],
		conclusions: ['zero morphisms', 'initial object'],
	},
	{
		assumptions: ['pointed', 'cartesian closed'],
		conclusions: ['trivial'],
	},
	{
		equivalent: true,
		assumptions: ['disjoint coproducts'],
		conclusions: ['coproducts', 'disjoint finite coproducts'],
	},
	{
		assumptions: ['disjoint finite coproducts'],
		conclusions: ['finite coproducts'],
	},
	{
		assumptions: ['disjoint finite coproducts', 'thin'],
		conclusions: ['trivial'],
	},
	{
		equivalent: true,
		assumptions: ['connected limits'],
		conclusions: ['wide pullbacks', 'equalizers'],
	},
	{
		equivalent: true,
		assumptions: ['wide pullbacks', 'terminal object'],
		conclusions: ['complete'],
	},
	{
		equivalent: true,
		assumptions: ['wide pullbacks'],
		conclusions: ['pullbacks', 'filtered limits'],
	},

	{
		assumptions: ['binary products', 'inhabited'],
		conclusions: ['connected'],
	},
	{
		assumptions: ['strict initial object'],
		conclusions: ['initial object'],
	},
	{
		assumptions: ['strict initial object', 'pointed'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['left cancellative', 'initial object'],
		conclusions: ['strict initial object'],
	},
	{
		assumptions: ['right cancellative', 'initial object'],
		conclusions: ['strict initial object'],
	},
	{
		assumptions: ['equalizers'],
		conclusions: ['Cauchy complete'],
	},
	{
		assumptions: ['left cancellative'],
		conclusions: ['Cauchy complete'],
	},
	// interchanging limits with colimits
	{
		assumptions: ['exact filtered colimits'],
		conclusions: ['filtered colimits', 'finitely complete'],
	},
	{
		assumptions: ['infinitary distributive'],
		conclusions: ['finite products', 'coproducts', 'distributive'],
	},
	{
		assumptions: ['distributive'],
		conclusions: ['finite products', 'finite coproducts', 'strict initial object'],
	},
	{
		assumptions: ['cartesian closed', 'finite coproducts'],
		conclusions: ['distributive'],
	},
	{
		assumptions: ['cartesian closed', 'coproducts'],
		conclusions: ['infinitary distributive'],
	},
	{
		assumptions: ['zero morphisms', 'inhabited'],
		conclusions: ['connected'],
	},
	// locally presentable categories
	{
		assumptions: ['locally presentable'],
		conclusions: [
			'locally small',
			'well-powered',
			'well-copowered',
			'complete',
			'cocomplete',
			'generator',
		],
	},
	{
		assumptions: ['locally finitely presentable'],
		conclusions: ['locally presentable', 'exact filtered colimits'],
	},
	{
		assumptions: ['locally presentable', 'self-dual'],
		conclusions: ['thin'],
	},
	{
		assumptions: ['finitary algebraic'],
		conclusions: ['locally finitely presentable'],
	},
	// topos theory
	{
		equivalent: true,
		assumptions: ['elementary topos'],
		conclusions: ['cartesian closed', 'finitely complete', 'subobject classifier'],
	},
	{
		assumptions: ['elementary topos'],
		conclusions: ['finitely cocomplete', 'disjoint finite coproducts'],
	},
	{
		assumptions: ['elementary topos', 'locally small'],
		conclusions: ['well-powered', 'well-copowered'],
	},
	{
		assumptions: ['cartesian closed'],
		conclusions: ['finite products'],
	},
	{
		assumptions: ['cartesian closed', 'initial object'],
		conclusions: ['strict initial object'],
	},
	{
		assumptions: ['Grothendieck topos'],
		conclusions: [
			'elementary topos',
			'locally presentable',
			'cogenerator',
			'exact filtered colimits',
			'disjoint coproducts',
		],
	},
	{
		assumptions: ['subobject classifier'],
		conclusions: ['finitely complete', 'balanced'],
	},
	// additive categories
	{
		assumptions: ['preadditive'],
		conclusions: ['locally small', 'zero morphisms'],
	},
	{
		assumptions: ['preadditive', 'finite coproducts'],
		conclusions: ['finite products'],
	},
	{
		equivalent: true,
		assumptions: ['additive'],
		conclusions: ['preadditive', 'finite products'],
	},
	{
		assumptions: ['additive'],
		conclusions: ['disjoint finite coproducts'],
	},
	{
		assumptions: ['abelian'],
		conclusions: ['additive', 'finitely cocomplete', 'finitely complete', 'balanced'],
	},
	{
		equivalent: true,
		assumptions: ['Grothendieck abelian'],
		conclusions: ['abelian', 'coproducts', 'generator', 'exact filtered colimits'],
	},
	{
		assumptions: ['Grothendieck abelian'],
		conclusions: ['locally presentable', 'cogenerator'],
	},
	{
		assumptions: ['Grothendieck abelian', 'self-dual'],
		conclusions: ['trivial'],
	},
	{
		// https://math.stackexchange.com/questions/4086192
		assumptions: ['additive', 'pullbacks', 'subobject classifier'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['split abelian'],
		conclusions: ['abelian'],
	},
	// groupoids
	{
		assumptions: ['groupoid'],
		conclusions: [
			'self-dual',
			'balanced',
			'pullbacks',
			'filtered limits',
			'left cancellative',
		],
	},
	{
		assumptions: ['left cancellative', 'right cancellative', 'balanced'],
		conclusions: ['groupoid'],
	},
	{
		assumptions: ['groupoid', 'equalizers'],
		conclusions: ['thin'],
	},
	{
		assumptions: ['groupoid', 'binary products', 'inhabited'],
		conclusions: ['trivial'],
	},
	{
		assumptions: ['groupoid', 'initial object'],
		conclusions: ['trivial'],
	},
	// MISC
	{
		assumptions: ['connected'],
		conclusions: ['inhabited'],
	},
	{
		assumptions: ['generator'],
		conclusions: ['inhabited'],
	},
]
