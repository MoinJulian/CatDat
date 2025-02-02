import { properties } from '$lib/properties/properties'
import {
	categories_detailed,
	categories_dictionary_detailed,
	shorten_category,
} from './categories.utils'

describe('categories detailed', () => {
	for (const category of categories_detailed) {
		it(`should not have contradictory properties for: ${category.name}`, () => {
			const property_set = new Set(category.all_properties)
			const non_property_set = new Set(category.non_properties)
			expect(property_set.intersection(non_property_set)).toHaveLength(0)
		})
	}

	for (const property of properties) {
		it(`should have at least one counterexample for: ${property.id}`, () => {
			const counterexample = categories_detailed.find((category) =>
				category.all_non_properties.has(property.id),
			)
			expect(counterexample).toBeDefined()
		})
	}
})

describe('shorten_category', () => {
	it('returns only ID and name', () => {
		const Set = categories_dictionary_detailed.Set
		const shortened = shorten_category(Set)
		expect(shortened).toEqual({ id: 'Set', name: 'category of sets' })
	})
})
