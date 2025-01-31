import type { CategoryID } from './categoryIDs'
import type { PreCategory, CategoryDetailed, Category } from '$lib/commons/types'
import type { PropertyID } from '$lib/properties/propertyIDs'

import { categories } from './categories'
import { group_items } from '$lib/commons/utils'
import { property_deduction_system } from '$lib/properties/properties.utils'
import { EntitySystem } from '$lib/logic/EntitySystem'

/**
 * Converts the lists of properties and non-properties to sets.
 * This is necessary for the EntitySystem to work.
 */
function make_sets(category: PreCategory): Category {
	const { properties, non_properties, ...rest } = category
	return {
		...rest,
		properties: new Set(properties),
		non_properties: new Set(non_properties),
	}
}

export const category_system = new EntitySystem<Category, PropertyID>(
	property_deduction_system,
	categories.map(make_sets),
)

export const categories_detailed: CategoryDetailed[] = category_system.entities

export const categories_dictionary_detailed = group_items<CategoryID, CategoryDetailed>(
	categories_detailed,
)
