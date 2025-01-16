import { DeductionSystem } from './DeductionSystem'

describe('Deduction systems', () => {
	describe('get_deductions', () => {
		const deductionSystem = new DeductionSystem<string>([
			{ assumptions: ['a'], conclusions: ['c'] },
			{ assumptions: ['c', 'd'], conclusions: ['e', 'f'], equivalent: true },
		])

		it("should deduce 'a,c' from 'a'", () => {
			expect(deductionSystem.get_deductions(new Set(['a']))).toEqual(
				new Set(['a', 'c']),
			)
		})

		it("should deduce 'a,b,c' from 'a,b'", () => {
			expect(deductionSystem.get_deductions(new Set(['a', 'b']))).toEqual(
				new Set(['a', 'b', 'c']),
			)
		})

		it("should deduce 'a,b,c,d,e,f' from 'a,b,d'", () => {
			expect(deductionSystem.get_deductions(new Set(['a', 'b', 'd']))).toEqual(
				new Set(['a', 'b', 'c', 'd', 'e', 'f']),
			)
		})

		it("should deduce 'c' and 'd' from 'e,f'", () => {
			expect(deductionSystem.get_deductions(new Set(['e', 'f']))).toContain('c')
			expect(deductionSystem.get_deductions(new Set(['e', 'f']))).toContain('d')
		})

		it('should deduce nothing from the empty set', () => {
			expect(deductionSystem.get_deductions(new Set())).toEqual(new Set())
		})

		it("should deduce just 'b' from 'b'", () => {
			expect(deductionSystem.get_deductions(new Set(['b']))).toEqual(new Set(['b']))
		})
	})
})
