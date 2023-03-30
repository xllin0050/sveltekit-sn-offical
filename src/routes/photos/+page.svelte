<script lang="ts">
	import { lazyLoad } from './lazyLoad.js';
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './PhotoModal.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { photoUrls } = data;
	let isOpenModal: boolean = false;
	let singlePhotoUrl: string;
	const openModal = (data: string) => {
		singlePhotoUrl = data;
		isOpenModal = true;
	};
</script>

<PageHead />
<section id="photosWrapper" class="flex flex-col flex-wrap pt-12 md:flex-row md:px-12 md:pt-8">
	{#each photoUrls as photoUrl}
		<figure
			class="max-h-[500px] min-h-[200px] md:min-h-[300px] w-full md:w-1/3"
			on:click={() => {
				openModal(photoUrl);
			}}
			aria-hidden="true"
		>
			<img use:lazyLoad={photoUrl} alt="" class="h-full w-full object-cover" />
		</figure>
	{/each}
</section>
{#if isOpenModal}
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
