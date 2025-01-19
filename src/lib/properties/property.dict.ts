import type { Property } from '$lib/types'
import { properties } from './properties'
import type { PropertyID } from './propertyIDs'

export const properties_dictionary = properties.reduce(
	(acc, property) => ({ ...acc, [property.id]: property }),
	{},
) as Record<PropertyID, Property>
