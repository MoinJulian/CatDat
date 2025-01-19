import { is_valid_property } from './propertyIDs'

describe('is valid property', () => {
	it("should return true for 'small'", () => {
		expect(is_valid_property('small')).toBe(true)
	})
	it("should return false for 'smol'", () => {
		expect(is_valid_property('smol')).toBe(false)
	})
})
