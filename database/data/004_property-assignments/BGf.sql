INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'BGf',
	'finite',
	TRUE,
	'trivial'
),
(
	'BGf',
	'groupoid',
	TRUE,
	'trivial'
),
(
	'BGf',
	'strongly connected',
	TRUE,
	'trivial'
),
(
	'BGf',
	'generator',
	TRUE,
	'The unique object is a generator for trivial reasons.'
),
(
	'BGf',
	'skeletal',
	TRUE,
	'There is just one object'
),
(
	'BGf',
	'trivial',
	FALSE,
	'trivial'
);
