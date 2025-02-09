<!--
@component
@deprecated Use the PropertyReasonList instead
-->

<script lang="ts">
	import { negate_prefix } from '$lib/data-utils/data.helpers'
	import type { Property, PropertyID } from '$lib/database/properties.data'
	import { get_property_url } from '$lib/commons/property.url'
	// TODO: remove this serverside import

	type Props = {
		items: Pick<Property, 'id' | 'prefix'>[]
		reasons?: Partial<Record<PropertyID, string>>
		description?: string
		with_prefix?: boolean
		negated?: boolean
	}

	let {
		items,
		reasons,
		description,
		with_prefix = true,
		negated = false,
	}: Props = $props()

	// TODO: sort on server side
	let sorted_properties = $derived(
		items.toSorted((a, b) => a.id.toLowerCase().localeCompare(b.id.toLowerCase())),
	)
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each sorted_properties as property}
			<li>
				{#if with_prefix}
					{negated ? negate_prefix(property.prefix) : property.prefix}
				{/if}
				<a href={get_property_url(property.id)}>
					{property.id}
				</a>

				{#if reasons && reasons[property.id]}
					<p>{reasons[property.id]}</p>
				{/if}
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
