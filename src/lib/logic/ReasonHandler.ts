import type { NormalizedRule } from './DeductionSystem'

export type PropertyWithReason<P extends string, T extends string> = {
	id: T
	prefix: P
	reason: string
}

export class ReasonHandler<P extends string, T extends string> {
	constructor(
		public readonly get_prefix: (id: T) => P,
		public readonly negate_prefix: (prefix: P) => string,
	) {}

	public get_negated_prefix(id: T): string {
		const prefix = this.get_prefix(id)
		return this.negate_prefix(prefix)
	}

	private format_rule_as_reason(rule: NormalizedRule<T>): string {
		const assumption_string = Array.from(rule.assumptions)
			.map((id) => `${this.get_prefix(id)} ${id}`)
			.join(' and ')

		const conclusion_string = `${this.get_prefix(rule.conclusion)} ${rule.conclusion}`

		return `Since it ${assumption_string}, we deduce that it ${conclusion_string}.`
	}

	public create_property_with_reason_from_rule(
		rule: NormalizedRule<T>,
	): PropertyWithReason<P, T> {
		const id = rule.conclusion
		const reason = this.format_rule_as_reason(rule)
		const prefix = this.get_prefix(id)
		return { id, prefix, reason }
	}

	public create_property_with_given_reason(id: T, reason: string) {
		const prefix = this.get_prefix(id)
		return { id, prefix, reason }
	}

	public build_contradiction_proof(
		id: T,
		contradictory_id: T,
		used_rules: NormalizedRule<T>[],
	): string {
		const prelude = `Assume for a contradiction that it ${this.get_prefix(id)} ${id}.`
		const negated_prefix = this.get_negated_prefix(contradictory_id)

		const main_proof = used_rules
			.map((rule) => this.format_rule_as_reason(rule))
			.join(' ')

		const finale = `This is a contradiction since we already know that it ${negated_prefix} ${contradictory_id}.`

		return `${prelude} ${main_proof} ${finale}`
	}
}

export const default_reason_handler = new ReasonHandler<string, string>(
	() => 'is',
	() => 'is not',
)
