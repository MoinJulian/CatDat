import { group_items } from './utils'

describe('group_items', () => {
	it('should group items by id', () => {
		const items = [
			{ id: 'a', value: 1 },
			{ id: 'b', value: 2 },
			{ id: 'c', value: 3 },
		]
		const result = group_items(items)
		expect(result).toEqual({
			a: { id: 'a', value: 1 },
			b: { id: 'b', value: 2 },
			c: { id: 'c', value: 3 },
		})
	})

	it('should return an empty object for an empty array', () => {
		const items: { id: string; value: number }[] = []
		const result = group_items(items)
		expect(result).toEqual({})
	})
})
