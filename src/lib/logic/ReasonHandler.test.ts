import { ReasonHandler } from './ReasonHandler'
import type { NormalizedRule } from './DeductionSystem'

type P = 'is' | 'has'
type T = 'a' | 'b' | 'c' | 'd'

const handler = new ReasonHandler<P, T>(
	(x: T) => (x === 'b' || x === 'd' ? 'has' : 'is'),
	(prefix: P) => (prefix === 'is' ? 'is not' : 'does not have'),
)

describe('get_negated_prefix', () => {
	it('should negate the given prefix', () => {
		expect(handler.get_negated_prefix('a')).toBe('is not')
		expect(handler.get_negated_prefix('b')).toBe('does not have')
	})
})

describe('create_property_with_reason_from_rule', () => {
	it('should create a property with a readable reason', () => {
		const rule: NormalizedRule<T> = {
			id: 'rule1',
			assumptions: new Set(['a', 'b']),
			conclusion: 'c',
		}
		const result = handler.create_property_with_reason_from_rule(rule)
		expect(result).toEqual({
			id: 'c',
			prefix: 'is',
			reason: 'Since it is a and has b, we deduce that it is c.',
		})
	})
})

describe('create_property_with_given_reason', () => {
	it('should do what it claims to do', () => {
		const result = handler.create_property_with_given_reason('d', 'some reason')
		expect(result).toEqual({
			id: 'd',
			prefix: 'has',
			reason: 'some reason',
		})
	})
})

describe('build_contradiction_proof', () => {
	it('should return a readable proof by contradiction', () => {
		const usedRules: NormalizedRule<T>[] = [
			{
				id: 'rule1',
				assumptions: new Set(['a', 'c']),
				conclusion: 'b',
			},
			{
				id: 'rule2',
				assumptions: new Set(['b', 'c']),
				conclusion: 'd',
			},
		]
		const result = handler.build_contradiction_proof('a', 'd', usedRules)
		expect(result).toBe(
			'Assume for a contradiction that it is a. Since it is a and is c, we deduce that it has b. Since it has b and is c, we deduce that it has d. This is a contradiction since we already know that it does not have d.',
		)
	})
})
