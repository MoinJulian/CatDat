import { properties_dictionary } from './property.dict'

describe('properties dictionary', () => {
	it('should have consistent names', () => {
		for (const [name, property] of Object.entries(properties_dictionary)) {
			expect(name).toBe(property.id)
		}
	})
})
