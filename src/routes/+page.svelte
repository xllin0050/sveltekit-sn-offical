<script lang="ts">
	// get supabase data at server side
	import type { PageData } from './$types';
	import MembersNameCircle from './MembersNameCircle.svelte';
	import NextGigCard from './NextGigCard.svelte';
	// type gig = {
	// 	id: number;
	// 	created_at: string;
	// 	show_time: string;
	// 	venue: string;
	// 	city: string;
	// 	event_url: string;
	// 	banner: string;
	// 	note: string | null;
	// };
	export let data: PageData;
	const { nextGig } = data;
</script>

<section class="max-w-screen-lg mx-auto">
	<MembersNameCircle />
	<NextGigCard {nextGig} />
</section>
