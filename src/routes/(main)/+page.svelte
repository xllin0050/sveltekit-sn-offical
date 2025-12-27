<script lang="ts">
	import { getNextGig } from '$lib/services/gigs';
	import WebsiteTitle from '$lib/components/base/WebsiteTitle.svelte';
	import albums from '$lib/data/discography';
	import AlbumListColumn from '../../lib/components/main/AlbumListColumn.svelte';
	import HeroPhoto from '$lib/components/main/HeroPhoto.svelte';
	import NextGigCard from '../../lib/components/main/NextGigCard.svelte';

	const linkList = [
		{ path: '/about#banner', text: 'about us' },
		{ path: '/discography', text: 'discography' },
		{ path: '/gigs', text: 'gigs' },
		{ path: '/videos', text: 'videos' },
		{ path: '/photos', text: 'photos' },
		{ path: '/products', text: 'products' }
	];
</script>

<!-- mobile title -->
<section class="block w-full text-neutral-900 lg:hidden">
	<h1
		class="text-center text-3xl tracking-widest text-inherit uppercase lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
</section>
<!-- normal title -->
<section class="">
	<header class="mx-auto hidden max-w-(--breakpoint-md) lg:block">
		<!-- <h1 class="flex justify-between text-base uppercase lg:text-5xl xl:text-7xl">
			{#each 'super napkin'.split('') as char}
				<span>{char === ' ' ? '\u00A0' : char}</span>
			{/each}
		</h1> -->
		<WebsiteTitle />
		<nav class="page-links flex flex-col bg-white">
			<ul>
				{#each linkList as link}
					<li
						class="my-2 p-2 text-sm font-light text-neutral-600 uppercase transition hover:text-neutral-800 lg:text-xl"
					>
						<a href={link.path}>{link.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>
</section>
<HeroPhoto />

<section class="mx-auto max-w-(--breakpoint-lg)">
	{#await getNextGig() then nextGig}
		<NextGigCard nextGig={nextGig ?? {}} />
	{/await}
	{#if albums && albums.length}
		<AlbumListColumn {albums} />
	{/if}
</section>

<style>
</style>
