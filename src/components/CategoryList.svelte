<script lang="ts">
	type Props = {
		categories: { id: string; name: string }[]
		description?: string
	}

	let { description, categories }: Props = $props()
</script>

{#if description}
	<p class="hint">
		{description}
	</p>
{/if}

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
