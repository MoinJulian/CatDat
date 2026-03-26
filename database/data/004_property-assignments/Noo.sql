INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Noo',
	'small',
	TRUE,
	'trivial'
),
(
	'Noo',
	'coproducts',
	TRUE,
	'Take the supremum.'
),
(
	'Noo',
	'skeletal',
	TRUE,
	'The relation $\leq$ is antisymmetric'
),
(
	'Noo',
	'infinitary distributive',
	TRUE,
	'We need to prove that $\sup_i \min(a,b_i) = \min(a, \sup_i b_i)$. The inequality $\leq$ is formal, we need to prove $\geq$. For the empty index set both sides are $0$. If $a = \infty$, both sides are $\sup_i b_i$. If the set $\{b_i\}$ is bounded, there is some $i_0$ with $b_{i_0} = \sup_i b_i$. Then $\sup_i \min(a,b_i) \geq \sup_i \min(a,b_{i_0}) =  \min(a, \sup_i b_i)$. If $a < \infty$ and the set $\{b_i\}$ is unbounded, there is some $i_0$ with $b_{i_0} > a$. Then $\sup_i \min(a,b_i) \geq \min(a,b_{i_0}) = a = \min(a,\infty) = \min(a, \sup_i b_i)$.'
),
(
	'Noo',
	'locally finitely presentable',
	TRUE,
	'Every natural number is finitely presentable, and $\infty$ is the colimit of all $n < \infty$.'
),
(
	'Noo',
	'infinitary codistributive',
	TRUE,
	'We need to prove $\max(a, \inf_i b_i) = \inf_i \max(a,b_i)$. The inequality $\leq$ is formal, we need to prove $\geq$. For the empty index set both sides are $\infty$. Otherwise, there is some $i_0$ with $b_{i_0} = \inf_i b_i$. Then $\max(a, \inf_i b_i) = \max(a, b_{i_0}) \geq   \inf_i \max(a,b_i)$.'
),
(
	'Noo',
	'strongly connected',
	TRUE,
	'trivial'
),
(
	'Noo',
	'essentially finite',
	FALSE,
	'trivial'
),
(
	'Noo',
	'self-dual',
	FALSE,
	'every upper set is infinite, but every lower set is finite'
);
