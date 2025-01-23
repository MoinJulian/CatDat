<script lang="ts">
	import { browser } from '$app/environment'
	import { THEMES, type Theme } from './config'

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

	$effect(() => update_theme(theme))
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
</style>
