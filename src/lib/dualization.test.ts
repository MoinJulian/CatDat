import { get_dual_implication, get_new_dual_implication } from './dualization'
import type { Implication } from './types'

describe('get_dual_implication', () => {
	it('should return null when an assumption cannot be dualized', () => {
		const implication: Implication = {
			assumptions: ['algebraic'],
			conclusions: ['cocomplete'],
		}
		expect(get_dual_implication(implication)).toBeNull()
	})

	it('should return null when a conclusion cannot be dualized', () => {
		const implication: Implication = {
			assumptions: ['algebraic'],
			conclusions: ['locally finitely presentable'],
		}
		expect(get_dual_implication(implication)).toBeNull()
	})

	it('should return the dual implication if available', () => {
		const implication: Implication = {
			assumptions: ['binary products', 'equalizers'],
			conclusions: ['pullbacks'],
		}
		expect(get_dual_implication(implication)).toEqual({
			assumptions: ['binary coproducts', 'coequalizers'],
			conclusions: ['pushouts'],
		})
	})

	it('should respect equivalences', () => {
		const implication: Implication = {
			equivalent: true,
			assumptions: ['finite coproducts', 'coequalizers'],
			conclusions: ['finitely cocomplete'],
		}

		expect(get_dual_implication(implication)).toEqual({
			equivalent: true,
			assumptions: ['finite products', 'equalizers'],
			conclusions: ['finitely complete'],
		})
	})

	it('should preserve self-dual implications', () => {
		const implication: Implication = {
			assumptions: ['finite'],
			conclusions: ['small'],
		}
		expect(get_dual_implication(implication)).toEqual(implication)
	})
})

describe('get_new_dual_implication', () => {
	it('should return the dual implication if available', () => {
		const implication: Implication = {
			assumptions: ['binary products', 'equalizers'],
			conclusions: ['pullbacks'],
		}
		expect(get_new_dual_implication(implication)).toEqual({
			assumptions: ['binary coproducts', 'coequalizers'],
			conclusions: ['pushouts'],
		})
	})

	it('should return null for a self-dual implication', () => {
		const implication: Implication = {
			assumptions: ['abelian'],
			conclusions: ['pointed'],
		}
		expect(get_new_dual_implication(implication)).toBe(null)
	})

	it('should not preserve self-dual implications', () => {
		const implication: Implication = {
			assumptions: ['finite'],
			conclusions: ['small'],
		}
		expect(get_new_dual_implication(implication)).toBe(null)
	})

	it('should ignore the order when checking for a new implication', () => {
		const implication: Implication = {
			assumptions: ['abelian'],
			conclusions: ['finitely complete', 'finitely cocomplete'],
		}
		expect(get_new_dual_implication(implication)).toBe(null)
	})
})
