<script lang="ts">
	interface Props {
		nextGig: any;
	}

	let { nextGig }: Props = $props();
</script>

<div class="mx-auto flex flex-col items-center justify-center pb-20 pt-10 lg:pb-52 lg:pt-36">
	<h3
		class="pb-6 text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-12 lg:text-3xl"
	>
		next gig
	</h3>

	<div class="w-[270px] lg:w-[426px]">
		{#if Object.keys(nextGig).length}
			<div
				class="card-shadow hover:card-shadow-elev flex flex-col items-center rounded bg-neutral-50 transition-all duration-300 hover:scale-105"
			>
				<a
					href={nextGig.gigurl}
					target="_blank"
					rel="noreferrer"
					class="block w-full p-4 pl-8 lg:pl-16"
				>
					<div class="py-0 text-sm lg:py-2 lg:text-base">
						{nextGig.gigdate.slice(0, 10)}
					</div>
					{#if nextGig.gigtitle}
						<div class="py-4 text-sm normal-case lg:text-base">
							{nextGig.gigtitle}
						</div>
					{/if}
					<div class="pb-2 text-xs uppercase text-gray-800 lg:py-4 lg:text-sm">
						{nextGig.giglocation}
					</div>
					<div class="pb-4 text-xs uppercase text-gray-800 lg:pb-4 lg:pt-1 lg:text-sm">
						{nextGig.gigvenue}
					</div>
				</a>
			</div>
		{:else}
			<div class="card-shadow rounded-lg bg-neutral-50 text-center">
				<div class="py-12 text-sm uppercase tracking-widest lg:text-base">tba</div>
			</div>
		{/if}
	</div>
</div>
