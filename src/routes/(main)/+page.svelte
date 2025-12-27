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

<section class="py-8">
	<header class="max-w-hero mx-auto">
		<WebsiteTitle />
		<nav class="hidden pt-4 md:flex md:flex-col">
			<ul>
				{#each linkList as link}
					<li
						class="my-2 p-2 text-sm font-light uppercase transition-all duration-300 hover:-skew-x-12 md:text-xl"
					>
						<a href={link.path}>{link.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>
</section>
<section class="pb-8">
	<HeroPhoto />
</section>

<section class="max-w-container mx-auto">
	{#await getNextGig() then nextGig}
		<NextGigCard nextGig={nextGig ?? {}} />
	{/await}
	{#if albums && albums.length}
		<AlbumListColumn {albums} />
	{/if}
</section>

<style>
</style>
