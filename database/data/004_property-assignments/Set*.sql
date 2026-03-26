INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Set*',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Set}_* \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'Set*',
	'pointed',
	TRUE,
	'The singleton set is a zero object.'
),
(
	'Set*',
	'finitary algebraic',
	TRUE,
	'Take the algebraic theory with just one constant.'
),
(
	'Set*',
	'subobject classifier',
	TRUE,
	'The pointed set $(\{0,1\},1)$ is a subobject classifier.'
),
(
	'Set*',
	'cogenerator',
	TRUE,
	'The pointed set $(\{0,1\},1)$ is a cogenerator.'
),
(
	'Set*',
	'disjoint coproducts',
	TRUE,
	'This follows easily from the description of coproducts as wedge sums.'
),
(
	'Set*',
	'epi-regular',
	TRUE,
	'Every epimorphism is surjective for this category, and in an algebraic category every surjective homomorphism is a regular epimorphism.'
),
(
	'Set*',
	'coregular',
	TRUE,
	'From the other properties we know that (co-)limits exist and that monomorphisms coincide with injective pointed maps. So it suffices to prove that these maps are stable under pushouts. This follows from the corresponding fact for the <a href="/category/Set">category of sets</a> and the observation that the forgetful functor $\mathbf{Set}_* \to \mathbf{Set}$ preserves pushouts.'
),
(
	'Set*',
	'skeletal',
	FALSE,
	'trivial'
),
(
	'Set*',
	'Malcev',
	FALSE,
	'There are lots of pointed reflexive relations that are not symmetric, for example $\{(a,b) \in \mathbb{N} : a \leq b\}$ on $(\mathbb{N},0)$.'
),
(
	'Set*',
	'biproducts',
	FALSE,
	'Binary coproducts are wedge sums $\vee$, so the canonical map $X \vee Y \to X \times Y$ is injective, but in most cases not surjective.'
);
