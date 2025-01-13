import { category_property_list } from './dictionaries/category-properties'
import { add_properties } from './transforms'
import type { Category, CategoryWithProperties } from './types'

describe('add_properties', () => {
	it('converts the property name to the whole property for each property in the category', () => {
		const sample_category: Category = {
			id: 1,
			name: 'Sample Category',
			objects: 'foo',
			morphisms: 'bar',
			notation: 'SC',
			properties: ['small'],
			non_properties: ['complete'],
		}

		const expected: CategoryWithProperties = {
			id: 1,
			name: 'Sample Category',
			objects: 'foo',
			morphisms: 'bar',
			notation: 'SC',
			properties: [category_property_list[0]],
			non_properties: [category_property_list[2]],
		}

		expect(category_property_list[0].name).toBe('small')
		expect(category_property_list[2].name).toBe('complete')

		expect(add_properties(sample_category)).toEqual(expected)
	})
})
