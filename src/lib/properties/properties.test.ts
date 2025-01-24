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

	it('should state when a property is not invariant under equivalences', () => {
		const being_small = properties.find((property) => property.id === 'small')
		expect(being_small).toBeDefined()
		expect(being_small?.invariant_under_equivalences).toBe(false)
	})

	it('should not state when a property is invariant under equivalences, since this is the default', () => {
		const being_abelian = properties.find((property) => property.id === 'abelian')
		expect(being_abelian).toBeDefined()
		expect(being_abelian?.invariant_under_equivalences).toBeUndefined()
	})
})
