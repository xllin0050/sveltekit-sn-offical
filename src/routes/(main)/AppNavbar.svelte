<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import menuIcon from '$lib/assets/icons/menu-04-svgrepo-com.svg';
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	let isMenuOpen = $state(false);
	const menuSwitch = () => {
		isMenuOpen = !isMenuOpen;
	};
	afterNavigate(() => {
		isMenuOpen = false;
	});

	const reduced = typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const t = { duration: reduced ? 0 : 150 };
</script>

{#if !isMenuOpen}
	<nav class="absolute right-4 top-4 block md:hidden z-50">
		<div class="w-8 opacity-70 hover:opacity-100" onclick={menuSwitch} aria-hidden="true">
			<img src={menuIcon} alt="" />
		</div>
	</nav>
{/if}
{#if isMenuOpen}
	<section class="fixed top-0 z-10 flex min-h-screen w-full bg-neutral-50" transition:fade={t}>
		<ul class="pt-10 font-medium uppercase tracking-wider">
			<li>
				<a href="/">home</a>
			</li>
			<li>
				<a href="/about">about us</a>
			</li>
			<li>
				<a href="/discography">discography</a>
			</li>
			<li>
				<a href="/gigs">gigs</a>
			</li>
			<li>
				<a href="/videos">videos</a>
			</li>
			<li>
				<a href="/photos">photos</a>
			</li>
			<li>
				<a href="/products">products</a>
			</li>
		</ul>
		<div class="relative grow">
			<figure class="absolute right-6 top-6 w-8" onclick={menuSwitch} aria-hidden="true">
				<img src={closeIcon} alt="" />
			</figure>
		</div>
	</section>
{/if}

<style>
	ul {
		word-spacing: -0.3em;
	}
	ul li {
		width: 100dvw;
		padding: 0.5rem 1em;
		margin: 0.5rem 0;
	}
	ul li:hover {
		text-decoration-line: underline;
	}
	ul li a {
		display: block;
	}
</style>
