<script lang="ts">
	import { onMount } from 'svelte';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import still from '$lib/assets/still-banner.jpeg';

	// get supabase data at server side
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { nextGig, albums } = data;
	// let screenHeight: number;
	let y: number;
	let pageTitle: HTMLElement;
	let videoWrap: HTMLElement;
	onMount(() => {
		console.log(pageTitle, videoWrap);
	});
</script>

<section class="w-full">
	<div bind:this={videoWrap} id="video">
		<img src={still} alt="" class="filter grayscale" />
	</div>
	<h1
		bind:this={pageTitle}
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
</section>
<p class="fixed">
	{y}
</p>
<section class="max-w-screen-lg mx-auto">
	<MembersNameCircle />

	<NextGigCard {nextGig} />

	<AlbumListColumn {albums} />
</section>

<svelte:window bind:scrollY={y} />

<style lang="postcss">
	#video {
		/* width: 1920px;
		height: 1080px; */
	}
	:global(.page-links a) {
		@apply pr-6 py-10 text-sm font-medium uppercase text-neutral-600 transition hover:text-neutral-800 lg:text-lg;
		word-spacing: -0.3em;
	}
	:global(.footer-links li) {
		@apply mx-4 text-neutral-700 hover:text-neutral-900;
	}
</style>
