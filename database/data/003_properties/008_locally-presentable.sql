INSERT INTO properties (
	id,
	prefix,
	description,
	nlab_link,
	dual_property_id,
	invariant_under_equivalences
)
VALUES
(
	'locally finitely presentable',
	'is',
	'A category is <i>locally finitely presentable</i> if it is locally essentially small*, cocomplete, and there is a set $S$ of finitely presentable objects such that every object is a filtered colimit of objects in $S$. This is the same as being locally $\aleph_0$-presentable.<br>*Many authors assume the category to be locally small, but this is inconvenient since then locally finitely presentable categories would not be invariant under equivalences of categories.',
	'https://ncatlab.org/nlab/show/locally+finitely+presentable+category',
	NULL,
	TRUE
),
(
	'locally presentable',
	'is',
	'Let $\kappa$ be a regular cardinal. A category is <i>locally $\kappa$-presentable</i> if it is locally essentially small*, cocomplete, and there is a set of $\kappa$-presentable objects $S$ such that every object is a $\kappa$-filtered colimit of objects in $S$. A category is <i>locally presentable</i> if it is locally $\kappa$-presentable for some regular cardinal $\kappa$.<br>*Many authors assume the category to be locally small, but this is inconvenient since then locally presentable categories would not be invariant under equivalences of categories.',
	'https://ncatlab.org/nlab/show/locally+presentable+category',
	NULL,
	TRUE
),
(
	'locally ℵ₁-presentable',
	'is',
	'This is the special case of the notion of a locally $\kappa$-presentable, where $\kappa = \aleph_1$ is the first uncountable cardinal.',
	'https://ncatlab.org/nlab/show/locally+presentable+category',
	NULL,
	TRUE
);