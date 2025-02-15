<script lang="ts">
	import type { MorphismImplication } from '$lib/database/morphisms/morphism-implications.data'
	import type { MorphismType } from '$lib/database/morphisms/morphism-types.data'
	import MorphismCard from './MorphismCard.svelte'
	import MorphismImplicationItem from './MorphismImplicationItem.svelte'

	type Props = {
		data: {
			morphisms: MorphismType[]
			morphism_implications: MorphismImplication[]
		}
	}

	let { data }: Props = $props()
</script>

<svelte:head>
	<title>Morphisms</title>
</svelte:head>

<!-- TODO: create multiple pages for these portions of data -->

<section>
	<h2>Types of morphisms</h2>

	<p class="hint">
		The following {data.morphisms.length} types of morphisms are defined in the database.
	</p>

	<div class="cards">
		{#each data.morphisms as morphism}
			<MorphismCard {morphism} />
		{/each}
	</div>
</section>

<section>
	<h2>Implications of morphisms</h2>
	<p class="hint">
		Of course, these implications may be dualized in the usual way. The brackets
		[property] mean that the ambient category needs to satisfy this property.
	</p>
	<ul>
		{#each data.morphism_implications as implication}
			<li>
				<MorphismImplicationItem {implication} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.cards {
		margin-top: 2rem;
		display: grid;
		gap: 2rem;
	}

	section {
		margin-bottom: 2rem;
	}
</style>
