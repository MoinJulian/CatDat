import type { Property } from '$lib/types'
import type { PropertyID } from './propertyIDs'
import { group_items } from '$lib/utils'
import { properties } from './properties'

export const properties_dictionary = group_items<PropertyID, Property>(properties)
