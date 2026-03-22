<script lang="ts">
	import { faWarning } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
</script>

<p>
	<Fa icon={faWarning} />
	The app is currently being updated. Some data may be temporarily unavailable or inconsistent.
</p>

<style>
	p {
		background-color: var(--secondary-bg-color);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}
</style>
