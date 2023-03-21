<script lang="ts">
	interface Gig {
		id: number;
		created_at: string;
		show_time: string;
		title?: string;
		venue: string;
		city: string;
		event_url: string;
		banner: string;
		note?: string;
	}
	// export let nextGig: { [index: string]: any } = {};
	export let nextGig: Gig;
</script>

<div class="mx-auto flex flex-col items-center justify-center pb-28 pt-10 lg:pb-52 lg:pt-28">
	<h3
		class="pb-6 text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-12 lg:text-3xl"
	>
		next gig
	</h3>

	<div class="w-[270px] lg:w-[426px]">
		{#if Object.keys(nextGig).length}
			<div
				class="card-shadow hover:card-shadow-elev hover:scale-105 flex flex-col items-center rounded bg-neutral-50 transition"
			>
				<div
					class="h-48 w-full"
					style={`background:url(${nextGig.banner}) center; background-size:cover;`}
				/>
				<a
					href={nextGig.event_url}
					target="_blank"
					rel="noreferrer"
					class="block w-full p-4 lg:pl-8"
				>
					<div class="pl-2 py-0 text-sm lg:text-base lg:py-2">
						{nextGig.show_time}
					</div>
					{#if nextGig.title}
						<div class="normal-case text-sm lg:text-base py-4 pl-2">
							{nextGig.title}
						</div>
					{/if}
					<div class="uppercase pl-2 py-1 text-xs lg:text-sm lg:py-4 text-gray-800">
						{nextGig.city}
					</div>
					<div class="uppercase pb-4 pl-2 text-xs lg:text-sm lg:pt-1 lg:pb-4 text-gray-800">
						{nextGig.venue}
					</div>
				</a>
			</div>
		{:else}
			<div class="card-shadow text-center rounded-lg bg-neutral-50 ">
				<div class="py-12 uppercase tracking-widest text-sm lg:text-base">tba</div>
			</div>
		{/if}
	</div>
</div>
