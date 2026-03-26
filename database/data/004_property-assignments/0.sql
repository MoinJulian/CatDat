INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'0',
	'preadditive',
	TRUE,
	'This is vacuously true.'
),
(
	'0',
	'discrete',
	TRUE,
	'trivial'
),
(
	'0',
	'binary products',
	TRUE,
	'This is vacuously true.'
),
(
	'0',
	'finite',
	TRUE,
	'trivial'
),
(
	'0',
	'inhabited',
	FALSE,
	'trivial'
);
