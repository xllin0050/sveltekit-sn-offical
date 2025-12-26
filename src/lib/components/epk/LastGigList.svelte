<script lang="ts">
	import { getAllGigs } from '$lib/services/gigs';
	import { onMount } from 'svelte';
	let gigs: { [index: string]: any }[] = $state([]);
	onMount(async () => {
		gigs = await getAllGigs();
	});
</script>

<ul class="gigs-list flex flex-col items-center px-2">
	{#each gigs.slice(0, 3) as gig}
		<li class="my-3 w-full text-xs sm:text-sm md:w-2/3 lg:w-1/2">
			<span>
				{gig.gigdate.slice(0, 10)}
			</span>
			<span class="text-gray-600 uppercase">
				{gig.gigtitle}
			</span>
			<span class="uppercase">
				{gig.giglocation}
			</span>
		</li>
	{/each}
</ul>

<style>
	.gigs-list li {
		display: grid;
		grid-template-columns: 12ch 1fr 15ch;
	}
</style>
