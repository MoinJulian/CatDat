<script lang="ts">
	const { data } = $props()
	const { property, categories_with_this_property } = data
</script>

<h2>{property.name}</h2>

<p><strong>Definition:</strong> {property.description}</p>

Each of the following categories {property.prefix}
{property.name}:

<ul>
	{#each categories_with_this_property as category}
		<li>
			<a href="/category/{category.id}">
				{category.name}
			</a>
		</li>
	{/each}
</ul>
