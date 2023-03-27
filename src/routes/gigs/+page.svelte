<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './InfoModal.svelte';
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { gigs } = data;
	let isOpenModal: boolean = false;
	let gigData: any;
	const openModal = (data: any) => {
		gigData = data;
		isOpenModal = true;
	};
</script>

<PageHead />
<h2 class="pt-8 text-center text-xl font-medium uppercase text-neutral-500 sm:hidden">Gigs</h2>

<section class="mx-auto min-h-screen max-w-xs pb-16 lg:max-w-4xl lg:pt-6">
	<ul class="pt-10 md:pt-0">
		{#each gigs as gig}
			<li
				class="mb-14 flex flex-col items-center rounded-md bg-neutral-50 pt-4 pb-8 text-xs uppercase shadow-md transition-shadow hover:shadow-lg lg:mb-8 lg:flex-row lg:py-8 lg:pl-4"
				class:ring-2={gig.coming}
				class:ring-neutral-600={gig.coming}
			>
				<div class="text-sm lg:pr-4">{gig.show_time}</div>
				{#if gig.title}
					<div class="mt-4 mb-6 lg:m-0">
						{gig.title}
					</div>
				{/if}
				<div
					class="my-2 flex items-center justify-end font-normal text-neutral-800 lg:my-0 lg:grow "
				>
					{gig.venue}
				</div>
				<div class="my-1 flex items-center font-normal text-neutral-800 lg:my-0 lg:w-24 lg:pl-3">
					{gig.city}
				</div>
				<div class="flex w-auto pt-6 lg:w-[160px] lg:pt-0">
					<div
						class="mx-2 cursor-pointer rounded-md p-1 px-3 ring-1 ring-neutral-400 transition-colors hover:font-medium hover:ring-neutral-600 "
						on:click={() => {
							openModal(gig);
						}}
						aria-hidden="true"
					>
						info
					</div>
					{#if gig.coming}
						<div
							class="rounded-md p-1 px-3 font-medium underline underline-offset-4 hover:text-red-400 "
						>
							<a href={gig.event_url} target="_blank">ticket</a>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
{#if isOpenModal}
	<Modal
		{gigData}
		on:closeModal={() => {
			isOpenModal = false;
		}}
	/>
{/if}
