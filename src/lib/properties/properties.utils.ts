import type { Property } from '$lib/types'
import { properties_dictionary } from './property.dict'
import type { PropertyID } from './propertyIDs'

export function get_property_url(property: Property) {
	return `/property/${property.id.replaceAll(' ', '_')}`
}

export function get_dual_property(id: PropertyID): null | PropertyID {
	const property = properties_dictionary[id]
	return property.dual ?? null
}
