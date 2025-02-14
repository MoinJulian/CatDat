<script lang="ts">
	import type { Implication } from '$lib/database/categories/implications.data'
	import type { PropertyID } from '$lib/database/categories/properties.data'
	import ImplicationItem from './ImplicationItem.svelte'

	type Props = {
		implications: Implication[]
		description?: string
		highlighted_property?: PropertyID
	}

	let { implications, description, highlighted_property }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

{#if implications.length}
	<ul>
		{#each implications as implication}
			<li>
				<ImplicationItem {implication} {highlighted_property} />
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
