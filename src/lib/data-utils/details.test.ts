import { get_detailed_category } from './details'

describe('get_detailed_category', () => {
	const FinAb = get_detailed_category('FinAb')

	it('should include id, name, and notation', () => {
		expect(FinAb.id).toBe('FinAb')
		expect(FinAb.name).toBe('category of finite abelian groups')
		expect(FinAb.notation).toBe('$\\mathbf{FinAb}$')
	})

	it('should include information about objects and morphisms', () => {
		expect(FinAb.objects).toContain('groups')
		expect(FinAb.morphisms).toContain('homomorphism')
	})

	it('should include tags', () => {
		expect(FinAb.tags).toContain('basic')
		expect(FinAb.tags).toContain('algebra')
	})

	it('should include related categories', () => {
		expect(FinAb.related_categories).toContainEqual({
			id: 'Ab',
			name: 'category of abelian groups',
			notation: '$\\mathbf{Ab}$',
		})
	})

	it('should include properties', () => {
		expect(FinAb.properties).toContainEqual({
			id: 'essentially small',
			prefix: 'is',
			reason: expect.any(String),
		})
	})

	it('should include non-properties', () => {
		expect(FinAb.non_properties).toContainEqual({
			id: 'generator',
			prefix: 'has a',
			reason: expect.any(String),
		})
	})

	it('should include deduced properties', () => {
		expect(FinAb.deduced_properties).toContainEqual({
			id: 'finitely complete',
			prefix: 'is',
			reason: expect.any(String),
		})
	})

	it('should include deduced non-properties', () => {
		expect(FinAb.deduced_non_properties).toContainEqual({
			id: 'distributive',
			prefix: 'is',
			reason: expect.any(String),
		})
	})

	it('should include information about monos, epis, and isos', () => {
		expect(FinAb.monomorphisms).toEqual({
			description: expect.stringContaining('injective'),
			reason: expect.any(String),
		})

		expect(FinAb.epimorphisms).toEqual({
			description: expect.stringContaining('surjective'),
			reason: expect.any(String),
		})

		expect(FinAb.isomorphisms).toEqual({
			description: expect.stringContaining('bijective'),
			reason: expect.any(String),
		})
	})
})
