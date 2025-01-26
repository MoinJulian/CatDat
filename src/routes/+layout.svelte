<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import Footer from '$lib/components/Footer.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import Nav from '$lib/components/Nav.svelte'
	import './app.css'

	afterNavigate(() => {
		// unfortunately this always throws an error, but it renders the formulas
		// @ts-ignore
		MathJax.Hub.Queue(['Typeset', MathJax.Hub])
	})
</script>

<svelte:head>
	<title>CatDat</title>
	<meta
		name="description"
		content="A searchable database of categories and their properties"
	/>

	<meta property="og:title" content="CatDat" />
	<meta
		property="og:description"
		content="A searchable database of categories and their properties"
	/>
	<meta property="og:url" content="https://catdat.netlify.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="CatDat" />

	<script>
		window.MathJax = {
			tex: {
				inlineMath: [['$', '$']],
			},
			svg: {
				fontCache: 'global',
			},
		}
	</script>
	<script
		type="text/javascript"
		id="MathJax-script"
		async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
	>
	</script>
</svelte:head>

<div class="container">
	<Heading />
	<Nav />

	<main>
		<slot></slot>
	</main>

	<Footer />
</div>

<style>
	main {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		margin-block: 0.5rem 1.5rem;
	}

	.container {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		padding-inline: 0.5rem;
	}
</style>
