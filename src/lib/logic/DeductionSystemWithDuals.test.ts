import type { DetailedProperty } from './DeductionSystem'
import { DeductionSystemWithDuals } from './DeductionSystemWithDuals'

describe('all rules', () => {
	const dual_config: Record<string, string> = {
		'c': 'c^op',
		'd': 'd^op',
		'e': 'e^op',
		'x': 'x',
		'y': 'y',
		'self-dual': 'self-dual',
	}

	const deductionSystem = new DeductionSystemWithDuals<string, string>(
		// prettier-ignore
		new Set(['a','b','c','d','e','f','x','y','self-dual','c^op','d^op','e^op']),
		[
			{ id: 'ac', assumptions: ['a'], conclusions: ['c'], reason: 'trivial' },
			{ id: 'cde', assumptions: ['c', 'd'], conclusions: ['e'], reason: 'trivial' },
			{
				id: 'xy',
				equivalent: true,
				assumptions: ['x'],
				conclusions: ['y'],
				reason: 'trivial',
			},
		],
		(property) => dual_config[property] ?? null,
	)

	it('should have all given and all dualized rules', () => {
		expect(deductionSystem.rules).toContainEqual({
			id: 'ac',
			assumptions: ['a'],
			conclusions: ['c'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			id: 'cde',
			assumptions: ['c', 'd'],
			conclusions: ['e'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			id: 'xy',
			equivalent: true,
			assumptions: ['x'],
			conclusions: ['y'],
			reason: 'trivial',
		})

		expect(deductionSystem.rules).toContainEqual({
			id: 'cde_dual',
			assumptions: ['c^op', 'd^op'],
			conclusions: ['e^op'],
			reason: '[dualized] trivial',
		})
	})

	it('should not contain rules that cannot be dualized', () => {
		expect(deductionSystem.rules).not.toContainEqual({
			id: expect.any(String),
			assumptions: ['a^op'],
			conclusions: ['c^op'],
			reason: 'trivial',
		})
	})

	it('should contain all self-dual rules', () => {
		expect(deductionSystem.rules).toContainEqual({
			id: 'c_selfdual',
			assumptions: ['self-dual', 'c'],
			conclusions: ['c^op'],
			reason: 'trivial by self-duality',
		})

		expect(deductionSystem.rules).not.toContainEqual({
			id: expect.any(String),
			assumptions: ['self-dual', 'x'],
			conclusions: ['x'],
			reason: 'trivial',
		})
	})
})

describe('get_detailed_deductions', () => {
	const deductionSystem = new DeductionSystemWithDuals<string, string>(
		new Set(['a', 'b']),
		[{ id: '', assumptions: ['a'], conclusions: ['b'], reason: '' }],
		() => null,
	)

	it('should take the prefix "is" as default', () => {
		const assumptions: DetailedProperty<string, string>[] = [
			{ id: 'a', prefix: 'has', reason: 'clear' },
		]
		const detailed_deductions: DetailedProperty<string, string>[] =
			deductionSystem.get_detailed_deductions(assumptions)

		expect(detailed_deductions).toContainEqual({
			id: 'b',
			prefix: 'is',
			reason: expect.any(String),
		})
	})
})
