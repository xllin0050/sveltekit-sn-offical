<script lang="ts">
	import { onMount } from 'svelte';
	import { userLanguage } from '$lib/stores';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import still from '$lib/assets/still-banner.jpeg';
	import video from '$lib/assets/video-banner.mp4';
	// get supabase data at server side
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { nextGig, albums } = data;

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
		titleTop = videoWrap.offsetHeight / 2 - pageTitle.offsetHeight;
		titleMoving();
		const browser = window.navigator.language;
		const zh = ['zh-tw', 'zh-cn', 'zh-hk'];
		if (!zh.includes(browser.toLowerCase())) {
			userLanguage.set('en');
		}

		return () => {
			cancelAnimationFrame(stopAnimationFrame);
		};
	});
</script>

<section bind:this={banner} class="relative hidden w-full bg-white pb-20 lg:block">
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
			<source src={video} type="video/mp4" />
		</video>
	</div>
	<h1
		bind:this={pageTitle}
		class="absolute top-1/2 w-full -translate-y-1/2 text-white mix-blend-difference"
		style:top={titleTop + 'px'}
	>
		<div
			class="lg:tracking-[.3em] text-center text-3xl font-medium uppercase tracking-[.1em] lg:text-7xl"
			class:opacity-0={!titleTop}
		>
			super napkin
		</div>
	</h1>
</section>
<section class="block w-full pt-12 text-neutral-900 lg:hidden">
	<h1
		class="lg:ml-[.3em] lg:tracking-[.3em] text-center text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:text-7xl"
	>
		super napkin
	</h1>
</section>
<nav class="page-links hidden max-w-screen-lg bg-white pt-12 md:mx-auto md:flex md:justify-center">
	<a href="/">home</a>
	<a href="/about#banner">about us</a>
	<a href="/discography">discography</a>
	<a href="/gigs">gigs</a>
	<a href="/videos">videos</a>
	<a href="/photos">photos</a>
	<a href="/products">products</a>
</nav>

<section class="mx-auto max-w-screen-lg">
	<MembersNameCircle />

	<NextGigCard {nextGig} />

	<AlbumListColumn {albums} />
</section>

<svelte:window bind:scrollY={_YScroll} />

<style>
	#video {
		filter: contrast(70%) grayscale(98%);
	}
</style>
