<script>
	import { goto } from '$app/navigation'
	import { categories } from '$lib/categories/categories'

	const category_names = categories.map((category) => category.name)

	let name_1 = $state('')
	let name_2 = $state('')

	function compare() {
		const category_1 = categories.find((category) => category.name === name_1)
		const category_2 = categories.find((category) => category.name === name_2)

		if (category_1 && category_2) {
			goto(`/compare/${category_1.id}/${category_2.id}`)
		}
	}
</script>

<svelte:head>
	<title>Compare two categories</title>
</svelte:head>

<h2>Compare two categories</h2>

<div class="input-group">
	<label for="name_1">First category</label>
	<input
		id="name_1"
		type="text"
		list="category-list"
		bind:value={name_1}
		required
		aria-invalid={name_1.length > 0 && !category_names.includes(name_1)}
	/>
</div>

<div class="input-group">
	<label for="name_2">Second category</label>
	<input
		id="name_2"
		type="text"
		list="category-list"
		bind:value={name_2}
		required
		aria-invalid={name_2.length > 0 && !category_names.includes(name_2)}
	/>
</div>

<datalist id="category-list">
	{#each categories as category}
		<option value={category.name}>{category.name}</option>
	{/each}
</datalist>

<button class="button" onclick={compare}>Compare</button>

<style>
	label {
		display: block;
		margin-bottom: 0.25rem;
	}

	input {
		width: min(100%, 25rem);
	}

	.input-group {
		margin-block: 1.5rem;
	}
</style>
