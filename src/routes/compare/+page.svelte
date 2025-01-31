<script>
	import { goto } from '$app/navigation'
	import { categories } from '$lib/categories/categories'
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'

	const category_names = categories.map((category) => category.name)

	const selected_category_names = $state(['', ''])

	const max_categories = 10

	function compare_categories() {
		const chosen_categories = selected_category_names
			.map((name) => categories.find((category) => category.name === name))
			.filter((category) => category !== undefined)

		if (chosen_categories.length === 0 || chosen_categories.length > max_categories)
			return

		const path = chosen_categories.map((category) => category.id).join('/')

		goto(`/compare/${path}`)
	}

	function add_name() {
		if (selected_category_names.length === max_categories) return
		selected_category_names.push('')
	}

	function remove_name() {
		if (selected_category_names.length <= 1) return
		selected_category_names.pop()
	}
</script>

<svelte:head>
	<title>Choose categories for comparison</title>
</svelte:head>

<h2>Choose categories for comparison</h2>

{#each selected_category_names as name, i}
	<div class="input-group">
		<label for="name_{i + 1}">Category {i + 1}</label>
		<input
			id="name_{i + 1}"
			type="text"
			list="category-list"
			bind:value={selected_category_names[i]}
			required
			aria-invalid={name.length > 0 && !category_names.includes(name)}
		/>
	</div>
{/each}

<datalist id="category-list">
	{#each categories as category}
		<option value={category.name}>{category.name}</option>
	{/each}
</datalist>

<div class="controls">
	<button
		class="button"
		disabled={selected_category_names.length === max_categories}
		aria-label="Add another category"
		onclick={add_name}
	>
		<Fa icon={faPlus} />
	</button>
	<button
		class="button"
		aria-label="Remove last category"
		onclick={remove_name}
		disabled={selected_category_names.length <= 1}
	>
		<Fa icon={faMinus} />
	</button>
</div>

<button class="button" onclick={compare_categories}>Compare</button>

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

	.controls {
		margin-bottom: 2rem;
	}
</style>
