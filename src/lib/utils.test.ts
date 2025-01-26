import { group_items, type NonEmptyArray } from './utils'

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

describe('non-empty array type', () => {
	it('should accept an array with more than one element', () => {
		const arr: NonEmptyArray<number> = [1, 2]
		expect(arr).toEqual([1, 2])
	})

	it('should not accept an empty array', () => {
		// @ts-expect-error - this is the purpose of the type
		const arr: NonEmptyArray<number> = []
		expect(arr).toEqual([])
	})
})
