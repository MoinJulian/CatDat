// @vitest-environment jsdom

import {
	get_saved_category_detail_level,
	is_valid_category_detail_level,
	update_category_detail_level,
} from './detail_level.svelte'

import * as appenv from '$app/environment'

describe('is_valid_category_detail_level', () => {
	it('should accept all, merged, basic, and nothing else', () => {
		expect(is_valid_category_detail_level('all')).toBe(true)
		expect(is_valid_category_detail_level('basic')).toBe(true)
		expect(is_valid_category_detail_level('merged')).toBe(true)
		expect(is_valid_category_detail_level('random')).toBe(false)
		expect(is_valid_category_detail_level(null)).toBe(false)
	})
})

describe('get_saved_category_detail_level', () => {
	afterEach(() => {
		vi.resetAllMocks()
		localStorage.removeItem('category_detail_level')
	})

	it('should be "all" when there is no saved category detail level', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		expect(get_saved_category_detail_level()).toBe('all')
	})

	it('should be "all" outside of the browser', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(false)
		expect(get_saved_category_detail_level()).toBe('all')
	})

	it('should be "all" when the saved category detail level is invalid', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		localStorage.setItem('category_detail_level', 'random')
		expect(get_saved_category_detail_level()).toBe('all')
	})

	it('should be the saved category detail level when it is valid', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		localStorage.setItem('category_detail_level', 'basic')
		expect(get_saved_category_detail_level()).toBe('basic')
	})
})

describe('update_category_detail_level', () => {
	afterEach(() => {
		vi.resetAllMocks()
		localStorage.removeItem('category_detail_level')
	})

	it('does nothing outside the browser', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(false)
		expect(localStorage.getItem('category_detail_level')).toBe(null)
		update_category_detail_level('all')
		expect(localStorage.getItem('category_detail_level')).toBe(null)
	})

	it('updates the category detail level in localStorage', () => {
		vi.spyOn(appenv, 'browser', 'get').mockReturnValueOnce(true)
		expect(localStorage.getItem('category_detail_level')).toBe(null)
		update_category_detail_level('all')
		expect(localStorage.getItem('category_detail_level')).toBe('all')
	})
})
