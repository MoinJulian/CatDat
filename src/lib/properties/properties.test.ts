import { PREFIX_CONFIG } from './properties.utils'
import { properties } from './properties'

describe('properties of categories', () => {
	it('should have unique names', () => {
		const names = properties.map((property) => property.id)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have names without prefixes', () => {
		const names = properties.map((property) => property.id)
		for (const name of names) {
			for (const prefix in PREFIX_CONFIG) {
				expect(name.startsWith(prefix)).toBe(false)
			}
		}
	})

	it('should list dual properties mutually', () => {
		for (const property of properties) {
			if ('dual' in property) {
				const dual_property = properties.find((p) => p.id === property.dual)
				assert(dual_property !== undefined)
				expect(dual_property).toHaveProperty('dual')
				expect(dual_property.dual).toBe(property.id)
			}
		}
	})
})
