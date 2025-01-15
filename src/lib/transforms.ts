import { get_deductions } from './dictionaries/deductions'
import { properties, properties_dictionary } from './dictionaries/properties'
import type { Category, CategoryDetailed, Prefix, Property } from './types'

/**
 * Adds the actual properties (not just their names) and
 * all their deductions to a given category.
 */
export function add_properties(category: Category): CategoryDetailed {
	const deduced_properties = Array.from(get_deductions(new Set(category.properties)))

	const actual_properties = deduced_properties.map((name) => ({
		...properties_dictionary[name],
		deduced: !category.properties.includes(name),
	}))

	// TODO: handle deduced non-properties

	const actual_non_properties = category.non_properties.map((name) => ({
		...properties_dictionary[name],
		deduced: false,
	}))

	const { properties: _, non_properties: __, ...rest } = category

	const unknown_properties = properties.filter(
		(property) =>
			!deduced_properties.includes(property.name) &&
			!category.non_properties.includes(property.name), // TODO: handle deduced non-properties here
	)

	return {
		...rest,
		properties: actual_properties,
		non_properties: actual_non_properties,
		unknown_properties,
	}
}

export function get_property_url(property: Property) {
	return `/property/${property.name.replaceAll(' ', '_')}`
}

const negation_prefixes: Record<Prefix, string> = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
}

export function negate_prefix(prefix: Prefix): string {
	return negation_prefixes[prefix]
}
