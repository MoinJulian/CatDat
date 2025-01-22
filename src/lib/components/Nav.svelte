<script lang="ts">
	import { page } from '$app/state'

	type Link = {
		href: string
		text: string
		nested?: string
	}

	const links: Link[] = [
		{ href: '/', text: 'Home' },
		{ href: '/categories', text: 'Categories', nested: '/category' },
		{ href: '/properties', text: 'Properties', nested: '/property' },
		{ href: '/implications', text: 'Implications' },
		{ href: '/search', text: 'Search' },
	]
</script>

<nav>
	<ul>
		{#each links as { nested, href, text }}
			<li
				class:current={page.url.pathname === href ||
					(nested && page.url.pathname.startsWith(nested))}
			>
				<a {href}>{text}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-bottom: 1.5rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.25rem 1rem;
	}

	li {
		margin: 0;
	}

	li.current a {
		color: var(--heading-color);
		text-decoration-color: var(--heading-color);
	}
</style>
