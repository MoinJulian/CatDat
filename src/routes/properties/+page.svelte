<script lang="ts">
	import PropertyList from '$lib/components/PropertyList.svelte'
	import { PROPERTY_IDs } from '$lib/properties/propertyIDs'
</script>

<svelte:head>
	<title>List of Properties</title>
</svelte:head>

<h2>List of Properties</h2>

<PropertyList
	items={[...PROPERTY_IDs]}
	description="The following {PROPERTY_IDs.length} properties are available."
/>
