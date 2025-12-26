<script lang="ts">
	import { getNextGig } from '$lib/services/gigs';

	import albums from '$lib/data/discography';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import MemberList from '$lib/components/main/MemberList.svelte';
	import NextGigCard from './NextGigCard.svelte';

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
<section class="block w-full pt-12 text-neutral-900 lg:hidden">
	<h1
		class="text-center text-3xl tracking-widest text-inherit uppercase lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
</section>
<!-- normal title -->
<section class="block lg:flex lg:justify-center lg:pt-8 xl:pt-10">
	<div class="hidden lg:block">
		<h1 class="text-base tracking-widest uppercase lg:text-5xl lg:tracking-[.3em] xl:text-7xl">
			super napkin
		</h1>
		<nav class="page-links flex flex-col bg-white pt-8">
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
	</div>
</section>
<MemberList />

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
