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

<header class="max-w-hero mx-auto">
	<WebsiteTitle />
</header>
<nav
	class="page-links max-w-container hidden bg-white pt-6 md:mx-auto md:flex md:justify-center md:underline-offset-8"
>
	{#each navLinks as link}
		<a
			href={link.href}
			class=" text-neutral-600 uppercase transition hover:text-neutral-800 lg:text-lg"
			class:underline={page.url.pathname === link.activePath}
		>
			{link.text}
		</a>
	{/each}
</nav>
