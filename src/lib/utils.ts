import type { Prefix, Property } from './types'

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
