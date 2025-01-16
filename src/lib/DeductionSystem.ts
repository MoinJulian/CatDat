type Rule<T> = {
	equivalent?: boolean
	assumptions: T[]
	conclusions: T[]
}

type NormalizedRule<T> = {
	assumptions: Set<T>
	conclusion: T
}

export class DeductionSystem<T> {
	private rules: Rule<T>[]
	private normalized_rules: NormalizedRule<T>[] = []

	constructor(rules: Rule<T>[]) {
		this.rules = rules
		this.compute_normalized_rules()
	}

	private compute_normalized_rules() {
		this.normalized_rules = []

		for (const rule of this.rules) {
			const { conclusions, assumptions, equivalent } = rule
			for (const conclusion of conclusions) {
				this.normalized_rules.push({
					assumptions: new Set(assumptions),
					conclusion,
				})
			}

			if (equivalent) {
				for (const assumption of assumptions) {
					this.normalized_rules.push({
						assumptions: new Set(conclusions),
						conclusion: assumption,
					})
				}
			}
		}
	}

	get_deductions(assumptions: Set<T>): Set<T> {
		let done = false
		const deductions = new Set(assumptions)

		while (!done) {
			done = true
			for (const rule of this.normalized_rules) {
				const found =
					rule.assumptions.isSubsetOf(deductions) &&
					!deductions.has(rule.conclusion)
				if (found) {
					done = false
					deductions.add(rule.conclusion)
				}
			}
		}

		return deductions
	}
}
