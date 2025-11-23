<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { userLanguage } from '$lib/stores';
	import { onMount } from 'svelte';

	import albums from '$lib/data/discography';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';

	async function getNextGig() {
		const today = new Date().toJSON().slice(0, 10);
		const gigDates = await pb
			.collection('sngigs')
			.getFullList({ sort: 'gigdate', filter: `gigdate>"${today}"` });

		return Object.assign({}, gigDates.shift());
	}

	onMount(() => {
		const browser = window.navigator.language;
		const zh = ['zh-tw', 'zh-cn', 'zh-hk'];
		if (!zh.includes(browser.toLowerCase())) {
			userLanguage.set('en');
		}
	});
</script>

<!-- mobile title -->
<!-- <section class="block w-full pt-12 text-neutral-900 lg:hidden">
	<h1
		class="text-center text-3xl font-medium uppercase tracking-widest text-inherit lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
</section> -->
<!-- normal title -->
<!-- <section class="block lg:flex lg:justify-center lg:pt-8 xl:pt-10">
	<div class="hidden lg:block">
		<h1
			class="text-base font-medium uppercase tracking-widest lg:text-5xl lg:tracking-[.3em] xl:text-7xl"
		>
			super napkin
		</h1>
		<nav class="page-links flex flex-col bg-white pt-8">
			<a href="/about#banner">about us</a>
			<a href="/discography">discography</a>
			<a href="/gigs">gigs</a>
			<a href="/videos">videos</a>
			<a href="/photos">photos</a>
			<a href="/products">products</a>
		</nav>
	</div>
	<div>
		<MembersNameCircle />
	</div>
</section> -->

<!-- <section class="mx-auto max-w-(--breakpoint-lg)">
	{#await getNextGig() then nextGig}
		<NextGigCard {nextGig} />
	{/await}
	{#if albums && albums.length}
		<AlbumListColumn {albums} />
	{/if}
</section> -->

<style lang="postcss">
	@reference '../../app.css';
	nav a {
		@apply my-2 p-2 text-sm font-medium text-neutral-600 uppercase transition hover:text-neutral-800 lg:text-xl;
		letter-spacing: 0.1em;
	}
</style>
