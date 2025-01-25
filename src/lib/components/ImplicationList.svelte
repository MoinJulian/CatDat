<script lang="ts">
	import type { Implication as ImplicationType } from '$lib/types'
	import Implication from './Implication.svelte'

	type Props = {
		items: ImplicationType[]
	}

	let { items }: Props = $props()
</script>

{#if items.length}
	<ul>
		{#each items as implication}
			<li>
				<Implication {implication} />
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}
