INSERT INTO implication_input (
	id,
	assumptions,
	conclusions,
	reason,
	is_equivalence
)
VALUES
(
	'small_consequence',
	'["small"]',
	'["locally small", "essentially small"]',
	'This is trivial.',
	FALSE
),
(
	'essentially_small_consequence',
	'["essentially small"]',
	'["well-powered", "well-copowered", "locally essentially small"]',
	'This is trivial.',
	FALSE
),
(
	'finite_consequence',
	'["finite"]',
	'["small", "essentially finite"]',
	'This is trivial.',
	FALSE
),
(
	'essentially_finite_consequence',
	'["essentially finite"]',
	'["essentially small"]',
	'This is trivial.',
	FALSE
),
(
	'locally_small_consequence',
	'["locally small"]',
	'["locally essentially small"]',
	'This is trivial.',
	FALSE
);