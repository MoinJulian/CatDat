DELETE FROM category_properties;

INSERT INTO category_properties (
	category_id, -- ID of the category
	property_id, -- ID of the property
	reason		 -- proof or reference why the category satisfies the property
)
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
		NULL
	),
	(
		'Grp',
		'disjoint coproducts',
		NULL
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
		NULL
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
		NULL
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
		NULL
	),
	(
		'Abfg',
		'essentially small',
		NULL
	),
	(
		'Abfg',
		'abelian',
		NULL
	),
	(
		'Abfg',
		'generator',
		NULL
	),
	(
		'Set*',
		'locally small',
		NULL
	),
	(
		'Set*',
		'pointed',
		NULL
	),
	(
		'Set*',
		'finitary algebraic',
		NULL
	),
	(
		'Set*',
		'subobject classifier',
		NULL
	),
	(
		'Set*',
		'cogenerator',
		NULL
	),
	(
		'Set*',
		'disjoint coproducts',
		NULL
	),
	(
		'Set*',
		'epi-regular',
		NULL
	),
	(
		'sSet',
		'locally small',
		NULL
	),
	(
		'sSet',
		'Grothendieck topos',
		NULL
	),
	(
		'sSet',
		'locally finitely presentable',
		NULL
	),
	(
		'Mon',
		'locally small',
		NULL
	),
	(
		'Mon',
		'pointed',
		NULL
	),
	(
		'Mon',
		'finitary algebraic',
		NULL
	),
	(
		'Mon',
		'disjoint coproducts',
		NULL
	),
	(
		'Pos',
		'locally small',
		NULL
	),
	(
		'Pos',
		'locally finitely presentable',
		NULL
	),
	(
		'Pos',
		'cartesian closed',
		NULL
	),
	(
		'Pos',
		'cogenerator',
		NULL
	),
	(
		'Pos',
		'disjoint coproducts',
		NULL
	),
	(
		'walking_morphism',
		'finitary algebraic',
		NULL
	),
	(
		'walking_morphism',
		'self-dual',
		NULL
	),
	(
		'walking_morphism',
		'finite',
		NULL
	),
	(
		'walking_morphism',
		'cartesian closed',
		NULL
	),
	(
		'walking_morphism',
		'skeletal',
		'The two objects are not isomorphic'
	),
	(
		'M-Set',
		'locally small',
		NULL
	),
	(
		'M-Set',
		'Grothendieck topos',
		NULL
	),
	(
		'M-Set',
		'finitary algebraic',
		NULL
	),
	(
		'R-Mod',
		'locally small',
		NULL
	),
	(
		'R-Mod',
		'abelian',
		NULL
	),
	(
		'R-Mod',
		'finitary algebraic',
		NULL
	),
	(
		'Met',
		'locally small',
		NULL
	),
	(
		'Met',
		'well-powered',
		NULL
	),
	(
		'Met',
		'well-copowered',
		NULL
	),
	(
		'Met',
		'equalizers',
		NULL
	),
	(
		'Met',
		'finite products',
		NULL
	),
	(
		'Met',
		'coequalizers',
		NULL
	),
	(
		'Met',
		'filtered colimits',
		NULL
	),
	(
		'Met',
		'strict initial object',
		NULL
	),
	(
		'Met',
		'generator',
		NULL
	),
	(
		'Met',
		'cogenerator',
		NULL
	),
	(
		'Met_oo',
		'locally small',
		NULL
	),
	(
		'Met_oo',
		'locally ℵ₁-presentable',
		'Example 4.5 in <a href="https://arxiv.org/abs/1504.02660" target="_blank">this preprint</a>'
	),
	(
		'Met_oo',
		'infinitary distributive',
		NULL
	),
	(
		'Met_oo',
		'cogenerator',
		NULL
	),
	(
		'Met_oo',
		'disjoint coproducts',
		NULL
	),
	(
		'Met_c',
		'locally small',
		NULL
	),
	(
		'Met_c',
		'equalizers',
		NULL
	),
	(
		'Met_c',
		'disjoint coproducts',
		NULL
	),
	(
		'Met_c',
		'well-powered',
		NULL
	),
	(
		'Met_c',
		'generator',
		NULL
	),
	(
		'Met_c',
		'cogenerator',
		NULL
	),
	(
		'Met_c',
		'infinitary distributive',
		NULL
	),
	(
		'Met_c',
		'countable products',
		NULL
	),
	(
		'Ban',
		'locally small',
		NULL
	),
	(
		'Ban',
		'pointed',
		NULL
	),
	(
		'Ban',
		'locally ℵ₁-presentable',
		'Example 1.48 in Adamek-Rosicky'
	),
	(
		'Ban',
		'disjoint coproducts',
		NULL
	),
	(
		'Ban',
		'cogenerator',
		'Hahn-Banach shows that $\mathbb{C}$ is one'
	),
	(
		'Man',
		'locally small',
		NULL
	),
	(
		'Man',
		'well-powered',
		NULL
	),
	(
		'Man',
		'well-copowered',
		NULL
	),
	(
		'Man',
		'distributive',
		NULL
	),
	(
		'Man',
		'generator',
		NULL
	),
	(
		'Man',
		'disjoint finite coproducts',
		NULL
	),
	(
		'Man',
		'countable coproducts',
		NULL
	),
	(
		'Man',
		'Cauchy complete',
		NULL
	),
	(
		'Meas',
		'locally small',
		NULL
	),
	(
		'Meas',
		'well-powered',
		NULL
	),
	(
		'Meas',
		'well-copowered',
		NULL
	),
	(
		'Meas',
		'complete',
		NULL
	),
	(
		'Meas',
		'cocomplete',
		NULL
	),
	(
		'Meas',
		'infinitary distributive',
		NULL
	),
	(
		'Meas',
		'generator',
		NULL
	),
	(
		'Meas',
		'cogenerator',
		NULL
	),
	(
		'Meas',
		'disjoint coproducts',
		NULL
	),
	(
		'N',
		'small',
		NULL
	),
	(
		'N',
		'finitely cocomplete',
		NULL
	),
	(
		'N',
		'binary products',
		NULL
	),
	(
		'N',
		'thin',
		NULL
	),
	(
		'N',
		'wide pullbacks',
		NULL
	),
	(
		'N',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'Cat',
		'locally small',
		NULL
	),
	(
		'Cat',
		'cartesian closed',
		NULL
	),
	(
		'Cat',
		'locally finitely presentable',
		NULL
	),
	(
		'Cat',
		'disjoint coproducts',
		NULL
	),
	(
		'On',
		'thin',
		NULL
	),
	(
		'On',
		'locally small',
		NULL
	),
	(
		'On',
		'cocomplete',
		NULL
	),
	(
		'On',
		'binary products',
		NULL
	),
	(
		'On',
		'wide pullbacks',
		NULL
	),
	(
		'On',
		'well-powered',
		NULL
	),
	(
		'On',
		'skeletal',
		'The relation $\leq$ is antisymmetric'
	),
	(
		'LRS',
		'locally small',
		NULL
	),
	(
		'LRS',
		'complete',
		NULL
	),
	(
		'LRS',
		'cocomplete',
		NULL
	),
	(
		'LRS',
		'well-powered',
		NULL
	),
	(
		'LRS',
		'well-copowered',
		NULL
	),
	(
		'LRS',
		'infinitary distributive',
		NULL
	),
	(
		'LRS',
		'disjoint coproducts',
		NULL
	),
	(
		'Sch',
		'locally small',
		NULL
	),
	(
		'Sch',
		'finitely complete',
		NULL
	),
	(
		'Sch',
		'well-powered',
		NULL
	),
	(
		'Sch',
		'infinitary distributive',
		NULL
	),
	(
		'Sch',
		'disjoint coproducts',
		NULL
	),
	(
		'Fld',
		'locally small',
		NULL
	),
	(
		'Fld',
		'filtered colimits',
		NULL
	),
	(
		'Fld',
		'connected limits',
		NULL
	),
	(
		'Fld',
		'inhabited',
		NULL
	),
	(
		'Fld',
		'left cancellative',
		NULL
	),
	(
		'Fld',
		'well-powered',
		NULL
	),
	(
		'FreeAb',
		'locally small',
		NULL
	),
	(
		'FreeAb',
		'additive',
		NULL
	),
	(
		'FreeAb',
		'well-powered',
		NULL
	),
	(
		'FreeAb',
		'well-copowered',
		NULL
	),
	(
		'FreeAb',
		'equalizers',
		'Subgroups of free abelian groups are free abelian.'
	),
	(
		'FreeAb',
		'generator',
		NULL
	),
	(
		'FreeAb',
		'cogenerator',
		NULL
	),
	(
		'FreeAb',
		'disjoint coproducts',
		NULL
	),
	(
		'FreeAb',
		'Malcev',
		'follows in the same way as for abelian groups'
	),
	(
		'Z',
		'complete',
		NULL
	),
	(
		'Z',
		'cocomplete',
		NULL
	),
	(
		'Z',
		'infinitary distributive',
		NULL
	),
	(
		'Z',
		'exact filtered colimits',
		NULL
	),
	(
		'Z',
		'disjoint coproducts',
		NULL
	),
	(
		'Z',
		'mono-regular',
		NULL
	),
	(
		'Z',
		'epi-regular',
		NULL
	),
	(
		'BG',
		'small',
		NULL
	),
	(
		'BG',
		'groupoid',
		NULL
	),
	(
		'BG',
		'connected',
		NULL
	),
	(
		'BG',
		'generator',
		NULL
	),
	(
		'BG',
		'skeletal',
		'There is just one object'
	),
	(
		'BGf',
		'finite',
		NULL
	),
	(
		'BGf',
		'groupoid',
		NULL
	),
	(
		'BGf',
		'connected',
		NULL
	),
	(
		'BGf',
		'generator',
		NULL
	),
	(
		'BGf',
		'skeletal',
		'There is just one object'
	),
	(
		'BN',
		'small',
		NULL
	),
	(
		'BN',
		'connected',
		NULL
	),
	(
		'BN',
		'self-dual',
		NULL
	),
	(
		'BN',
		'generator',
		NULL
	),
	(
		'BN',
		'pullbacks',
		NULL
	),
	(
		'BN',
		'left cancellative',
		NULL
	),
	(
		'BN',
		'skeletal',
		'There is just one object'
	),
	(
		'walking_pair',
		'finite',
		NULL
	),
	(
		'walking_pair',
		'self-dual',
		NULL
	),
	(
		'walking_pair',
		'connected',
		NULL
	),
	(
		'walking_pair',
		'generator',
		NULL
	),
	(
		'walking_pair',
		'filtered limits',
		NULL
	),
	(
		'walking_pair',
		'left cancellative',
		NULL
	),
	(
		'walking_pair',
		'skeletal',
		'The two objects are not isomorphic'
	),
	(
		'walking_isomorphism',
		'trivial',
		NULL
	),
	(
		'walking_isomorphism',
		'finite',
		NULL
	),
	(
		'Setne',
		'locally small',
		NULL
	),
	(
		'Setne',
		'generator',
		NULL
	),
	(
		'Setne',
		'cogenerator',
		NULL
	),
	(
		'Setne',
		'well-powered',
		NULL
	),
	(
		'Setne',
		'well-copowered',
		NULL
	),
	(
		'Setne',
		'products',
		NULL
	),
	(
		'Setne',
		'wide pushouts',
		NULL
	),
	(
		'Setne',
		'coequalizers',
		NULL
	),
	(
		'Setne',
		'cartesian closed',
		NULL
	),
	(
		'Setne',
		'mono-regular',
		NULL
	),
	(
		'Setne',
		'epi-regular',
		NULL
	),
	(
		'B',
		'locally small',
		NULL
	),
	(
		'B',
		'essentially small',
		NULL
	),
	(
		'B',
		'groupoid',
		NULL
	),
	(
		'B',
		'inhabited',
		NULL
	),
	(
		'FI',
		'locally small',
		NULL
	),
	(
		'FI',
		'initial object',
		NULL
	),
	(
		'FI',
		'left cancellative',
		NULL
	),
	(
		'FI',
		'essentially small',
		NULL
	),
	(
		'FI',
		'generator',
		NULL
	),
	(
		'FI',
		'connected limits',
		NULL
	),
	(
		'FI',
		'mono-regular',
		NULL
	),
	(
		'FI',
		'epi-regular',
		NULL
	),
	(
		'FS',
		'locally small',
		NULL
	),
	(
		'FS',
		'essentially small',
		NULL
	),
	(
		'FS',
		'right cancellative',
		NULL
	),
	(
		'FS',
		'cogenerator',
		NULL
	),
	(
		'FS',
		'wide pushouts',
		NULL
	),
	(
		'FS',
		'coequalizers',
		NULL
	),
	(
		'FS',
		'mono-regular',
		NULL
	),
	(
		'FS',
		'epi-regular',
		NULL
	),
	(
		'BOn',
		'connected',
		NULL
	),
	(
		'BOn',
		'generator',
		NULL
	),
	(
		'BOn',
		'cogenerator',
		NULL
	),
	(
		'BOn',
		'left cancellative',
		NULL
	),
	(
		'BOn',
		'well-copowered',
		NULL
	),
	(
		'BOn',
		'equalizers',
		NULL
	),
	(
		'BOn',
		'skeletal',
		'There is just one object'
	),
	(
		'FinOrd',
		'essentially small',
		NULL
	),
	(
		'FinOrd',
		'locally small',
		NULL
	),
	(
		'FinOrd',
		'finitely complete',
		NULL
	),
	(
		'FinOrd',
		'generator',
		NULL
	),
	(
		'FinOrd',
		'cogenerator',
		NULL
	),
	(
		'FinOrd',
		'strict initial object',
		NULL
	),
	(
		'FinOrd',
		'coequalizers',
		NULL
	),
	(
		'FinOrd',
		'mono-regular',
		NULL
	),
	(
		'FinOrd',
		'epi-regular',
		NULL
	),
	(
		'Rel',
		'locally small',
		NULL
	),
	(
		'Rel',
		'self-dual',
		NULL
	),
	(
		'Rel',
		'pointed',
		NULL
	),
	(
		'Rel',
		'generator',
		NULL
	),
	(
		'Rel',
		'disjoint coproducts',
		NULL
	),
	(
		'Rel',
		'well-powered',
		NULL
	),
	(
		'Sp',
		'elementary topos',
		NULL
	),
	(
		'Sp',
		'essentially small',
		NULL
	),
	(
		'real_interval',
		'small',
		NULL
	),
	(
		'real_interval',
		'self-dual',
		NULL
	),
	(
		'real_interval',
		'distributive',
		NULL
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