<script lang="ts">
	import {
		category_detail_level,
		CATEGORY_DETAIL_LEVELS,
		update_category_detail_level,
	} from '$lib/settings/detail_level.svelte'
	import { theme, THEMES, update_theme } from '$lib/settings/theme.svelte'

	$effect(() => update_theme(theme.value))
	$effect(() => update_category_detail_level(category_detail_level.value))
</script>

<h2>Settings</h2>

<section aria-label="Select a theme">
	Theme:
	{#each THEMES as option}
		<label class:selected={theme.value === option}>
			<input
				class="visually-hidden"
				type="radio"
				name="color"
				value={option}
				bind:group={theme.value}
			/>{option}
		</label>
	{/each}
</section>

<section aria-label="Select a category detail level">
	Category detail level:
	{#each Object.keys(CATEGORY_DETAIL_LEVELS) as level}
		<label class:selected={category_detail_level.value === level}>
			<input
				class="visually-hidden"
				type="radio"
				name="category-detail-level"
				value={level}
				bind:group={category_detail_level.value}
			/>{level}
		</label>
	{/each}
	<p class="hint" aria-live="polite">
		{CATEGORY_DETAIL_LEVELS[category_detail_level.value]}
	</p>
</section>

<style>
	label {
		cursor: pointer;
		margin-inline: 0.25rem;
	}

	label.selected {
		color: var(--accent-color);
	}

	label:focus-within {
		outline: 2px solid var(--outline-color);
		outline-offset: 2px;
	}

	section {
		margin-block: 1rem;
	}
</style>
