<script lang="ts">
	// get supabase data at server side
	import type { PageData } from './$types';
	import MembersNameCircle from './MembersNameCircle.svelte';
	export let data: PageData;
	const { nextGig } = data;
</script>

<section class="max-w-screen-lg mx-auto">
	<MembersNameCircle />
</section>
