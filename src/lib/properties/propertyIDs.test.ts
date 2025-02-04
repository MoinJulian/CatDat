import { is_valid_property, PROPERTY_IDs } from './propertyIDs'

describe('is valid property', () => {
	it("should return true for 'small'", () => {
		expect(is_valid_property('small')).toBe(true)
	})
	it("should return false for 'smol'", () => {
		expect(is_valid_property('smol')).toBe(false)
	})
})

describe('each ID', () => {
	it('should not contain an underscore (this would mess up the URL encoding)', () => {
		for (const id of PROPERTY_IDs) {
			expect(id).not.toContain('_')
		}
	})
})
