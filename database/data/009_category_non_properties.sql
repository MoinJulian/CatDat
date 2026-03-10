DELETE FROM category_non_properties;

INSERT INTO category_non_properties (category_id, non_property_id, reason)
VALUES
	(
		'0',
		'inhabited',
		''
	),
	(
		'2',
		'connected',
		''
	),
	(
		'Set',
		'strict terminal object',
		''
	),
	(
		'Set',
		'skeletal',
		'trivial'
	),
	(
		'Set',
		'Malcev',
		'There are lots of non-symmetric reflexive relations.'
	),
	(
		'Ab',
		'split abelian',
		''
	),
	(
		'Ab',
		'skeletal',
		'trivial'
	),
	(
		'Top',
		'cartesian closed',
		''
	),
	(
		'Top',
		'locally presentable',
		''
	),
	(
		'Top',
		'strict terminal object',
		''
	),
	(
		'Top',
		'balanced',
		''
	),
	(
		'Top',
		'cogenerator',
		''
	),
	(
		'Top',
		'exact filtered colimits',
		''
	),
	(
		'Top',
		'skeletal',
		'trivial'
	),
	(
		'Top',
		'Malcev',
		''
	),
	(
		'Grp',
		'subobject classifier',
		''
	),
	(
		'Grp',
		'cogenerator',
		''
	),
	(
		'Grp',
		'skeletal',
		'trivial'
	),
	(
		'Vect',
		'trivial',
		''
	),
	(
		'Vect',
		'skeletal',
		'trivial'
	),
	(
		'Ring',
		'strict initial object',
		''
	),
	(
		'Ring',
		'balanced',
		''
	),
	(
		'Ring',
		'cogenerator',
		''
	),
	(
		'Ring',
		'disjoint finite coproducts',
		''
	),
	(
		'Ring',
		'skeletal',
		'trivial'
	),
	(
		'CRing',
		'strict initial object',
		''
	),
	(
		'CRing',
		'balanced',
		''
	),
	(
		'CRing',
		'cogenerator',
		''
	),
	(
		'CRing',
		'disjoint finite coproducts',
		''
	),
	(
		'CRing',
		'skeletal',
		'trivial'
	),
	(
		'Rng',
		'preadditive',
		''
	),
	(
		'Rng',
		'balanced',
		''
	),
	(
		'Rng',
		'cogenerator',
		''
	),
	(
		'Rng',
		'skeletal',
		'trivial'
	),
	(
		'FinSet',
		'small',
		''
	),
	(
		'FinSet',
		'strict terminal object',
		''
	),
	(
		'FinSet',
		'sequential limits',
		''
	),
	(
		'FinSet',
		'sequential colimits',
		''
	),
	(
		'FinSet',
		'skeletal',
		'trivial'
	),
	(
		'FinSet',
		'Malcev',
		'There are lots of non-symmetric reflexive relations.'
	),
	(
		'FinAb',
		'small',
		'Even the collection of trivial groups is not small.'
	),
	(
		'FinAb',
		'generator',
		''
	),
	(
		'FinAb',
		'split abelian',
		'The sequence $0 \to \mathbb{Z}/2 \to \mathbb{Z}/4 \to \mathbb{Z}/2 \to 0$ does not split.'
	),
	(
		'FinAb',
		'sequential limits',
		''
	),
	(
		'FinAb',
		'skeletal',
		'There are many trivial and hence isomorphic groups, which are not equal.'
	),
	(
		'Abfg',
		'small',
		''
	),
	(
		'Abfg',
		'cogenerator',
		''
	),
	(
		'Abfg',
		'split abelian',
		''
	),
	(
		'Abfg',
		'countable products',
		''
	),
	(
		'Abfg',
		'countable coproducts',
		''
	),
	(
		'Abfg',
		'skeletal',
		'trivial'
	),
	(
		'Set*',
		'skeletal',
		'trivial'
	),
	(
		'Set*',
		'Malcev',
		''
	),
	(
		'sSet',
		'strict terminal object',
		''
	),
	(
		'sSet',
		'skeletal',
		'trivial'
	),
	(
		'sSet',
		'Malcev',
		''
	),
	(
		'Mon',
		'preadditive',
		''
	),
	(
		'Mon',
		'balanced',
		''
	),
	(
		'Mon',
		'cogenerator',
		''
	),
	(
		'Mon',
		'skeletal',
		'trivial'
	),
	(
		'Mon',
		'Malcev',
		'Consider the submonoid $\{(a,b) : a \leq b \}$ of $\mathbb{N}^2$.'
	),
	(
		'Pos',
		'strict terminal object',
		''
	),
	(
		'Pos',
		'finitary algebraic',
		''
	),
	(
		'Pos',
		'balanced',
		''
	),
	(
		'Pos',
		'skeletal',
		'trivial'
	),
	(
		'Pos',
		'Malcev',
		''
	),
	(
		'walking_morphism',
		'subobject classifier',
		''
	),
	(
		'M-Set',
		'strict terminal object',
		''
	),
	(
		'M-Set',
		'skeletal',
		'trivial'
	),
	(
		'M-Set',
		'Malcev',
		''
	),
	(
		'R-Mod',
		'split abelian',
		''
	),
	(
		'R-Mod',
		'skeletal',
		'trivial'
	),
	(
		'Met',
		'sequential limits',
		''
	),
	(
		'Met',
		'finite coproducts',
		''
	),
	(
		'Met',
		'strict terminal object',
		''
	),
	(
		'Met',
		'balanced',
		''
	),
	(
		'Met',
		'cartesian closed',
		''
	),
	(
		'Met',
		'essentially small',
		''
	),
	(
		'Met',
		'exact filtered colimits',
		'2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
	),
	(
		'Met',
		'skeletal',
		'trivial'
	),
	(
		'Met',
		'Malcev',
		''
	),
	(
		'Met_oo',
		'strict terminal object',
		''
	),
	(
		'Met_oo',
		'balanced',
		''
	),
	(
		'Met_oo',
		'cartesian closed',
		''
	),
	(
		'Met_oo',
		'exact filtered colimits',
		'2.7 in <a href="https://arxiv.org/abs/2006.01399" target="_blank">this paper</a>'
	),
	(
		'Met_oo',
		'skeletal',
		'trivial'
	),
	(
		'Met_oo',
		'Malcev',
		''
	),
	(
		'Met_c',
		'products',
		''
	),
	(
		'Met_c',
		'strict terminal object',
		''
	),
	(
		'Met_c',
		'balanced',
		''
	),
	(
		'Met_c',
		'cartesian closed',
		''
	),
	(
		'Met_c',
		'skeletal',
		'trivial'
	),
	(
		'Met_c',
		'Malcev',
		''
	),
	(
		'Ban',
		'preadditive',
		''
	),
	(
		'Ban',
		'balanced',
		''
	),
	(
		'Ban',
		'exact filtered colimits',
		''
	),
	(
		'Ban',
		'skeletal',
		'trivial'
	),
	(
		'Ban',
		'Malcev',
		'See <a href="https://math.stackexchange.com/questions/5033161" target="_blank">MSE/5033161</a>.'
	),
	(
		'Man',
		'essentially small',
		''
	),
	(
		'Man',
		'countable products',
		''
	),
	(
		'Man',
		'coproducts',
		''
	),
	(
		'Man',
		'cartesian closed',
		''
	),
	(
		'Man',
		'coequalizers',
		''
	),
	(
		'Man',
		'equalizers',
		''
	),
	(
		'Man',
		'strict terminal object',
		''
	),
	(
		'Man',
		'balanced',
		''
	),
	(
		'Man',
		'skeletal',
		'trivial'
	),
	(
		'Meas',
		'cartesian closed',
		''
	),
	(
		'Meas',
		'strict terminal object',
		''
	),
	(
		'Meas',
		'balanced',
		''
	),
	(
		'Meas',
		'skeletal',
		'trivial'
	),
	(
		'Meas',
		'Malcev',
		''
	),
	(
		'N',
		'countable coproducts',
		''
	),
	(
		'N',
		'essentially finite',
		''
	),
	(
		'Cat',
		'strict terminal object',
		''
	),
	(
		'Cat',
		'finitary algebraic',
		''
	),
	(
		'Cat',
		'balanced',
		''
	),
	(
		'Cat',
		'cogenerator',
		''
	),
	(
		'Cat',
		'skeletal',
		'trivial'
	),
	(
		'Cat',
		'Malcev',
		''
	),
	(
		'On',
		'terminal object',
		''
	),
	(
		'On',
		'well-copowered',
		''
	),
	(
		'LRS',
		'cartesian closed',
		''
	),
	(
		'LRS',
		'strict terminal object',
		''
	),
	(
		'LRS',
		'skeletal',
		'trivial'
	),
	(
		'LRS',
		'Malcev',
		'This is because the category of schemes already is not Malcev.'
	),
	(
		'Sch',
		'coequalizers',
		''
	),
	(
		'Sch',
		'countable products',
		''
	),
	(
		'Sch',
		'cartesian closed',
		''
	),
	(
		'Sch',
		'strict terminal object',
		''
	),
	(
		'Sch',
		'skeletal',
		'trivial'
	),
	(
		'Sch',
		'Malcev',
		'Consider the subscheme $V(x-y) \cup V(y) \subseteq \mathbb{A}^2$. It contains the diagonal but it is not symmetric.'
	),
	(
		'Fld',
		'connected',
		''
	),
	(
		'Fld',
		'well-copowered',
		''
	),
	(
		'Fld',
		'pushouts',
		''
	),
	(
		'Fld',
		'balanced',
		''
	),
	(
		'Fld',
		'generator',
		''
	),
	(
		'Fld',
		'cogenerator',
		''
	),
	(
		'Fld',
		'skeletal',
		'trivial'
	),
	(
		'FreeAb',
		'countable products',
		''
	),
	(
		'FreeAb',
		'balanced',
		''
	),
	(
		'FreeAb',
		'filtered colimits',
		'See <a href="https://math.stackexchange.com/questions/5025660" target="_blank">this post</a>'
	),
	(
		'FreeAb',
		'skeletal',
		'trivial'
	),
	(
		'Z',
		'locally essentially small',
		''
	),
	(
		'Z',
		'strict terminal object',
		''
	),
	(
		'Z',
		'skeletal',
		'trivial'
	),
	(
		'Z',
		'Malcev',
		''
	),
	(
		'BG',
		'zero morphisms',
		''
	),
	(
		'BG',
		'essentially finite',
		''
	),
	(
		'BGf',
		'zero morphisms',
		''
	),
	(
		'BN',
		'essentially finite',
		''
	),
	(
		'BN',
		'zero morphisms',
		''
	),
	(
		'BN',
		'equalizers',
		''
	),
	(
		'BN',
		'sequential limits',
		''
	),
	(
		'walking_pair',
		'initial object',
		''
	),
	(
		'walking_pair',
		'zero morphisms',
		''
	),
	(
		'walking_pair',
		'binary products',
		''
	),
	(
		'walking_pair',
		'equalizers',
		''
	),
	(
		'walking_pair',
		'pullbacks',
		''
	),
	(
		'walking_isomorphism',
		'skeletal',
		'The two objects are isomorphic, but different.'
	),
	(
		'Setne',
		'binary coproducts',
		''
	),
	(
		'Setne',
		'strict terminal object',
		''
	),
	(
		'Setne',
		'sequential limits',
		''
	),
	(
		'Setne',
		'skeletal',
		'trivial'
	),
	(
		'B',
		'small',
		''
	),
	(
		'B',
		'connected',
		''
	),
	(
		'B',
		'generator',
		''
	),
	(
		'B',
		'essentially finite',
		''
	),
	(
		'B',
		'skeletal',
		'trivial'
	),
	(
		'FI',
		'binary coproducts',
		''
	),
	(
		'FI',
		'small',
		''
	),
	(
		'FI',
		'cogenerator',
		''
	),
	(
		'FI',
		'binary products',
		''
	),
	(
		'FI',
		'sequential colimits',
		''
	),
	(
		'FI',
		'essentially finite',
		''
	),
	(
		'FI',
		'skeletal',
		'trivial'
	),
	(
		'FS',
		'small',
		''
	),
	(
		'FS',
		'connected',
		''
	),
	(
		'FS',
		'generator',
		''
	),
	(
		'FS',
		'sequential limits',
		''
	),
	(
		'FS',
		'pullbacks',
		''
	),
	(
		'FS',
		'essentially finite',
		''
	),
	(
		'FS',
		'skeletal',
		'trivial'
	),
	(
		'BOn',
		'locally essentially small',
		''
	),
	(
		'BOn',
		'initial object',
		''
	),
	(
		'BOn',
		'terminal object',
		''
	),
	(
		'BOn',
		'right cancellative',
		''
	),
	(
		'BOn',
		'zero morphisms',
		''
	),
	(
		'BOn',
		'balanced',
		''
	),
	(
		'BOn',
		'binary products',
		''
	),
	(
		'BOn',
		'binary coproducts',
		''
	),
	(
		'BOn',
		'well-powered',
		''
	),
	(
		'FinOrd',
		'small',
		''
	),
	(
		'FinOrd',
		'binary coproducts',
		''
	),
	(
		'FinOrd',
		'strict terminal object',
		''
	),
	(
		'FinOrd',
		'subobject classifier',
		''
	),
	(
		'FinOrd',
		'cartesian closed',
		''
	),
	(
		'FinOrd',
		'sequential colimits',
		''
	),
	(
		'FinOrd',
		'countable products',
		''
	),
	(
		'FinOrd',
		'skeletal',
		'trivial'
	),
	(
		'FinOrd',
		'Malcev',
		''
	),
	(
		'Rel',
		'preadditive',
		''
	),
	(
		'Rel',
		'Cauchy complete',
		''
	),
	(
		'Rel',
		'skeletal',
		'trivial'
	),
	(
		'Sp',
		'locally small',
		''
	),
	(
		'Sp',
		'strict terminal object',
		''
	),
	(
		'Sp',
		'countable products',
		''
	),
	(
		'Sp',
		'countable coproducts',
		''
	),
	(
		'Sp',
		'skeletal',
		'trivial'
	),
	(
		'Sp',
		'Malcev',
		''
	),
	(
		'real_interval',
		'essentially finite',
		''
	),
	(
		'real_interval',
		'locally finitely presentable',
		''
	),
	(
		'Zdiv',
		'essentially finite',
		'The non-negative integers are pairwise non-isomorphic in this category.'
	),
	(
		'Zdiv',
		'skeletal',
		'The integers $+1$ and $-1$ are isomorphic, but not equal.'
	),
	(
		'Zdiv',
		'self-dual',
		'The only integer with infinitely many divisors (up to isomorphism) is $0$. But many integers have infinitely many multiple (up to isomorphism).'
	),
	(
		'Zdiv',
		'infinitary distributive',
		'We have $2 \times \coprod_n 3^n = \gcd(2,\mathrm{lcm}_n(3^n)) = \gcd(2,0) = 2$, but $\coprod_n (2 \times 3^n) = \mathrm{lcm}_n \gcd(2,3^n) = \mathrm{lcm}_n 1  = 1$.'
	),
	(
		'Noo',
		'essentially finite',
		'trivial'
	),
	(
		'Noo',
		'self-dual',
		'every upper set is infinite, but every lower set is finite'
	);