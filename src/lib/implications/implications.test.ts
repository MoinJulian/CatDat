import { implications } from './implications'

describe('implications', () => {
	it('should contain basic implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['finite products'],
		}
		expect(implications).toContainEqual(implication)
	})

	it('should contain not deductions of the implications', () => {
		const implication = {
			assumptions: ['cartesian closed'],
			conclusions: ['terminal object'],
		}
		expect(implications).not.toContainEqual(implication)
	})

	it('should not contain basic self-dual implications', () => {
		const implication = {
			assumptions: ['self-dual', 'binary products'],
			conclusions: ['binary coproducts'],
		}
		expect(implications).not.toContainEqual(implication)
	})
})
