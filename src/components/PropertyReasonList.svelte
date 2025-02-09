<script lang="ts">
	import { negate_prefix } from '$lib/data-utils/data.helpers'
	import type { Property } from '$lib/database/properties.data'
	import { get_property_url } from '$lib/commons/property.url'
	import Tooltip from './Tooltip.svelte'

	type Props = {
		items: {
			property: Pick<Property, 'id' | 'prefix'>
			reason: string
		}[]
		description?: string
		with_prefix?: boolean
		negated?: boolean
	}

	let { items, description, with_prefix = true, negated = false }: Props = $props()

	// TODO: sort on server side
	let sorted_properties = $derived(
		items.toSorted((a, b) =>
			a.property.id.toLowerCase().localeCompare(b.property.id.toLowerCase()),
		),
	)
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each sorted_properties as { property, reason }}
			<li>
				{#if with_prefix}
					{negated ? negate_prefix(property.prefix) : property.prefix}
				{/if}
				<a href={get_property_url(property.id)}>
					{property.id}
				</a>

				{#if reason}
					<Tooltip>
						{@html reason}
					</Tooltip>
				{/if}
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}

<style>
	li {
		position: relative;
	}
</style>
