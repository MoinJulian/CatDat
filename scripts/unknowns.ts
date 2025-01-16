import { categories } from '../src/lib/dictionaries/categories'
import { add_details } from '../src/lib/details'

console.info('find unknown properties\n')

const with_unknowns: string[] = []

for (const category of categories) {
	// @ts-ignore
	const detailed_category = add_details(category)
	console.info(category.id, ':', detailed_category.unknown_properties.length)
	if (detailed_category.unknown_properties.length > 0) {
		with_unknowns.push(category.id)
	}
}

console.info('\ncategories with unknown properties:')
console.info(with_unknowns.join(', '))
