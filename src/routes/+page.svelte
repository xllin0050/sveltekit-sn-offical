<script lang="ts">
	// import albums from '$lib/data/discography';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	import AlbumListSlipCard from './AlbumListSlipCard.svelte';

	// get supabase data at server side
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { nextGig, albums } = data;
</script>

<section class="max-w-screen-lg mx-auto">
	<MembersNameCircle />

	<NextGigCard {nextGig} />

	<AlbumListSlipCard {albums} />
</section>
