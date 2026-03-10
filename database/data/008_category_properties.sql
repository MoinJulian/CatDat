DELETE FROM category_properties;

INSERT INTO category_properties (category_id, property_id, reason)
VALUES
	(
		'0',
		'preadditive',
		'This is vacuously true.'
	),
	(
		'0',
		'discrete',
		'trivial'
	),
	(
		'0',
		'binary products',
		'This is vacuously true.'
	),
	(
		'0',
		'finite',
		'trivial'
	),
	(
		'1',
		'trivial',
		'trivial'
	),
	(
		'1',
		'finite',
		'trivial'
	),
	(
		'1',
		'discrete',
		'trivial'
	),
	(
		'2',
		'discrete',
		'trivial'
	),
	(
		'2',
		'finite',
		'trivial'
	),
	(
		'2',
		'inhabited',
		'trivial'
	),
	(
		'Set',
		'locally small',
		'The collection of maps between two sets $X,Y$ is a subset of $X \times Y$ and therefore a set.'
	),
	(
		'Set',
		'Grothendieck topos',
		'It is equivalent to the category of sheaves on a one-point space.'
	),
	(
		'Set',
		'finitary algebraic',
		'Use the empty algebraic theory.'
	),
	(
		'Ab',
		'locally small',
		'There is a forgetful functor $\mathbf{Ab} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Ab',
		'abelian',
		'standard'
	),
	(
		'Ab',
		'finitary algebraic',
		'Take the algebraic theory of a commutative group.'
	),
	(
		'Top',
		'locally small',
		'There is a forgetful functor $\mathbf{Top} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Top',
		'complete',
		'Take the limit of the underlying sets and endow it with the coarsest topology making all projections continuous.'
	),
	(
		'Top',
		'cocomplete',
		'Take the colimit of the underlying sets and endow it with the finest topology making all inclusions continuous.'
	),
	(
		'Top',
		'well-powered',
		'This is clear from the classification of monomorphisms as injective continuous maps.'
	),
	(
		'Top',
		'well-copowered',
		'This is clear from the classification of epimorphisms as surjective continuous maps.'
	),
	(
		'Top',
		'infinitary distributive',
		'The canonical continuous map $\coprod_i (X \times Y_i) \to X \times \coprod_{i \in I} Y_i$ is bijective since $\mathbf{Set}$ is infinitary distributive, and one easily checks with the definitions of product and coproduct topologies that it maps open sets to open sets.'
	),
	(
		'Top',
		'generator',
		'The one-point space is a generator since it represents the forgetful functor $\mathbf{Top} \to \mathbf{Set}$.'
	),
	(
		'Top',
		'disjoint coproducts',
		'This follows easily from the corresponding fact for sets.'
	),
	(
		'Grp',
		'locally small',
		'There is a forgetful functor $\mathbf{Grp} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Grp',
		'pointed',
		'The trivial group is a zero object.'
	),
	(
		'Grp',
		'finitary algebraic',
		'Take the algebraic theory of a group.'
	),
	(
		'Grp',
		'mono-regular',
		''
	),
	(
		'Grp',
		'disjoint coproducts',
		''
	),
	(
		'Grp',
		'epi-regular',
		'This holds since every epimorphism is surjective, and surjective homomorphism $A \to B$ is the coequalizer of its kernel pair $A \times_B A \rightrightarrows A$.'
	),
	(
		'Grp',
		'Malcev',
		'easy; Borceux & Bourn (2004), Ex. 2.2.4'
	),
	(
		'Vect',
		'locally small',
		'There is a forgetful functor $\mathbf{Vect} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Vect',
		'split abelian',
		'It is a fact from linear algebra that every subspace has a complement.'
	),
	(
		'Vect',
		'finitary algebraic',
		'Take the algebraic theory of a vector space.'
	),
	(
		'Ring',
		'locally small',
		'There is a forgetful functor $\mathbf{Ring} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Ring',
		'finitary algebraic',
		'Take the algebraic theory of a ring.'
	),
	(
		'Ring',
		'strict terminal object',
		'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
	),
	(
		'Ring',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'CRing',
		'locally small',
		'There is a forgetful functor $\mathbf{CRing} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'CRing',
		'finitary algebraic',
		'Take the algebraic theory of a commutative ring.'
	),
	(
		'CRing',
		'strict terminal object',
		'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
	),
	(
		'CRing',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'Rng',
		'locally small',
		'There is a forgetful functor $\mathbf{Rng} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Rng',
		'finitary algebraic',
		'Take the algebraic theory of a rng.'
	),
	(
		'Rng',
		'pointed',
		'The zero ring is a zero object.'
	),
	(
		'Rng',
		'disjoint coproducts',
		''
	),
	(
		'Rng',
		'Malcev',
		'follows in the same way as for (additive) groups'
	),
	(
		'FinSet',
		'locally small',
		'There is a forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FinSet',
		'essentially small',
		'Every finite set is isomorphic to some $[n] = \{1,\dotsc,n\}$ for some $n \in \mathbb{N}$.'
	),
	(
		'FinSet',
		'elementary topos',
		''
	),
	(
		'FinSet',
		'generator',
		'The one-point set is a generator since it represents the forgetful functor $\mathbf{FinSet} \to \mathbf{Set}$.'
	),
	(
		'FinSet',
		'cogenerator',
		'The two-element set is a cogenerator.'
	),
	(
		'FinAb',
		'locally small',
		'There is a forgetful functor $\mathbf{FinAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'FinAb',
		'essentially small',
		'The underlying set of a finite structure can be chosen to be a subset of $\mathbb{N}$.'
	),
	(
		'FinAb',
		'abelian',
		'follows from the fact for abelian groups'
	),
	(
		'FinAb',
		'self-dual',
		'Pontrjagin duality'
	),
	(
		'Abfg',
		'locally small',
		''
	),
	(
		'Abfg',
		'essentially small',
		''
	),
	(
		'Abfg',
		'abelian',
		''
	),
	(
		'Abfg',
		'generator',
		''
	),
	(
		'Set*',
		'locally small',
		''
	),
	(
		'Set*',
		'pointed',
		''
	),
	(
		'Set*',
		'finitary algebraic',
		''
	),
	(
		'Set*',
		'subobject classifier',
		''
	),
	(
		'Set*',
		'cogenerator',
		''
	),
	(
		'Set*',
		'disjoint coproducts',
		''
	),
	(
		'Set*',
		'epi-regular',
		''
	),
	(
		'sSet',
		'locally small',
		''
	),
	(
		'sSet',
		'Grothendieck topos',
		''
	),
	(
		'sSet',
		'locally finitely presentable',
		''
	),
	(
		'Mon',
		'locally small',
		''
	),
	(
		'Mon',
		'pointed',
		''
	),
	(
		'Mon',
		'finitary algebraic',
		''
	),
	(
		'Mon',
		'disjoint coproducts',
		''
	),
	(
		'Pos',
		'locally small',
		''
	),
	(
		'Pos',
		'locally finitely presentable',
		''
	),
	(
		'Pos',
		'cartesian closed',
		''
	),
	(
		'Pos',
		'cogenerator',
		''
	),
	(
		'Pos',
		'disjoint coproducts',
		''
	),
	(
		'walking_morphism',
		'finitary algebraic',
		''
	),
	(
		'walking_morphism',
		'self-dual',
		''
	),
	(
		'walking_morphism',
		'finite',
		''
	),
	(
		'walking_morphism',
		'cartesian closed',
		''
	),
	(
		'walking_morphism',
		'skeletal',
		'The two objects are not isomorphic'
	),
	(
		'M-Set',
		'locally small',
		''
	),
	(
		'M-Set',
		'Grothendieck topos',
		''
	),
	(
		'M-Set',
		'finitary algebraic',
		''
	),
	(
		'R-Mod',
		'locally small',
		''
	),
	(
		'R-Mod',
		'abelian',
		''
	),
	(
		'R-Mod',
		'finitary algebraic',
		''
	),
	(
		'Met',
		'locally small',
		''
	),
	(
		'Met',
		'well-powered',
		''
	),
	(
		'Met',
		'well-copowered',
		''
	),
	(
		'Met',
		'equalizers',
		''
	),
	(
		'Met',
		'finite products',
		''
	),
	(
		'Met',
		'coequalizers',
		''
	),
	(
		'Met',
		'filtered colimits',
		''
	),
	(
		'Met',
		'strict initial object',
		''
	),
	(
		'Met',
		'generator',
		''
	),
	(
		'Met',
		'cogenerator',
		''
	),
	(
		'Met_oo',
		'locally small',
		''
	),
	(
		'Met_oo',
		'locally ℵ₁-presentable',
		'Example 4.5 in <a href="https://arxiv.org/abs/1504.02660" target="_blank">this preprint</a>'
	),
	(
		'Met_oo',
		'infinitary distributive',
		''
	),
	(
		'Met_oo',
		'cogenerator',
		''
	),
	(
		'Met_oo',
		'disjoint coproducts',
		''
	),
	(
		'Met_c',
		'locally small',
		''
	),
	(
		'Met_c',
		'equalizers',
		''
	),
	(
		'Met_c',
		'disjoint coproducts',
		''
	),
	(
		'Met_c',
		'well-powered',
		''
	),
	(
		'Met_c',
		'generator',
		''
	),
	(
		'Met_c',
		'cogenerator',
		''
	),
	(
		'Met_c',
		'infinitary distributive',
		''
	),
	(
		'Met_c',
		'countable products',
		''
	),
	(
		'Ban',
		'locally small',
		''
	),
	(
		'Ban',
		'pointed',
		''
	),
	(
		'Ban',
		'locally ℵ₁-presentable',
		'Example 1.48 in Adamek-Rosicky'
	),
	(
		'Ban',
		'disjoint coproducts',
		''
	),
	(
		'Ban',
		'cogenerator',
		'Hahn-Banach shows that $\mathbb{C}$ is one'
	),
	(
		'Man',
		'locally small',
		''
	),
	(
		'Man',
		'well-powered',
		''
	),
	(
		'Man',
		'well-copowered',
		''
	),
	(
		'Man',
		'distributive',
		''
	),
	(
		'Man',
		'generator',
		''
	),
	(
		'Man',
		'disjoint finite coproducts',
		''
	),
	(
		'Man',
		'countable coproducts',
		''
	),
	(
		'Man',
		'Cauchy complete',
		''
	),
	(
		'Meas',
		'locally small',
		''
	),
	(
		'Meas',
		'well-powered',
		''
	),
	(
		'Meas',
		'well-copowered',
		''
	),
	(
		'Meas',
		'complete',
		''
	),
	(
		'Meas',
		'cocomplete',
		''
	),
	(
		'Meas',
		'infinitary distributive',
		''
	),
	(
		'Meas',
		'generator',
		''
	),
	(
		'Meas',
		'cogenerator',
		''
	),
	(
		'Meas',
		'disjoint coproducts',
		''
	),
	(
		'N',
		'small',
		''
	),
	(
		'N',
		'finitely cocomplete',
		''
	),
	(
		'N',
		'binary products',
		''
	),
	(
		'N',
		'thin',
		''
	),
	(
		'N',
		'wide pullbacks',
		''
	),
	(
		'N',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'Cat',
		'locally small',
		''
	),
	(
		'Cat',
		'cartesian closed',
		''
	),
	(
		'Cat',
		'locally finitely presentable',
		''
	),
	(
		'Cat',
		'disjoint coproducts',
		''
	),
	(
		'On',
		'thin',
		''
	),
	(
		'On',
		'locally small',
		''
	),
	(
		'On',
		'cocomplete',
		''
	),
	(
		'On',
		'binary products',
		''
	),
	(
		'On',
		'wide pullbacks',
		''
	),
	(
		'On',
		'well-powered',
		''
	),
	(
		'On',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'LRS',
		'locally small',
		''
	),
	(
		'LRS',
		'complete',
		''
	),
	(
		'LRS',
		'cocomplete',
		''
	),
	(
		'LRS',
		'well-powered',
		''
	),
	(
		'LRS',
		'well-copowered',
		''
	),
	(
		'LRS',
		'infinitary distributive',
		''
	),
	(
		'LRS',
		'disjoint coproducts',
		''
	),
	(
		'Sch',
		'locally small',
		''
	),
	(
		'Sch',
		'finitely complete',
		''
	),
	(
		'Sch',
		'well-powered',
		''
	),
	(
		'Sch',
		'infinitary distributive',
		''
	),
	(
		'Sch',
		'disjoint coproducts',
		''
	),
	(
		'Fld',
		'locally small',
		''
	),
	(
		'Fld',
		'filtered colimits',
		''
	),
	(
		'Fld',
		'connected limits',
		''
	),
	(
		'Fld',
		'inhabited',
		''
	),
	(
		'Fld',
		'left cancellative',
		''
	),
	(
		'Fld',
		'well-powered',
		''
	),
	(
		'FreeAb',
		'locally small',
		''
	),
	(
		'FreeAb',
		'additive',
		''
	),
	(
		'FreeAb',
		'well-powered',
		''
	),
	(
		'FreeAb',
		'well-copowered',
		''
	),
	(
		'FreeAb',
		'equalizers',
		'Subgroups of free abelian groups are free abelian.'
	),
	(
		'FreeAb',
		'generator',
		''
	),
	(
		'FreeAb',
		'cogenerator',
		''
	),
	(
		'FreeAb',
		'disjoint coproducts',
		''
	),
	(
		'FreeAb',
		'Malcev',
		'follows in the same way as for abelian groups'
	),
	(
		'Z',
		'complete',
		''
	),
	(
		'Z',
		'cocomplete',
		''
	),
	(
		'Z',
		'infinitary distributive',
		''
	),
	(
		'Z',
		'exact filtered colimits',
		''
	),
	(
		'Z',
		'disjoint coproducts',
		''
	),
	(
		'Z',
		'mono-regular',
		''
	),
	(
		'Z',
		'epi-regular',
		''
	),
	(
		'BG',
		'small',
		''
	),
	(
		'BG',
		'groupoid',
		''
	),
	(
		'BG',
		'connected',
		''
	),
	(
		'BG',
		'generator',
		''
	),
	(
		'BG',
		'skeletal',
		'There is just one object'
	),
	(
		'BGf',
		'finite',
		''
	),
	(
		'BGf',
		'groupoid',
		''
	),
	(
		'BGf',
		'connected',
		''
	),
	(
		'BGf',
		'generator',
		''
	),
	(
		'BGf',
		'skeletal',
		'There is just one object'
	),
	(
		'BN',
		'small',
		''
	),
	(
		'BN',
		'connected',
		''
	),
	(
		'BN',
		'self-dual',
		''
	),
	(
		'BN',
		'generator',
		''
	),
	(
		'BN',
		'pullbacks',
		''
	),
	(
		'BN',
		'left cancellative',
		''
	),
	(
		'BN',
		'skeletal',
		'There is just one object'
	),
	(
		'walking_pair',
		'finite',
		''
	),
	(
		'walking_pair',
		'self-dual',
		''
	),
	(
		'walking_pair',
		'connected',
		''
	),
	(
		'walking_pair',
		'generator',
		''
	),
	(
		'walking_pair',
		'filtered limits',
		''
	),
	(
		'walking_pair',
		'left cancellative',
		''
	),
	(
		'walking_pair',
		'skeletal',
		'The two objects are not isomorphic'
	),
	(
		'walking_isomorphism',
		'trivial',
		''
	),
	(
		'walking_isomorphism',
		'finite',
		''
	),
	(
		'Setne',
		'locally small',
		''
	),
	(
		'Setne',
		'generator',
		''
	),
	(
		'Setne',
		'cogenerator',
		''
	),
	(
		'Setne',
		'well-powered',
		''
	),
	(
		'Setne',
		'well-copowered',
		''
	),
	(
		'Setne',
		'products',
		''
	),
	(
		'Setne',
		'wide pushouts',
		''
	),
	(
		'Setne',
		'coequalizers',
		''
	),
	(
		'Setne',
		'cartesian closed',
		''
	),
	(
		'Setne',
		'mono-regular',
		''
	),
	(
		'Setne',
		'epi-regular',
		''
	),
	(
		'B',
		'locally small',
		''
	),
	(
		'B',
		'essentially small',
		''
	),
	(
		'B',
		'groupoid',
		''
	),
	(
		'B',
		'inhabited',
		''
	),
	(
		'FI',
		'locally small',
		''
	),
	(
		'FI',
		'initial object',
		''
	),
	(
		'FI',
		'left cancellative',
		''
	),
	(
		'FI',
		'essentially small',
		''
	),
	(
		'FI',
		'generator',
		''
	),
	(
		'FI',
		'connected limits',
		''
	),
	(
		'FI',
		'mono-regular',
		''
	),
	(
		'FI',
		'epi-regular',
		''
	),
	(
		'FS',
		'locally small',
		''
	),
	(
		'FS',
		'essentially small',
		''
	),
	(
		'FS',
		'right cancellative',
		''
	),
	(
		'FS',
		'cogenerator',
		''
	),
	(
		'FS',
		'wide pushouts',
		''
	),
	(
		'FS',
		'coequalizers',
		''
	),
	(
		'FS',
		'mono-regular',
		''
	),
	(
		'FS',
		'epi-regular',
		''
	),
	(
		'BOn',
		'connected',
		''
	),
	(
		'BOn',
		'generator',
		''
	),
	(
		'BOn',
		'cogenerator',
		''
	),
	(
		'BOn',
		'left cancellative',
		''
	),
	(
		'BOn',
		'well-copowered',
		''
	),
	(
		'BOn',
		'equalizers',
		''
	),
	(
		'BOn',
		'skeletal',
		'There is just one object'
	),
	(
		'FinOrd',
		'essentially small',
		''
	),
	(
		'FinOrd',
		'locally small',
		''
	),
	(
		'FinOrd',
		'finitely complete',
		''
	),
	(
		'FinOrd',
		'generator',
		''
	),
	(
		'FinOrd',
		'cogenerator',
		''
	),
	(
		'FinOrd',
		'strict initial object',
		''
	),
	(
		'FinOrd',
		'coequalizers',
		''
	),
	(
		'FinOrd',
		'mono-regular',
		''
	),
	(
		'FinOrd',
		'epi-regular',
		''
	),
	(
		'Rel',
		'locally small',
		''
	),
	(
		'Rel',
		'self-dual',
		''
	),
	(
		'Rel',
		'pointed',
		''
	),
	(
		'Rel',
		'generator',
		''
	),
	(
		'Rel',
		'disjoint coproducts',
		''
	),
	(
		'Rel',
		'well-powered',
		''
	),
	(
		'Sp',
		'elementary topos',
		''
	),
	(
		'Sp',
		'essentially small',
		''
	),
	(
		'real_interval',
		'small',
		''
	),
	(
		'real_interval',
		'self-dual',
		''
	),
	(
		'real_interval',
		'distributive',
		''
	),
	(
		'real_interval',
		'locally ℵ₁-presentable',
		'See <a href="https://math.stackexchange.com/questions/4481902/locally-presentable-vs-compactly-presentable-categories#comment9399784_4482185" target="_blank">MSE/4481902</a>.'
	),
	(
		'real_interval',
		'skeletal',
		'The relation $\leq$ is antisymmetric.'
	),
	(
		'Zdiv',
		'small',
		'trivial'
	),
	(
		'Zdiv',
		'products',
		'Take the $\gcd$ of a subset.'
	),
	(
		'Zdiv',
		'distributive',
		'Using prime factorizations, one can prove that $\gcd(a, \mathrm{lcm} \{b_i \}) = \mathrm{lcm} \{ \gcd(a, b_i) \}$ for finitely many $b_i$.'
	),
	(
		'Zdiv',
		'locally ℵ₁-presentable',
		'Every $\aleph_1$-directed diagram is eventually constant.'
	),
	(
		'Noo',
		'small',
		'trivial'
	),
	(
		'Noo',
		'coproducts',
		'Take the supremum.'
	),
	(
		'Noo',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'Noo',
		'infinitary distributive',
		'One can show that $\sup_i \min(a,b_i) = \min(a, \sup_i b_i)$.'
	),
	(
		'Noo',
		'locally finitely presentable',
		'Every natural number is finitely presentable, and $\infty$ is the colimit of all $n < \infty$.'
	);