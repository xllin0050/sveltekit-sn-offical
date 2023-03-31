<script lang="ts">
	import { onMount } from 'svelte';
	import { lazyLoad } from './lazyLoad.js';
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './PhotoModal.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { photoUrls } = data;
	let isOpenModal: boolean = false;
	let screenWidth: number;
	let phoneScreen: boolean;
	let singlePhotoUrl: string;
	const openModal = (data: string) => {
		singlePhotoUrl = data;
		isOpenModal = true;
	};
	onMount(() => {
		phoneScreen = screenWidth < 768;
	});
</script>

<svelte:window bind:outerWidth={screenWidth} />
<PageHead />
<h2 class="pt-8 text-center text-lg font-medium uppercase text-neutral-500 sm:hidden">
	photos
</h2>
<section id="photosWrapper" class="flex flex-col flex-wrap pt-10 md:flex-row md:px-12 md:pt-8">
	{#each photoUrls as photoUrl}
		<figure
			class="max-h-[500px] min-h-[200px] w-full md:min-h-[300px] md:w-1/3"
			on:click={() => {
				openModal(photoUrl);
			}}
			aria-hidden="true"
		>
			<img use:lazyLoad={photoUrl} alt="" class="h-full w-full object-cover" />
		</figure>
	{/each}
</section>
{#if isOpenModal && !phoneScreen}
	<Modal
		{singlePhotoUrl}
		on:closeModal={() => {
			isOpenModal = false;
		}}
	/>
{/if}

<style>
	img {
		opacity: 0;
		transition: opacity 350ms ease;
	}
</style>
