import { properties_dictionary } from './dictionaries/properties'
import { get_property_url, negate_prefix } from './utils'

describe('negate_prefix', () => {
	it("negates 'has a' to 'does not have a'", () => {
		expect(negate_prefix('has a')).toBe('does not have a')
	})
})

describe('get_property_url', () => {
	it("should return '/property/abelian'", () => {
		expect(get_property_url(properties_dictionary.abelian)).toBe('/property/abelian')
	})
})
