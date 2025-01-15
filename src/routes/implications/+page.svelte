<script>
	import { implications } from '$lib/dictionaries/implications'
</script>

<h2>Implications</h2>

<p>The following implications and equivalences are available.</p>

<ul>
	{#each implications as implication}
		<li>
			{@html implication.assumptions.join(' &and; ')}
			{#if implication.equivalent}
				&hArr;
			{:else}
				&rArr;
			{/if}
			{@html implication.conclusions.join(' &and; ')}
		</li>
	{/each}
</ul>

<p>
	Deductions from these implications are automatically added to each category when
	appropriate. For example, the category of sets is registered as complete, and then the
	property of having a terminal object is automatically added as well.
</p>
