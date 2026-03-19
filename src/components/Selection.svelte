<script lang="ts">
	import ChipGroup from './ChipGroup.svelte'
	import Chip from './Chip.svelte'
	import { debounce } from '$lib/client/utils'

	type Props = {
		title?: string
		allowed_items: readonly string[]
		selected_items: string[]
		section_label: string
		item_label: string
		max?: number
	}

	let {
		title,
		allowed_items,
		selected_items = $bindable(),
		section_label,
		item_label,
		max = Infinity,
	}: Props = $props()

	let item: string = $state('')

	let is_valid = $derived(
		item.length === 0 ||
			(allowed_items.includes(item) &&
				!selected_items.includes(item) &&
				selected_items.length < max),
	)

	function remove_item(item: string) {
		selected_items = selected_items.filter((_item) => _item !== item)
	}

	function handle_input() {
		if (!item.length) return
		if (is_valid) {
			selected_items.push(item)
			item = ''
		}
	}

	const debounced_handle_input = debounce(handle_input, 500)
</script>

<section aria-label={section_label}>
	{#if title}
		<p>{@html title}</p>
	{/if}

	<div class="input-wrapper">
		<input
			aria-label={item_label}
			aria-invalid={!is_valid}
			type="text"
			bind:value={item}
			list="list-{item_label}"
			oninput={debounced_handle_input}
		/>
	</div>

	<ChipGroup>
		{#each selected_items as selected_item}
			<Chip handle_click={() => remove_item(selected_item)}>
				{selected_item}
			</Chip>
		{/each}
	</ChipGroup>
</section>

<datalist id="list-{item_label}">
	{#each allowed_items as item}
		<option value={item}>{item}</option>
	{/each}
</datalist>

<style>
	section {
		margin-block: 1.5rem;
	}

	.input-wrapper {
		margin-bottom: 1rem;

		input {
			width: 100%;
		}

		@media (min-width: 600px) {
			max-width: 28rem;
		}
	}
</style>
