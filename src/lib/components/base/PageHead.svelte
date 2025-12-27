<script lang="ts">
	import { page } from '$app/state';
	import WebsiteTitle from './WebsiteTitle.svelte';
	const navLinks = [
		{ href: '/', text: 'home', activePath: '/' },
		{ href: '/about#banner', text: 'about us', activePath: '/about' },
		{ href: '/discography', text: 'discography', activePath: '/discography' },
		{ href: '/gigs', text: 'gigs', activePath: '/gigs' },
		{ href: '/videos', text: 'videos', activePath: '/videos' },
		{ href: '/photos', text: 'photos', activePath: '/photos' },
		{ href: '/products', text: 'products', activePath: '/products' }
	];
</script>

<header class="max-w-hero mx-auto pt-8">
	<WebsiteTitle />
</header>
<nav
	class="page-links max-w-hero hidden bg-white py-8 md:mx-auto md:flex md:justify-between md:underline-offset-8"
>
	{#each navLinks as link}
		<a
			href={link.href}
			class="mx-2 font-light uppercase transition-all duration-300 hover:-skew-x-12 lg:text-lg"
			class:underline={page.url.pathname === link.activePath}
		>
			{link.text}
		</a>
	{/each}
</nav>
