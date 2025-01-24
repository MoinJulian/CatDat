export const PREFIX_CONFIG = {
	'is': 'is not',
	'is a': 'is not a',
	'is an': 'is not an',
	'has': 'does not have',
	'has a': 'does not have a',
	'has an': 'does not have an',
} as const

export type Prefix = keyof typeof PREFIX_CONFIG

export function negate_prefix(prefix: Prefix) {
	return PREFIX_CONFIG[prefix]
}
