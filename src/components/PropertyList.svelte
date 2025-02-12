<script lang="ts">
	import type { PropertyID } from '$lib/database/properties.data'
	import type { Prefix } from '$lib/database/prefix.data'
	import { negate_prefix } from '$lib/data-utils/data.helpers'
	import { get_property_url } from '$lib/commons/property.url'
	import Tooltip from './Tooltip.svelte'

	type Props = {
		properties: {
			id: PropertyID
			prefix: Prefix
			reason?: string
		}[]
		description?: string
		with_prefix?: boolean
		negated?: boolean
	}

	let { properties, description, with_prefix = true, negated = false }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if properties.length}
	<ul>
		{#each properties as { id, prefix, reason }}
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
