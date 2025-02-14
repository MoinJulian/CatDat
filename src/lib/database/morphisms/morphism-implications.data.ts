import type { PropertyID } from '../categories/properties.data'
import type { MorphismTypeID } from './morphism-types.data'

export type MorphismImplication = {
	requirements?: PropertyID[] //
	assumptions: MorphismTypeID[]
	conclusions: MorphismTypeID[]
	reason: string
}

// will be automatically dualized later
export const MORPHISM_IMPLICATIONS: MorphismImplication[] = [
	{
		assumptions: ['isomorphism'],
		conclusions: ['monomorphism'],
		reason: 'easy',
	},
	{
		assumptions: ['regular epimorphism', 'monomorphism'],
		conclusions: ['isomorphism'],
		reason: 'If $p : B \\to Q$ is the coequalizer of $f, g : A \\rightrightarrows B$ that is also a monomorphism, then $p \\circ f = p \\circ g$ implies $f = g$, so that $p$ is an isomorphism.',
	},
	{
		assumptions: ['split monomorphism'],
		conclusions: ['regular monomorphism'],
		reason: 'If $f : A \\to B$ and $g : B \\to A$ are morphisms such that $g \\circ f = \\mathrm{id}_A$, then $f$ is the equalizer of $f \\circ g$ and $\\mathrm{id}_B$, so that $f$ is a regular monomorphism.',
	},
	{
		assumptions: ['regular monomorphism'],
		conclusions: ['strict monomorphism'],
		reason: 'easy',
	},
	{
		assumptions: ['strict monomorphism'],
		conclusions: ['strong monomorphism'],
		reason: 'Let $g : A \\to B$ be a strict monomorphism. Let $f : X \\to Y$ be an epimorphism and $u : X \\to A$, $v : Y \\to B$ be morphisms with $v f = g u$. We need to show that $v$ factors through $g$. Since $g$ is strict, it suffices to show that $x v = y v$ whenever $x g = y g$ (where $x,y$ are two parallel morphisms with domain $B$). But we have $x v f = x g u = y g u = y v f$, and the claim follows since $f$ is an epimorphism.',
	},
	{
		assumptions: ['strong monomorphism'],
		conclusions: ['extremal monomorphism'],
		reason: 'Let $g : A \\to B$ be a strong monomorphism, and assume that $g = h p$ for some epimorphism $p : Y \\to B$. By applying strongness to the equation (or diagram) $g \\mathrm{id}_A = h p$, there is a morphism $w : Y \\to A$ with $w p = \\mathrm{id}_A$. Then $p$ is a split monomorphism and an epimorphism, hence an isomorphism.',
	},
	{
		assumptions: ['extremal monomorphism'],
		conclusions: ['monomorphism'],
		reason: 'by definition',
	},
	{
		requirements: ['pushouts'],
		assumptions: ['extremal monomorphism'],
		conclusions: ['strong monomorphism'],
		reason: 'Let $g : A \\to B$ be an extremal monomorphism, and consider an equation of morphisms $vf=gu$, where $f$ is an epimorphism. Let $P$ be the pushout of $u$ and $f$. Then $g$ factors over the the pushout inclusion $A \\to P$, which is an epimorphism since $f$ one. Hence, $A \\to P$ is an isomorphism, and from here the rest is easy.',
	},
	{
		assumptions: ['effective monomorphism'],
		conclusions: ['regular monomorphism'],
		reason: 'trivial',
	},
	{
		requirements: ['pullbacks'],
		assumptions: ['regular monomorphism'],
		conclusions: ['effective monomorphism'],
		reason: 'See Prop 3.2 <a href="https://ncatlab.org/nlab/show/regular+monomorphism" target="_blank">here</a>',
	},
	{
		requirements: ['equalizers', 'pushouts'],
		assumptions: ['regular monomorphism'],
		conclusions: ['effective monomorphism'],
		reason: 'See Prop. 2.3 <a href="https://ncatlab.org/nlab/show/regular+monomorphism" target="_blank">here</a>.',
	},
	{
		assumptions: ['extremal monomorphism', 'epimorphism'],
		conclusions: ['isomorphism'],
		reason: 'trivial',
	},
	{
		requirements: ['mono-regular'],
		assumptions: ['monomorphism'],
		conclusions: ['regular monomorphism'],
		reason: 'by definition of a mono-regular category',
	},
	{
		requirements: ['left cancellative'],
		assumptions: ['morphism'],
		conclusions: ['monomorphism'],
		reason: 'by definition of a left-cancellative category',
	},
]
