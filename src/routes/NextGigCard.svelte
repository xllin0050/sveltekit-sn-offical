<script lang="ts">
	interface Gig  {
		id: number;
		created_at: string;
		show_time: string;
		venue: string;
		city: string;
		event_url: string;
		banner: string;
		note: string | null;
	};
	// export let nextGig: { [index: string]: any } = {};
	export let nextGig: Gig;
</script>

<div
	class="mx-auto flex max-w-4xl flex-col items-center justify-center py-16 pt-10 text-center lg:py-36"
>
	<h3
		class="pb-6 font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
	>
		next gig
	</h3>

	<div class="w-[320px] font-redhat uppercase lg:w-[456px]">
		{#if Object.keys(nextGig).length}
			<div
				class="card-shadow hover:card-shadow-elev flex flex-col items-center rounded-lg bg-neutral-50 p-4 text-sm transition lg:text-base"
			>
				<a href="nextGig.event_url" target="_blank" class="-ml-2">
					<div class="flex py-4">
						<span data-icon="ic:outline-dataset" class="iconify text-xl" />
						<div class="pl-2">{nextGig.show_time}</div>
					</div>
					<div class="flex py-4">
						<span data-icon="ic:outline-house" class="iconify text-xl" />
						<div class="pl-2">
							{nextGig.venue}
						</div>
					</div>
					<div class="flex py-4">
						<span class="iconify text-xl" data-icon="ic:outline-place" data-inline="false" />
						<div class="pl-2">{nextGig.city}</div>
					</div>
				</a>
			</div>
		{:else}
			<div
				class="card-shadow flex flex-col items-center rounded-lg bg-neutral-50 p-4 text-sm lg:text-base"
			>
				<div class="p-16 text-xl uppercase tracking-widest">tba</div>
			</div>
		{/if}
	</div>
</div>
