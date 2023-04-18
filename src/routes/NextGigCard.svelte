<script lang="ts">
	type Gig = {
		id: number;
		created_at: string;
		show_time: string;
		title?: string;
		venue: string;
		city: string;
		event_url: string;
		banner: string;
		note?: string;
	};
	export let nextGig: Gig;
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
					href={nextGig.event_url}
					target="_blank"
					rel="noreferrer"
					class="block w-full p-4 lg:pl-8"
				>
					<div class="py-0 pl-2 text-sm lg:py-2 lg:text-base">
						{nextGig.show_time}
					</div>
					{#if nextGig.title}
						<div class="py-4 pl-2 text-sm normal-case lg:text-base">
							{nextGig.title}
						</div>
					{/if}
					<div class="py-1 pl-2 text-xs uppercase text-gray-800 lg:py-4 lg:text-sm">
						{nextGig.city}
					</div>
					<div class="pb-4 pl-2 text-xs uppercase text-gray-800 lg:pt-1 lg:pb-4 lg:text-sm">
						{nextGig.venue}
					</div>
				</a>
			</div>
		{:else}
			<div class="card-shadow rounded-lg bg-neutral-50 text-center ">
				<div class="py-12 text-sm uppercase tracking-widest lg:text-base">tba</div>
			</div>
		{/if}
	</div>
</div>
