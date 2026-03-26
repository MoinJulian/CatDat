INSERT INTO CATEGORIES (
	id,
	name,
	notation,
	objects,
	morphisms,
	description,
	nlab_link
)
VALUES
(
	'Top',
	'category of topological spaces',
	'$\mathbf{Top}$',
	'topological spaces',
	'continuous functions',
	'This is the most basic category of geometric objects.',
	'https://ncatlab.org/nlab/show/Top'
),
(
	'sSet',
	'category of simplicial sets',
	'$\mathbf{sSet}$',
	'simplicial sets, i.e. functors $\Delta^{\mathrm{op}} \to \mathbf{Set}$',
	'natural transformations',
	NULL,
	'https://ncatlab.org/nlab/show/SimpSet'
),
(
	'Man',
	'category of smooth manifolds',
	'$\mathbf{Man}$',
	'smooth manifolds',
	'smooth maps',
	'Here, a smooth manifold is assumed to be finite-dimensional, Hausdorff, and second-countable.',
	'https://ncatlab.org/nlab/show/Diff'
);