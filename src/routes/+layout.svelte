<script lang="ts">
	import '../app.css';
	import Scrollbar from 'smooth-scrollbar';
	import { onMount } from 'svelte';
	import { scrollHeight } from '$lib/stores';
	let scrollArea!: HTMLElement;

	onMount(() => {
		const scroll = Scrollbar.init(scrollArea, { alwaysShowTracks: true });
		scroll.addListener((status) => {
			scrollHeight.set(status.offset.y);
		});
	});
</script>

<div bind:this={scrollArea} id="layout" class="font-red-hat">
	<h1
		class="max-w-screen-lg mx-auto pt-8 sm:pt-16 text-neutral-900 text-center text-3xl font-medium uppercase tracking-[.1em] lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
	<nav class="hidden bg-white md:mx-auto pt-6 md:flex max-w-screen-lg md:justify-center">
		<a href="/" class="page-link">home</a>
		<a href="/about" class="page-link">about us</a>
		<a href="/discography" class="page-link">discography</a>
		<a href="/gigs" class="page-link">gigs</a>
		<a href="/videos" class="page-link">videos</a>
		<a href="/photos" class="page-link">photos</a>
		<a href="/products" class="page-link">products</a>
	</nav>
	<main class="w-full h-auto min-h-[90vh]">
		<slot />
	</main>
	<footer class="max-w-screen-lg mx-auto py-12 font-medium uppercase">
		<ul class="flex items-center justify-center">
			<li class="footer-link">
				<a href="https://www.facebook.com/SuperNapkin/" target="_blank" rel="noreferrer">fb</a>
			</li>
			<li class="footer-link">
				<a
					href="https://www.youtube.com/channel/UCla5IDvJMbZdiiEuhJyh-1Q"
					target="_blank"
					rel="noreferrer">yt</a
				>
			</li>
			<li class="footer-link">
				<a href="https://www.instagram.com/super_napkin/" target="_blank" rel="noreferrer">ig</a>
			</li>
		</ul>
		<div class="flex items-center justify-center pt-4 text-sm sm:text-base text-neutral-700">
			<span class="iconify text-lg" data-icon="uil:copyright" />{new Date().getFullYear()} Super Napkin
		</div>
	</footer>
</div>

<style>
	#layout {
		width: 100%;
		height: 100vh;
		overflow: auto;
	}
	.page-link {
		@apply pr-6 py-10 text-sm font-medium uppercase text-neutral-600 transition hover:text-neutral-800 lg:text-lg;
		word-spacing: -0.3em;
	}
	.footer-link {
		@apply text-neutral-700 hover:text-neutral-900;
	}
</style>
