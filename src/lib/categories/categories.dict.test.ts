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

	it('should distribute all the properties', () => {
		const random_index = Math.floor(Math.random() * categories_detailed.length)
		const example_category = categories_detailed[random_index]
		const property_count =
			example_category.properties.length +
			example_category.non_properties.length +
			example_category.unknown_properties.length
		expect(property_count).toBe(properties.length)
	})
})
