<script lang="ts">
	import { goto } from '$app/navigation'

	import CategoryList from '$lib/components/CategoryList.svelte'
	import { encode_property_ID } from '$lib/properties/properties.utils'
	import { is_valid_property, type PropertyID } from '$lib/properties/propertyIDs'
	import { separator } from '$lib/categories/search.js'
	import Warning from '$lib/components/Warning.svelte'
	import PropertiesInput from '$lib/components/PropertiesInput.svelte'
	import { concatenate_info } from '$lib/commons/utils.js'

	let { data } = $props()

	let selected_properties = $state<PropertyID[]>(data.properties ?? [])
	let selected_non_properties = $state<PropertyID[]>(data.non_properties ?? [])

	function request_search_results() {
		const properties_query = selected_properties
			.filter(is_valid_property)
			.map(encode_property_ID)
			.join(separator)

		const non_properties_query = selected_non_properties
			.filter(is_valid_property)
			.map(encode_property_ID)
			.join(separator)

		const url = new URL('/search', window.location.origin)

		if (properties_query) {
			url.searchParams.set('properties', properties_query)
		}

		if (non_properties_query) {
			url.searchParams.set('non_properties', non_properties_query)
		}

		goto(url, { invalidateAll: true })
	}

	const sample_search_url =
		'/search?properties=finitely_complete--pointed&non_properties=complete'
</script>

<svelte:head>
	<title>Search for categories</title>
</svelte:head>

<h2>Search for categories</h2>

<p class="hint">
	On this page, you can search for categories that satisfy a specific set of properties
	while simultaneously not satisfying another set of properties. For example, you can
	<a href={sample_search_url} target="_blank">look</a> for categories that are finitely complete
	and pointed but not complete.
</p>

<div class="form">
	<PropertiesInput
		title="Looking for categories with these properties:"
		bind:selected_properties
		aria_label="Properties"
	/>

	<PropertiesInput
		title="... and <i>not</i> with these properties:"
		bind:selected_properties={selected_non_properties}
		aria_label="Non-properties"
	/>

	<button type="button" class="button" onclick={request_search_results}>Search</button>
</div>

{#if data.contradiction}
	<Warning>
		The properties and non-properties contradict each other according to the
		<a href="/implications">implications</a>. There cannot be any search results.
	</Warning>
{/if}

{#if data.is_search}
	<section>
		<h2>Results</h2>

		<p class="hint">
			These categories satisfy the properties ({concatenate_info(data.properties)})
			resp. non-properties ({concatenate_info(data.non_properties)}).
		</p>

		<CategoryList items={data.found_categories ?? []} />
	</section>
{/if}

{#if data.is_dual_search}
	<section>
		<h2>Results for dual search</h2>

		<p class="hint">
			These categories satisfy the dual properties ({concatenate_info(
				data.dualized_properties,
			)}) resp. non-properties ({concatenate_info(data.dualized_non_properties)}).
		</p>

		<CategoryList items={data.found_dualized_categories ?? []} />
	</section>
{/if}

<style>
	.form {
		margin-bottom: 2rem;
	}
</style>
