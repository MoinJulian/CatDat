<script lang="ts">
	import MetaData from '$components/MetaData.svelte'
</script>

<MetaData />

<h2>A comprehensive database of categories and their properties</h2>

<p>
	<i>CatDat</i> provides a growing collection of
	<a class="accent" href="/categories">categories</a>, each with detailed descriptions,
	properties, and non-properties. It leverages a powerful deduction system based on a
	list of <a class="accent" href="/implications">implications</a> between
	<a class="accent" href="/properties">properties</a>, which allows for automatic
	deduction of properties and non-properties from more basic ones.
</p>

<p>
	Additionally, you can <a class="accent" href="/search">search</a> for categories with
	specific properties or non-properties, and also
	<a class="accent" href="/compare">compare</a> several categories to see how their properties
	align or differ.
</p>

<p>
	This community-driven project is <a
		class="accent"
		href="https://github.com/ScriptRaccoon/catdat"
		target="_blank"
	>
		open-source
	</a>
	and welcomes <a class="accent" href="/contribute">contributions</a>
	to fill in <a class="accent" href="/missing">missing data</a>
	or observe new combinations of properties.
</p>

<p>
	Note that this project is still in its early stages. Breaking changes are likely, and
	the structure of the application and the database may change without notice.
</p>

<p class="hint">
	If you are not familiar with category theory, it may be helpful to first consult the
	Wikipedia article on <a
		class="accent"
		href="https://en.wikipedia.org/wiki/Category_theory"
		target="_blank">category theory</a
	>.
</p>

<style>
	h2 {
		margin-bottom: 2rem;
	}
</style>
