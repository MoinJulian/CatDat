<script lang="ts">
	import type { Implication } from '$lib/types'

	type Props = {
		implication: Implication
	}

	let { implication }: Props = $props()
</script>

{@html implication.assumptions.join(' &and; ')}

{#if implication.equivalent}
	&hArr;
{:else}
	&rArr;
{/if}

{@html implication.conclusions.join(' &and; ')}
