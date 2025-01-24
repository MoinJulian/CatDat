import { properties } from '$lib/properties/properties'
import { categories_detailed, categories_dictionary } from './categories.dict'

describe('categories dictionary', () => {
	it('should have consistent IDs', () => {
		for (const [id, category] of Object.entries(categories_dictionary)) {
			expect(id).toBe(category.id)
		}
	})
})

describe('categories detailed', () => {
	for (const category of categories_detailed) {
		it(`should not have contradictory properties for: ${category.name}`, () => {
			const { properties, non_properties } = category
			const property_names = new Set(properties.map((x) => x.id))
			const non_property_names = new Set(non_properties.map((x) => x.id))
			expect(property_names.intersection(non_property_names).size).toBe(0)
		})
	}

	for (const property of properties) {
		it(`should have at least one counterexample for: ${property.id}`, () => {
			const counterexample = categories_detailed.find((category) =>
				category.non_properties.some((x) => x.id === property.id),
			)
			expect(counterexample).toBeDefined()
		})
	}
})
