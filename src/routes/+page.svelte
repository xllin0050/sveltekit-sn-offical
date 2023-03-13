<script lang="ts">
	import albums from '$lib/data/discography';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	import AlbumListSlider from './AlbumListSlider.svelte';

	// get supabase data at server side
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { nextGig } = data;
</script>

<section class="max-w-screen-lg flex flex-col mx-auto">
	<div class="order-first">
		<MembersNameCircle />
	</div>
	<div class="order-3 lg:order-2">
		<AlbumListSlider {albums} />
	</div>
	<div class="order-2 lg:order-3">
		<NextGigCard {nextGig} />
	</div>
</section>
