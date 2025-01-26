<script lang="ts">
	type Props = {
		tags: string[]
	}

	let { tags }: Props = $props()
</script>

<section class="tags" aria-label="tags">
	{#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}
</section>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		padding: 0.2rem 0.75rem;
		border-radius: 100vw;
		border: 1px solid var(--secondary-outline-color);
		font-size: 0.75rem;
	}
</style>
