<script>
	import CategoryList from '$components/CategoryList.svelte'
	import MetaData from '$components/MetaData.svelte'

	const { data } = $props()
</script>

<MetaData
	title="Missing data in CatDat"
	description="Missing properties, missing special morphisms, and more."
/>

<h2>Missing data</h2>

<p>
	This page lists some missing data in the database. Please help us fill in the gaps by
	<a href="/contribute">contributing</a> to this project.
</p>

<h3>Categories with unknown properties</h3>

<CategoryList
	categories={data.categories_with_unknown_properties}
	description="There are {data.categories_with_unknown_properties
		.length} categories that have some unknown
	properties."
/>

<p class="hint">
	In total, there are {data.total_number_unknown_properties} unknown (category, property)-pairs.
</p>

<h3>Categories with properties without recorded reason</h3>

<CategoryList
	categories={data.categories_with_unreasoned_properties}
	description="There are {data.categories_with_unreasoned_properties
		.length} categories with properties that have no reason."
/>

<h3>Categories with non-properties without recorded reason</h3>

<CategoryList
	categories={data.categories_with_unreasoned_non_properties}
	description="There are {data.categories_with_unreasoned_non_properties
		.length} categories with non_properties that have no reason."
/>

<h3>Categories with unknown special morphisms</h3>

<CategoryList
	categories={data.categories_with_missing_morphisms}
	description="There are {data.categories_with_missing_morphisms
		.length} categories whose iso-, epi-, or monomorphisms are unknown."
/>
