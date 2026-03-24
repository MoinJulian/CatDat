<script lang="ts">
	import type { CategoryShort } from '$lib/commons/types'

	type Props = {
		categories: CategoryShort[]
	}

	let { categories }: Props = $props()
</script>

{#if categories.length}
	<ul>
		{#each categories as item}
			<li>
				<a href="/category/{item.id}">
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>&mdash;</p>
{/if}

<style>
	ul {
		margin-block: 1rem;
	}
</style>
