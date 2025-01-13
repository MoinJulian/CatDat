<script lang="ts">
	import { categories_list } from '$lib/lists'
</script>

<ul>
	{#each categories_list as category (category.id)}
		<li>
			<a href="/category/{category.id}">{category.name}</a>
		</li>
	{/each}
</ul>
