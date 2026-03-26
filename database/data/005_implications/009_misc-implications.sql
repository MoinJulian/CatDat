INSERT INTO implication_input (
	id,
	assumptions,
	conclusions,
	reason,
	is_equivalence
)
VALUES
(
	'connected_consequence',
	'["connected"]',
	'["inhabited"]',
	'This holds by definition.',
	FALSE
),
(
	'strongly_connected_consequence',
	'["strongly connected"]',
	'["connected"]',
	'This holds by definition.',
	FALSE
),
(
	'generator_consequence',
	'["generator"]',
	'["inhabited"]',
	'This is trivial.',
	FALSE
),
(
	'malcev_condition',
	'["Malcev"]',
	'["finitely complete"]',
	'This holds by definition.',
	FALSE
),
(
	'malcev_thin_condition',
	'["thin", "finitely complete"]',
	'["Malcev"]',
	'In a thin category, every subobject of $X^2 = X$ containing $X$ is already $X$.',
	FALSE
),
(
	'malcev_additive_criterion',
	'["finitely complete", "additive"]',
	'["Malcev"]',
	'See Prop. 2.2.13. in <a href="https://ncatlab.org/nlab/show/Malcev,+protomodular,+homological+and+semi-abelian+categories" target="_blank">Malcev, protomodular, homological and semi-abelian categories</a>.',
	FALSE
);