<script lang="ts">
	// get supabase data at server side
	import type { PageData } from './$types';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	import AlbumListColumn from './AlbumListColumn.svelte';
	import albums from '$lib/data/discography';

	export let data: PageData | { [index: string]: any } = {};

	const { nextGig } = data;

</script>

<section class="max-w-screen-lg mx-auto">
	<MembersNameCircle />
	<NextGigCard {nextGig} />
	<AlbumListColumn {albums} />
</section>
