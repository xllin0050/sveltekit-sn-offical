<script lang="ts">
	import '../app.css';
	import Scrollbar from 'smooth-scrollbar';
	import { onMount } from 'svelte';
	import { scrollHeight } from '$lib/stores';
	import fbIcon from '$lib/assets/icons/facebook-rounded-border-svgrepo-com.svg';
	import igIcon from '$lib/assets/icons/instagram-svgrepo-com.svg';
	import ytIcon from '$lib/assets/icons/youtube-svgrepo-com.svg';
	import mailIcon from '$lib/assets/icons/mail-svgrepo-com.svg';
	let scrollArea!: HTMLElement;

	onMount(() => {
		const scroll = Scrollbar.init(scrollArea, { damping: 0.04 });
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
	<nav class="page-links hidden bg-white md:mx-auto pt-6 md:flex max-w-screen-lg md:justify-center">
		<a href="/">home</a>
		<a href="/about">about us</a>
		<a href="/discography">discography</a>
		<a href="/gigs">gigs</a>
		<a href="/videos">videos</a>
		<a href="/photos">photos</a>
		<a href="/products">products</a>
	</nav>
	<main class="w-full min-h-screen">
		<slot />
	</main>
	<footer class="max-w-screen-lg mx-auto py-12 font-medium uppercase">
		<ul class="footer-links flex items-center justify-center pt-12">
			<li>
				<a
					href="https://www.facebook.com/SuperNapkin/"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={fbIcon} alt="" />
				</a>
			</li>
			<li>
				<a
					href="https://www.youtube.com/channel/UCla5IDvJMbZdiiEuhJyh-1Q"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={ytIcon} alt="" />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/super_napkin/"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={igIcon} alt="" />
				</a>
			</li>
			<li>
				<a
					href="mailto:supernapkinsogood@gmail.com"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={mailIcon} alt="" />
				</a>
			</li>
		</ul>
		<div class="flex items-center justify-center pt-8 text-sm text-neutral-700">
			<span class="px-1">&copy;</span>
			{new Date().getFullYear()} Super Napkin
		</div>
	</footer>
</div>

<style lang="postcss">
	#layout {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.page-links a {
		@apply pr-6 py-10 text-sm font-medium uppercase text-neutral-600 transition hover:text-neutral-800 lg:text-lg;
		word-spacing: -0.3em;
	}
	.footer-links li {
		@apply mx-4 text-neutral-700 hover:text-neutral-900;
	}
</style>
