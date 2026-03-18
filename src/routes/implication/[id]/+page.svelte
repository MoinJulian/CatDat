<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import { get_property_url } from '$lib/commons/property.url.js'

	let { data } = $props()
</script>

<MetaData title="Implication Details" />

<h2>Implication Details</h2>

<p>
	<strong>Assumptions:</strong>

	{#each data.implication.assumptions as property, index}
		<a href={get_property_url(property)}>{property}</a
		>{#if index < data.implication.assumptions.length - 1}
			,&nbsp;
		{/if}
	{/each}
</p>

<p>
	<strong>Conclusions:</strong>
	{#each data.implication.conclusions as property, index}
		<a href={get_property_url(property)}>{property}</a
		>{#if index < data.implication.conclusions.length - 1}
			,&nbsp;
		{/if}
	{/each}
</p>

{#if data.implication.is_equivalence}
	<p>This is an equivalence.</p>
{/if}

<p>
	<strong>Proof:</strong>
	{@html data.implication.reason}
</p>

<button class="button" onclick={() => window.history.back()}>Go back</button>
