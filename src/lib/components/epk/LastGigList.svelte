<script lang="ts">
	import type { Gig } from '$lib/domains/gigs/gig.types';

	interface Props {
		gigs: Gig[];
	}

	let { gigs }: Props = $props();
	const recentGigs = $derived(gigs.slice(0, 3));
</script>

<ul class="gigs-list flex flex-col items-center px-2">
	{#if recentGigs.length}
		{#each recentGigs as gig}
			<li class="my-3 w-full text-xs sm:text-sm md:w-2/3 lg:w-1/2">
				<span>
					{gig.gigdate.slice(0, 10)}
			</span>
			<span class="uppercase text-gray-600">
				{gig.gigtitle}
			</span>
			<span class="uppercase">
				{gig.giglocation}
			</span>
		</li>
		{/each}
	{:else}
		<li class="py-4 text-center text-xs uppercase text-neutral-500">No gigs scheduled.</li>
	{/if}
</ul>

<style>
	.gigs-list li {
		display: grid;
		grid-template-columns: 12ch 1fr 15ch;
	}
</style>
