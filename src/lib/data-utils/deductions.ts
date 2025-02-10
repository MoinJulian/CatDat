import { IMPLICATIONS } from '$lib/database/implications.data'
import type { PropertyID } from '$lib/database/properties.data'
import { DeductionSystemWithDuals } from '$lib/logic/DeductionSystemWithDuals'
import { get_dual_property, get_prefix, propertyIDs } from '$lib/data-utils/data.helpers'
import { CATEGORIES, type CategoryID } from '$lib/database/categories.data'
import { group_items } from '$lib/commons/utils'
import { EntitySystemWithDuals } from '$lib/logic/EntitySystemWithDuals'
import type { Entity } from '$lib/logic/Entity'
import { CATEGORY_PROPERTIES } from '$lib/database/category-properties.data'
import { CATEGORY_NON_PROPERTIES } from '$lib/database/category-non-properties.data'

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

// TODO: clean this up
for (const category of CATEGORIES) {
	category_system.add(
		category.id,
		CATEGORY_PROPERTIES[category.id].map((property) => ({
			...property,
			prefix: get_prefix(property.id),
		})),
		CATEGORY_NON_PROPERTIES[category.id].map((x) => ({
			...x,
			prefix: get_prefix(x.id),
		})),
	)
}

export const categories_with_deduced_properties: CategoryWithDeducedProperties[] =
	category_system.entities

export const categories_with_deduced_properties_dictionary = group_items(
	categories_with_deduced_properties,
)
