import { CATEGORY_IDs, is_valid_category } from './categoryIDs'

describe('category IDs', () => {
	it('should have only IDs without spaces', () => {
		for (const id of CATEGORY_IDs) {
			expect(id).not.toContain(' ')
		}
	})
})

describe('is valid category', () => {
	it("should return true for 'Set'", () => {
		expect(is_valid_category('Set')).toBe(true)
	})

	it("should return false for 'Bla'", () => {
		expect(is_valid_category('Bla')).toBe(false)
	})
})
