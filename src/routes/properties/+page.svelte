<script lang="ts">
	import PropertyList from '$lib/components/PropertyList.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>List of Properties</title>
</svelte:head>

<h2>List of Properties</h2>

<PropertyList
	items={data.propertyIDs}
	description="The following {data.propertyIDs.length} properties are available."
/>
