import { type Property } from '$lib/types'
import { PREFIXES } from './prefix'
import { properties } from './properties'

describe('properties of categories', () => {
	it('should have unique names', () => {
		const names = properties.map((property) => property.id)
		expect(names).toEqual([...new Set(names)])
	})

	it('should have names without prefixes', () => {
		const names = properties.map((property) => property.id)
		for (const name of names) {
			for (const prefix of PREFIXES) {
				expect(name.startsWith(prefix)).toBe(false)
			}
		}
	})

	it('should list dual properties mutually', () => {
		for (const property of properties) {
			if ('dual' in property) {
				const dual_property = properties.find((p) => p.id === property.dual)
				expect(dual_property).toBeDefined()
				expect('dual' in (dual_property as Property)).toBe(true)
				expect((dual_property as Property).dual).toBe(property.id)
			}
		}
	})
})
