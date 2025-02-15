import { categoryIDs, propertyIDs } from '$lib/data-utils/data.helpers'
import * as deductions_module from '$lib/data-utils/deductions'
import { get_comparison } from './comparison'
import { max_categories } from './comparison.config'

afterEach(() => {
	vi.restoreAllMocks()
})

describe('get_comparison', () => {
	it('should throw an error for invalid categories', () => {
		expect(() => get_comparison(['XYZ'])).toThrow('Invalid query')
	})

	it('should throw an error when too many categories are compared', () => {
		const limit = max_categories
		const compared_ids = categoryIDs.slice(0, limit + 1)
		expect(() => get_comparison(compared_ids)).toThrow('Too many categories')
	})

	it('should throw an error when the category system does not know the categories', () => {
		vi.spyOn(
			deductions_module.category_system,
			'get_comparison_table',
		).mockReturnValueOnce(null)

		const compared_ids = ['Set', '1']
		expect(() => get_comparison(compared_ids)).toThrow('Table could not be generated')
	})

	it('should return basic info about valid categories', () => {
		const compared_ids = ['Set', '1']
		const { compared_categories } = get_comparison(compared_ids)

		expect(compared_categories).toHaveLength(2)

		expect(compared_categories[0]).toEqual({
			id: 'Set',
			name: 'category of sets',
			notation: expect.any(String),
		})

		expect(compared_categories[1]).toEqual({
			id: '1',
			name: 'trivial category',
			notation: expect.any(String),
		})
	})

	it('should return a comparison table for valid categories', () => {
		const compared_ids = ['Ab', 'FinAb', '1']
		const { comparison_table } = get_comparison(compared_ids)

		expect(comparison_table).toHaveLength(propertyIDs.length)
		expect(comparison_table).toContainEqual(['locally small', true, true, true])
		expect(comparison_table).toContainEqual(['abelian', true, true, true])
		expect(comparison_table).toContainEqual(['essentially small', false, true, true])
		expect(comparison_table).toContainEqual([
			'locally presentable',
			true,
			false,
			true,
		])
	})
})
