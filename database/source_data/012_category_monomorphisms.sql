DELETE FROM category_monomorphisms;

INSERT INTO category_monomorphisms (
	category_id, -- ID of the category
	description, -- description of its monomorphisms
	reason		 -- proof or reference of this description
)
VALUES
	(
		'0',
		'none',
		NULL
	),
	(
		'1',
		'every morphism',
		NULL
	),
	(
		'2',
		'every morphism',
		NULL
	),
	(
		'Set',
		'injective maps',
		NULL
	),
	(
		'Ab',
		'injective homomorphisms',
		NULL
	),
	(
		'Top',
		'injective continuous maps',
		NULL
	),
	(
		'Grp',
		'injective homomorphisms',
		NULL
	),
	(
		'Vect',
		'injective linear maps',
		NULL
	),
	(
		'Ring',
		'injective ring homomorphisms',
		NULL
	),
	(
		'CRing',
		'injective ring homomorphisms',
		NULL
	),
	(
		'Rng',
		'injective rng homomorphisms',
		NULL
	),
	(
		'FinSet',
		'injective maps',
		NULL
	),
	(
		'FinAb',
		'injective homomorphisms',
		NULL
	),
	(
		'Abfg',
		'injective homomorphisms',
		NULL
	),
	(
		'Set*',
		'injective pointed maps',
		NULL
	),
	(
		'sSet',
		'pointwise injective transformations',
		NULL
	),
	(
		'Mon',
		'injective homomorphisms',
		NULL
	),
	(
		'Pos',
		'injective order-preserving functions',
		NULL
	),
	(
		'walking_morphism',
		'every morphism',
		NULL
	),
	(
		'M-Set',
		'injective $M$-maps',
		NULL
	),
	(
		'R-Mod',
		'injective $R$-linear maps',
		NULL
	),
	(
		'Met',
		'injective non-expansive maps',
		NULL
	),
	(
		'Met_oo',
		'injective non-expansive maps',
		NULL
	),
	(
		'Met_c',
		'injective continuous maps',
		NULL
	),
	(
		'Ban',
		'injective linear contractions',
		NULL
	),
	(
		'Man',
		'injective smooth maps',
		NULL
	),
	(
		'Meas',
		'injective measurable maps',
		NULL
	),
	(
		'N',
		'every morphism',
		NULL
	),
	(
		'Cat',
		'faithful functors that are injective on objects',
		NULL
	),
	(
		'On',
		'every morphism',
		NULL
	),
	(
		'Sch',
		'cf. EGA IV, 17.2.6',
		NULL
	),
	(
		'Fld',
		'every morphism',
		NULL
	),
	(
		'FreeAb',
		'injective homomorphisms',
		NULL
	),
	(
		'Z',
		'objectwise injective natural transformations',
		NULL
	),
	(
		'BG',
		'every morphism',
		NULL
	),
	(
		'BGf',
		'every morphism',
		NULL
	),
	(
		'BN',
		'every morphism',
		NULL
	),
	(
		'walking_pair',
		'every morphism',
		NULL
	),
	(
		'walking_isomorphism',
		'every morphism',
		NULL
	),
	(
		'Setne',
		'injective maps',
		NULL
	),
	(
		'B',
		'every morphism',
		NULL
	),
	(
		'FI',
		'every morphism',
		NULL
	),
	(
		'FS',
		'bijective maps',
		NULL
	),
	(
		'BOn',
		'every ordinal number',
		NULL
	),
	(
		'FinOrd',
		'injective order-preserving maps',
		NULL
	),
	(
		'Rel',
		'A relation $R : A \to B$ is a monomorphism iff the map $R_* : P(A) \to P(B)$ defined by $T \mapsto \{b \in B : \exists \, a \in T: (a,b) \in R \}$ is injective.',
		NULL
	),
	(
		'Sp',
		'pointwise injective natural transformations',
		NULL
	),
	(
		'real_interval',
		'every morphism',
		NULL
	),
	(
		'Zdiv',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Noo',
		'every morphism',
		'It is a thin category.'
	);