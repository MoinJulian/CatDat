<script lang="ts">
	import CategoryList from '$components/CategoryList.svelte'

	let { data } = $props()

	let title = data.tag
		? `List of categories tagged as "${data.tag}"`
		: `List of categories`

	let description = $derived(
		data.tag
			? `The following ${data.categories.length} categories are tagged as "${data.tag}".`
			: `The following ${data.categories.length} categories are available.`,
	)
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h2>{title}</h2>

<CategoryList items={data.categories} {description} />
