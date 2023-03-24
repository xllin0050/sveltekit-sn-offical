<script lang="ts">
	import { onMount } from 'svelte';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import still from '$lib/assets/still-banner.jpeg';

	// get supabase data at server side
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { nextGig, videoUrl, albums } = data;

	let _YScroll: number;
	let banner: HTMLElement;
	let videoWrap: HTMLElement;
	let pageTitle: HTMLElement;
	let YPrev = 0;
	let YAddition = 0;
	let stopAnimationFrame: any;

	// 初始高度
	let titleTop: number;
	const titleMoving = () => {
		const YScroll = Math.floor(_YScroll);
		// 原點
		if (YScroll === 0) {
			YAddition = videoWrap.offsetHeight / 2 - pageTitle.offsetHeight;
			titleTop = videoWrap.offsetHeight / 2 - pageTitle.offsetHeight;
			pageTitle.style.top = titleTop + 'px';
		}
		// 下
		if (YScroll > YPrev) {
			YPrev = YScroll;
			if (YScroll + pageTitle.offsetHeight * 2 > pageTitle.offsetTop) {
				YAddition += YScroll + pageTitle.offsetHeight * 2 - pageTitle.offsetTop;
				if (pageTitle.offsetTop < banner.offsetHeight) {
					pageTitle.style.top = YAddition + 'px';
				}
			}
		}
		// 上
		if (YScroll < YPrev) {
			YPrev = YScroll;
			if (
				YScroll < banner.offsetHeight - pageTitle.offsetHeight * 2 &&
				pageTitle.offsetTop > banner.offsetHeight / 2 - pageTitle.offsetHeight
			) {
				YAddition = YScroll;
				pageTitle.style.top = YAddition + pageTitle.offsetHeight + 'px';
			}
		}
		// 終
		if (YScroll + pageTitle.offsetHeight * 1.5 > banner.offsetHeight) {
			pageTitle.style.top = banner.offsetHeight + 'px';
		}

		stopAnimationFrame = requestAnimationFrame(titleMoving);
	};
	onMount(() => {
		titleMoving();
		return () => {
			cancelAnimationFrame(stopAnimationFrame);
		};
	});
</script>

<section bind:this={banner} class="w-full bg-white relative hidden lg:block pb-20">
	<div bind:this={videoWrap} id="video" class="bg-neutral-800">
		<video
			width="1920"
			height="1080"
			poster={still}
			autoplay
			loop
			muted
			class="mx-auto"
			preload="auto"
		>
			<source src={videoUrl.signedUrl} type="video/mp4" />
		</video>
	</div>
	<h1
		bind:this={pageTitle}
		class="absolute w-full top-1/2 -translate-y-1/2 text-white mix-blend-difference "
		style:top={titleTop + 'px'}
	>
		<div
			class="text-center text-3xl font-medium uppercase tracking-[.1em] lg:text-7xl lg:tracking-[.3em]"
			class:opacity-0={!titleTop}
		>
			super napkin
		</div>
	</h1>
</section>
<section class="block w-full pt-12 text-neutral-900 lg:hidden">
	<h1
		class="text-center text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
</section>
<nav class="page-links hidden bg-white md:mx-auto pt-12 md:flex max-w-screen-lg md:justify-center">
	<a href="/">home</a>
	<a href="/about">about us</a>
	<a href="/discography">discography</a>
	<a href="/gigs">gigs</a>
	<a href="/videos">videos</a>
	<a href="/photos">photos</a>
	<a href="/products">products</a>
</nav>

<section class="max-w-screen-lg mx-auto">
	<MembersNameCircle />

	<NextGigCard {nextGig} />

	<AlbumListColumn {albums} />
</section>

<svelte:window bind:scrollY={_YScroll} />

<style lang="postcss">
	#video {
		filter: contrast(70%) grayscale(98%);
	}
	:global(.page-links a) {
		@apply pr-6 py-10 text-sm font-medium uppercase text-neutral-600 transition hover:text-neutral-800 lg:text-lg;
		word-spacing: -0.3em;
	}
	:global(.footer-links li) {
		@apply mx-4 text-neutral-700 hover:text-neutral-900;
	}
</style>
