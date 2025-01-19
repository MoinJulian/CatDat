import { get_dual_property, get_property_url } from './properties.utils'
import { properties_dictionary } from './property.dict'

describe('get_property_url', () => {
	it("should return '/property/abelian'", () => {
		expect(get_property_url(properties_dictionary.abelian)).toBe('/property/abelian')
	})
})

describe('get_dual_property', () => {
	it("should return 'small' for 'small'", () => {
		expect(get_dual_property('small')).toBe('small')
	})

	it("should return 'complete' for 'cocomplete'", () => {
		expect(get_dual_property('cocomplete')).toBe('complete')
	})

	it("should return 'null' for 'cartesian closed'", () => {
		expect(get_dual_property('cartesian closed')).toBe(null)
	})
})
