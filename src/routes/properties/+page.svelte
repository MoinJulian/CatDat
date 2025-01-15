<script lang="ts">
	import { properties } from '$lib/dictionaries/properties'
	import { get_property_url } from '$lib/transforms'
</script>

<h2>Properties</h2>

<p>The following properties of categories are available.</p>

<ul>
	{#each properties as property}
		<li>
			{property.prefix}
			<a href={get_property_url(property)}>
				{property.name}
			</a>
		</li>
	{/each}
</ul>
