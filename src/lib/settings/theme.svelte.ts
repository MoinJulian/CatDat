import { browser } from '$app/environment'

export const THEMES = ['light', 'dark', 'pink'] as const

export type Theme = (typeof THEMES)[number]

export const theme = $state<{ value: Theme }>({ value: get_saved_theme() })

export function get_saved_theme(): Theme {
	if (!browser) return 'dark'

	const saved_theme = document.body.getAttribute('data-theme')

	if (saved_theme === 'light' || saved_theme === 'dark' || saved_theme === 'pink') {
		return saved_theme
	}

	return 'dark'
}

export function update_theme(new_theme: Theme) {
	if (!browser) return
	document.body.setAttribute('data-theme', new_theme)
	localStorage.setItem('theme', new_theme)
}
