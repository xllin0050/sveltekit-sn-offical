<script lang="ts">
	interface Props {
		nextGig: any;
	}

	let { nextGig }: Props = $props();
</script>

<div class="max-w-hero mx-auto flex flex-col items-center justify-center">
	<h3 class="py-2 text-xl uppercase">next gig</h3>

	<div class="w-[clamp(300px,90vw,768px)]">
		{#if Object.keys(nextGig).length}
			<div
				class="hover:ring-primary hover:ring-offset-bg flex flex-col items-center bg-black px-2 py-8 text-white transition-all duration-300 hover:ring-2 hover:ring-offset-2 md:px-0"
			>
				<a href={nextGig.gigurl} target="_blank" rel="noreferrer" class="block">
					<div>
						{nextGig.gigdate.slice(0, 10)}
					</div>
					{#if nextGig.gigtitle}
						<div class="normal-case">{nextGig.gigtitle}</div>
					{/if}
					<div class="text-right uppercase">
						{nextGig.giglocation}
					</div>
					<div class="text-right uppercase">
						{nextGig.gigvenue}
					</div>
				</a>
			</div>
		{:else}
			<div class="flex flex-col items-center bg-black py-8 text-white">
				<div class="uppercase">tba</div>
			</div>
		{/if}
	</div>
</div>
