INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'BG',
	'small',
	TRUE,
	'trivial'
),
(
	'BG',
	'groupoid',
	TRUE,
	'trivial'
),
(
	'BG',
	'strongly connected',
	TRUE,
	'trivial'
),
(
	'BG',
	'generator',
	TRUE,
	'The unique object is a generator for trivial reasons.'
),
(
	'BG',
	'skeletal',
	TRUE,
	'There is just one object'
),
(
	'BG',
	'trivial',
	FALSE,
	'trivial'
),
(
	'BG',
	'essentially finite',
	FALSE,
	'This is because we choose $G$ to be infinite.'
);
