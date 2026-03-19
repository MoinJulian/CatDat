<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import { pluralize } from '$lib/client/utils'

	let { data } = $props()
</script>

<MetaData
	title="List of categories tagged with '{data.tag}'"
	description="Categories tagged with '{data.tag}'"
/>

<h2>List of categories tagged with '{data.tag}'</h2>

<CategoryList
	categories={data.categories}
	description={pluralize(data.categories.length, {
		one: 'Found {count} category',
		other: 'Found {count} categories',
	})}
/>
