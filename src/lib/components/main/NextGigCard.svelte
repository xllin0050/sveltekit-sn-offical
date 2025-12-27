<script lang="ts">
	interface Props {
		nextGig: any;
	}

	let { nextGig }: Props = $props();
</script>

<div class="mx-auto flex flex-col items-center justify-center">
	<h3 class="font-medium tracking-widest text-neutral-800 uppercase">next gig</h3>

	<div class="w-[270px] lg:w-[426px]">
		{#if Object.keys(nextGig).length}
			<div
				class="card-shadow hover:card-shadow-elev flex flex-col items-center rounded-sm bg-neutral-50 transition-all duration-300 hover:scale-105"
			>
				<a href={nextGig.gigurl} target="_blank" rel="noreferrer" class="block w-full">
					<div class="text-sm">
						{nextGig.gigdate.slice(0, 10)}
					</div>
					{#if nextGig.gigtitle}
						<div class="text-sm normal-case">{nextGig.gigtitle}</div>
					{/if}
					<div class="text-xs text-gray-800 uppercase">
						{nextGig.giglocation}
					</div>
					<div class="text-xs text-gray-800 uppercase">
						{nextGig.gigvenue}
					</div>
				</a>
			</div>
		{:else}
			<div class="card-shadow rounded-lg bg-neutral-50 text-center">
				<div class="text-sm tracking-widest uppercase">tba</div>
			</div>
		{/if}
	</div>
</div>
