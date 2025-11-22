<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1
	class="pt-8 text-center text-3xl font-medium uppercase tracking-widest text-neutral-900 sm:pt-16 lg:text-7xl lg:tracking-[.3em]"
>
	super napkin
</h1>
<nav
	class="page-links hidden max-w-(--breakpoint-lg) bg-white pt-6 md:mx-auto md:flex md:justify-center md:underline-offset-8"
>
	<a href="/">home</a>
	<a href="/about#banner" class:underline={$page.url.pathname === '/about'}>about us</a>
	<a href="/discography" class:underline={$page.url.pathname === '/discography'}>discography</a>
	<a href="/gigs" class:underline={$page.url.pathname === '/gigs'}>gigs</a>
	<a href="/videos" class:underline={$page.url.pathname === '/videos'}>videos</a>
	<a href="/photos" class:underline={$page.url.pathname === '/photos'}>photos</a>
	<a href="/products" class:underline={$page.url.pathname === '/products'}>products</a>
</nav>

<style lang="postcss">
	@reference '../../app.css';
	.page-links a {
		@apply mx-4 px-0 py-10 text-sm font-medium uppercase text-neutral-600 transition hover:text-neutral-800 lg:text-lg;
		word-spacing: -0.3em;
	}
</style>
