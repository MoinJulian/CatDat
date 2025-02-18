// @vitest-environment jsdom

import { get_saved_theme, THEMES, update_theme } from './theme.svelte'

import * as appenv from '$app/environment'

describe('update_theme', () => {
	afterEach(() => {
		vi.resetAllMocks()
		document.body.removeAttribute('data-theme')
		localStorage.removeItem('theme')
	})

	it('should update the theme on the body and in localStorage', async () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		expect(document.body.getAttribute('data-theme')).toBe(null)
		update_theme('light')
		expect(document.body.getAttribute('data-theme')).toBe('light')
		expect(localStorage.getItem('theme')).toBe('light')
	})

	it('should not do anything outside the browser', async () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(false)
		expect(document.body.getAttribute('data-theme')).toBe(null)
		update_theme('light')
		expect(document.body.getAttribute('data-theme')).toBe(null)
		expect(localStorage.getItem('theme')).toBe(null)
	})
})

describe('get_saved_theme', () => {
	it('should be light when the body has the "light" theme attribute', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		vi.spyOn(document.body, 'getAttribute').mockReturnValueOnce('light')
		expect(get_saved_theme()).toBe('light')
	})

	it('should be dark when the body has the "dark" theme attribute', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		vi.spyOn(document.body, 'getAttribute').mockReturnValueOnce('dark')
		expect(get_saved_theme()).toBe('dark')
	})

	it('should be dark when the body has no theme attribute', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		vi.spyOn(document.body, 'getAttribute').mockReturnValueOnce(null)
		expect(get_saved_theme()).toBe('dark')
	})

	it('should be dark outside of the browser', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(false)
		expect(get_saved_theme()).toBe('dark')
	})
})

describe('THEMES', () => {
	it('should include light and dark', () => {
		expect(THEMES).toContain('light')
		expect(THEMES).toContain('dark')
	})
})
