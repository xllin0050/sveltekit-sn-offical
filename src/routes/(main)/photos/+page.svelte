<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './PhotoModal.svelte';
	import { lazyLoad } from './lazyLoad.js';

	let { data }: { data: PageData } = $props();
	const photos = $derived(data.photos);

	let isOpenModal: boolean = $state(false);
	let screenWidth: number = $state(0);
	let phoneScreen: boolean = $state(false);
	let singlePhotoUrl: string = $state('');

	const openModal = (data: string) => {
		singlePhotoUrl = data;
		isOpenModal = true;
	};
	$effect(() => {
		phoneScreen = screenWidth < 768;
	});
</script>

<svelte:window bind:outerWidth={screenWidth} />
<PageHead />
<h2 class="pt-8 text-center text-sm font-medium uppercase text-neutral-500 sm:hidden">photos</h2>
<section id="photosWrapper" class="flex flex-col flex-wrap pt-10 md:flex-row md:px-12 md:pt-8">
	{#if photos && photos.length}
		{#each photos as photo}
			<figure
				class="max-h-[500px] min-h-[200px] w-full md:min-h-[300px] md:w-1/3"
				onclick={() => {
					openModal(photo.fullUrl);
				}}
				aria-hidden="true"
			>
				<img
					use:lazyLoad={photo.thumbnailUrl}
					alt=""
					class="h-full w-full object-cover"
				/>
			</figure>
		{/each}
	{/if}
</section>
{#if isOpenModal && !phoneScreen}
	<div transition:fade|global={{ duration: 100 }}>
		<Modal
			{singlePhotoUrl}
			onclose={() => {
				isOpenModal = false;
			}}
		/>
	</div>
{/if}

<style>
	img {
		opacity: 0;
		transition: opacity 350ms ease;
	}
</style>
