export const THEMES = ['light', 'dark'] as const

export type Theme = (typeof THEMES)[number]

export const CATEGORY_DETAIL_LEVELS = {
	all: 'Show all properties for a category. Indicate which properties are in the database and which have been deduced. This is the default.',
	merged: "Show all properties for a category, but don't indicate which properties are in the database and which have been deduced.",
	basic: 'Show only those properties for a category that are in the database. Deduced properties are not shown.',
} as const

export type CategoryDetailLevel = keyof typeof CATEGORY_DETAIL_LEVELS

export function is_valid_category_detail_level(
	level: string | null,
): level is CategoryDetailLevel {
	return level != null && Object.keys(CATEGORY_DETAIL_LEVELS).includes(level)
}

export const DEFAULT_CATEGORY_DETAIL_LEVEL: CategoryDetailLevel = 'all'
