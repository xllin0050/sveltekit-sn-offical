<script lang="ts">
	import { fade } from 'svelte/transition';
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './InfoModal.svelte';
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any };

	const { gigs } = data;

	let isOpenModal: boolean = false;

	let gigData: any;

	const today = new Date();

	gigs.forEach((gig: { [index: string]: any }) => {
		const gigDate = new Date(gig.gigdate);
		gig.coming = gigDate >= today;
	});

	const openModal = (data: any) => {
		gigData = data;
		isOpenModal = true;
	};
</script>

<PageHead />
<h2 class="pt-8 text-center text-sm font-medium uppercase text-neutral-500 sm:hidden">Gigs</h2>

<section class="mx-auto min-h-screen max-w-xs pb-16 lg:max-w-4xl lg:pt-6">
	<ul class="pt-10 md:pt-0">
		{#each gigs as gig}
			<li
				class="mb-14 flex flex-col items-center rounded-md bg-neutral-50 pb-8 pt-4 text-xs uppercase shadow-md transition-shadow hover:shadow-lg lg:mb-8 lg:flex-row lg:px-4 lg:py-8"
				class:ring-2={gig.coming}
				class:ring-neutral-600={gig.coming}
				class:hidden={!gig.announce}
			>
				<div class="text-sm lg:pr-4">{gig.gigdate.slice(0, 10)}</div>
				{#if gig.gigtitle}
					<div class="pt-4 sm:pt-0">
						{gig.gigtitle}
					</div>
				{/if}

				<div class="flex w-auto grow justify-end pt-6 lg:w-[160px] lg:pt-0">
					{#if gig.coming}
						<div
							class="rounded-md p-1 px-3 font-medium underline underline-offset-4 hover:text-red-400"
						>
							<a href={gig.gigurl} target="_blank">ticket</a>
						</div>
					{/if}
					<div
						class="mx-2 cursor-pointer rounded-md p-1 px-3 ring-1 ring-neutral-400 transition-colors hover:font-medium hover:ring-neutral-600"
						on:click={() => {
							openModal(gig);
						}}
						aria-hidden="true"
					>
						info
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
{#if isOpenModal}
	<div transition:fade|global={{ duration: 100 }}>
		<Modal
			{gigData}
			on:closeModal={() => {
				isOpenModal = false;
			}}
		/>
	</div>
{/if}
