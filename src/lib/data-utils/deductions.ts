import { IMPLICATIONS } from '$lib/database/implications.data'
import type { PropertyID } from '$lib/database/properties.data'
import { DeductionSystemWithDuals } from '$lib/logic/DeductionSystemWithDuals'
import {
	get_dual_property,
	get_non_properties,
	get_prefix,
	get_properties,
	propertyIDs,
} from '$lib/data-utils/data.helpers'
import { CATEGORIES, type CategoryID } from '$lib/database/categories.data'
import { group_items } from '$lib/commons/utils'
import { EntitySystemWithDuals } from '$lib/logic/EntitySystemWithDuals'
import type { Entity } from '$lib/logic/Entity'

export const property_deduction_system = new DeductionSystemWithDuals<PropertyID>(
	new Set(propertyIDs),
	Array.from(IMPLICATIONS),
	get_dual_property,
	get_prefix,
)

export const implications_with_duals = property_deduction_system.rules

export const category_system = new EntitySystemWithDuals<CategoryID, PropertyID>(
	property_deduction_system,
)

export type CategoryWithDeducedProperties = Entity<CategoryID, PropertyID>

for (const category of CATEGORIES) {
	category_system.add(
		category.id,
		get_properties(category.id),
		get_non_properties(category.id),
	)
}

export const categories_with_deduced_properties: CategoryWithDeducedProperties[] =
	category_system.entities

export const categories_with_deduced_properties_dictionary = group_items(
	categories_with_deduced_properties,
)
