<script lang="ts">
	import enterIcon from '$lib/assets/icons/enter-svgrepo-com.svg';
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './playModal.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { videos } = data;
	let currentId: string = '';
	let isOpenModal: boolean = false;
	let videoData: any;
	const openModal = (data: any) => {
		videoData = data;
		isOpenModal = true;
	};
</script>

<PageHead />
<section>
	<ul class="mx-auto max-w-3xl sm:pt-0 lg:mt-16">
		{#each videos as video}
			<li class="px-8 pb-0 lg:mb-28">
				<h3 class="pt-10 pb-3 text-center text-xs font-medium lg:pb-6 lg:text-left lg:text-base">
					{video.title}
				</h3>
				<div
					class="relative"
					on:mouseenter={() => {
						currentId = video.id;
					}}
					on:mouseleave={() => {
						currentId = '';
					}}
					on:click={() => {
						openModal(video);
					}}
					aria-hidden="true"
				>
					<img src={video.snapshot} alt="" class="card-shadow bg-white" />
					{#if currentId === video.id}
						<div
							class=" absolute top-0 flex h-full w-full items-center justify-center bg-neutral-700/60"
						>
							<div class="w-28 invert">
								<img src={enterIcon} alt="" />
							</div>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
{#if isOpenModal}
	<Modal
		{videoData}
		on:closeModal={() => {
			isOpenModal = false;
		}}
	/>
{/if}
