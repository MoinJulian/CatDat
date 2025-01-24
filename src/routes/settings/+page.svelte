<script lang="ts" module>
	import {
		CATEGORY_DETAIL_LEVELS,
		DEFAULT_CATEGORY_DETAIL_LEVEL,
		is_valid_category_detail_level,
		THEMES,
		type CategoryDetailLevel,
		type Theme,
	} from './config'

	function get_saved_category_detail_level(): CategoryDetailLevel {
		if (!browser) return DEFAULT_CATEGORY_DETAIL_LEVEL
		const saved_category_detail_level = localStorage.getItem('category_detail_level')

		return is_valid_category_detail_level(saved_category_detail_level)
			? saved_category_detail_level
			: DEFAULT_CATEGORY_DETAIL_LEVEL
	}

	let category_detail_level = $state<CategoryDetailLevel>(
		get_saved_category_detail_level(),
	)

	export function get_category_detail_level() {
		return category_detail_level
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment'

	function get_saved_theme(): Theme {
		if (!browser) return 'dark'

		const saved_theme = document.body.getAttribute('data-theme')

		if (saved_theme === 'light' || saved_theme === 'dark') {
			return saved_theme
		}

		return 'dark'
	}

	let theme = $state<Theme>(get_saved_theme())

	function update_theme(new_theme: Theme) {
		if (!browser) return
		document.body.setAttribute('data-theme', new_theme)
		localStorage.setItem('theme', new_theme)
	}
	function update_category_detail_level(
		new_category_detail_level: CategoryDetailLevel,
	) {
		if (!browser) return
		localStorage.setItem('category_detail_level', new_category_detail_level)
	}

	$effect(() => update_theme(theme))
	$effect(() => update_category_detail_level(category_detail_level))
</script>

<h2>Settings</h2>

<section aria-label="Select a theme">
	Theme:
	{#each THEMES as option}
		<label class:selected={theme === option}>
			<input
				class="visually-hidden"
				type="radio"
				name="color"
				value={option}
				bind:group={theme}
			/>{option}
		</label>
	{/each}
</section>

<section aria-label="Select a category detail level">
	Category detail level:
	{#each Object.keys(CATEGORY_DETAIL_LEVELS) as level}
		<label class:selected={category_detail_level === level}>
			<input
				class="visually-hidden"
				type="radio"
				name="category-detail-level"
				value={level}
				bind:group={category_detail_level}
			/>{level}
		</label>
	{/each}
	<p class="hint" aria-live="polite">
		{CATEGORY_DETAIL_LEVELS[category_detail_level]}
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
