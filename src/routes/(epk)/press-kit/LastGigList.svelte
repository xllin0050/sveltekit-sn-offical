<script lang="ts">
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';
	let gigs: { [index: string]: any }[] = [];
	onMount(async () => {
		gigs = await pb.collection('sngigs').getFullList({ sort: '-gigdate' });
	});
</script>

<ul class="gigs-list flex flex-col items-center">
	{#each gigs.slice(0, 3) as gig}
		<li class="my-3 w-full text-xs sm:w-1/2 sm:text-sm">
			<span>
				{gig.gigdate.slice(0, 10)}
			</span>
			<span class="uppercase">
				{gig.giglocation}
			</span>
			<span class="uppercase">
				{gig.gigtitle}
			</span>
		</li>
	{/each}
</ul>

<style>
	.gigs-list li {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
