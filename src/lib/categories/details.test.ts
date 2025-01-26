import { categories } from './categories'
import { categories_dictionary } from './categories.dict'
import { add_details, category_deduction_system } from './details'

describe('add_details', () => {
	it('adds the actual properties and deductions of these', () => {
		const FinAb = categories_dictionary.FinAb
		const FinAbTransformed = add_details(FinAb)

		expect(FinAbTransformed.properties).toContain('self-dual')
		expect(FinAbTransformed.deduced_properties).toContain('initial object')
	})

	it('adds the non-properties and their deductions', () => {
		const Set = categories_dictionary.Set
		const SetDetailed = add_details(Set)

		expect(SetDetailed.non_properties).toContain('thin')
		expect(SetDetailed.deduced_non_properties).toContain('small')
	})

	it('removes any missing properties for the category of Sets', () => {
		const SetCat = categories_dictionary.Set
		const SetDetailed = add_details(SetCat)
		expect(SetDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of abelian groups', () => {
		const Ab = categories_dictionary.Ab
		const AbDetailed = add_details(Ab)
		expect(AbDetailed.unknown_properties).toHaveLength(0)
	})

	it('removes any missing properties for the category of topological spaces', () => {
		const Top = categories_dictionary.Top
		const TopDetailed = add_details(Top)
		expect(TopDetailed.unknown_properties).toHaveLength(0)
	})
})

describe('category_deduction_system', () => {
	for (const category of categories) {
		it(`should have no redundancy for the properties of: ${category.name}`, () => {
			const has_redundancy = category_deduction_system.check_redundancy(
				new Set(category.properties),
			)
			expect(has_redundancy).toBe(false)
		})
	}
})
