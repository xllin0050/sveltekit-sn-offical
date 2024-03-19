<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { userLanguage } from '$lib/stores';
	import { onMount } from 'svelte';

	import still from '$lib/assets/still-banner.jpeg';
	import albums from '$lib/data/discography';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';

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

	async function getNextGig() {
		const today = new Date().toJSON().slice(0, 10);
		const gigDates = await pb
			.collection('sngigs')
			.getFullList({ sort: 'gigdate', filter: `gigdate>"${today}"` });

		return Object.assign({}, gigDates.shift());
	}

	onMount(() => {
		titleTop = videoWrap.offsetHeight / 2 - pageTitle.offsetHeight;
		titleMoving();
		const browser = window.navigator.language;
		const zh = ['zh-tw', 'zh-cn', 'zh-hk'];
		if (!zh.includes(browser.toLowerCase())) {
			userLanguage.set('en');
		}

		return () => cancelAnimationFrame(stopAnimationFrame);
	});
</script>

<section bind:this={banner} class="relative hidden w-full bg-white pb-20 lg:block">
	<div bind:this={videoWrap} id="video" class="bg-black">
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
			<source
				src={`${
					import.meta.env.VITE_POCKETBASE
				}/api/files/snassets/evu9t9ejyt0oryg/video_banner_FJtDjqk85B.mp4`}
				type="video/mp4"
			/>
		</video>
	</div>
	<h1
		bind:this={pageTitle}
		class="absolute top-1/2 w-full -translate-y-1/2 text-white mix-blend-difference"
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
	{#await getNextGig() then nextGig}
		<NextGigCard {nextGig} />
	{/await}
	{#if albums && albums.length}
		<AlbumListColumn {albums} />
	{/if}
</section>

<svelte:window bind:scrollY={_YScroll} />

<style>
	#video {
		filter: contrast(70%) grayscale(98%);
	}
</style>
