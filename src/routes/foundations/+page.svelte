<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
	import { sanitizeHTML } from '$lib/client/sanitize_HTML.js'
	let { data } = $props()
</script>

<MetaData
	title="Foundations"
	description="How to make sense of categories in set theory"
/>

<span use:sanitizeHTML={[data.content]}></span>

<style>
	:global(img) {
		width: min(100%, 30rem);
		margin-inline: auto;
		border-radius: 1rem;
	}
</style>
