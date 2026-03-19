<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import ImplicationList from '$components/ImplicationList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import { pluralize } from '$lib/client/utils'
	import { get_property_url } from '$lib/commons/property.url'

	let { data } = $props()

	let {
		property,
		related_properties,
		relevant_implications,
		categories_with_this_property,
		categories_without_this_property,
		unknown_categories,
	} = $derived(data)
</script>

<MetaData title={property.id} description="Discover this property of categories" />

<h2>{property.id}</h2>

<p>
	{@html property.description}

	{#if property.invariant_under_equivalences === false}
		Warning: This property is not invariant under equivalences.
	{/if}
</p>

{#if property.dual_property_id || related_properties.length || property.nlab_link}
	<ul>
		{#if property.dual_property_id}
			<li>
				<strong>Dual property:</strong>
				<a href={get_property_url(property.dual_property_id)}
					>{property.dual_property_id}</a
				>
				{#if property.dual_property_id === property.id}
					(self-dual)
				{/if}
			</li>
		{/if}

		{#if related_properties.length}
			<li>
				<strong>Related properties:</strong>
				{#each related_properties as related_property, i}
					<a href={get_property_url(related_property)}>
						{related_property}
					</a>{#if i < related_properties.length - 1}
						,&nbsp;
					{/if}
				{/each}
			</li>
		{/if}

		{#if property.nlab_link}
			<li>
				<a href={property.nlab_link} target="_blank">nLab Link</a>
			</li>
		{/if}
	</ul>
{/if}

<h3>Relevant implications</h3>

<ImplicationList
	implications={relevant_implications}
	highlighted_property={property.id}
/>

<h3>Examples</h3>

<CategoryList
	categories={categories_with_this_property}
	description={pluralize(categories_with_this_property.length, {
		one: 'There is {count} category with this property.',
		other: 'There are {count} categories with this property.',
	})}
/>

<h3>Counterexamples</h3>

<CategoryList
	categories={categories_without_this_property}
	description={pluralize(categories_without_this_property.length, {
		one: 'There is {count} category without this property.',
		other: 'There are {count} categories without this property.',
	})}
/>

<h3>Unknown</h3>

<CategoryList
	categories={unknown_categories}
	description={pluralize(unknown_categories.length, {
		one: 'There is {count} category for which the database has no information on whether it satisfies this property.',
		other: 'There are {count} categories for which the database has no information on whether they satisfy this property.',
	})}
/>
