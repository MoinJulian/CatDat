<script lang="ts">
	import { negate_prefix } from '$lib/data-utils/data.helpers'
	import type { PropertyID } from '$lib/database/properties.data'
	import { get_property_url } from '$lib/commons/property.url'
	import Tooltip from './Tooltip.svelte'
	import type { Prefix } from '$lib/database/prefix.data'

	type Props = {
		items: {
			id: PropertyID
			prefix: Prefix
			reason: string
		}[]
		description?: string
		with_prefix?: boolean
		negated?: boolean
	}

	let { items, description, with_prefix = true, negated = false }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if items.length}
	<ul>
		{#each items as { id, prefix, reason }}
			<li>
				{#if with_prefix}
					{negated ? negate_prefix(prefix) : prefix}
				{/if}
				<a href={get_property_url(id)}>
					{id}
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
