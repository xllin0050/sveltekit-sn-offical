<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import enterIcon from '$lib/assets/icons/enter-svgrepo-com.svg';
	import PageHead from '$lib/components/PageHead.svelte';
	import Modal from './playModal.svelte';
	import videos from './data';
	import 'lazysizes';

	let currentId: string = '';
	let screenWidth: number;
	let phoneScreen: boolean;
	let isOpenModal: boolean = false;

	let videoData: any;
	const openModal = (data: any) => {
		videoData = data;
		isOpenModal = true;
	};
	onMount(() => {
		phoneScreen = screenWidth < 768;
	});
</script>

<svelte:window bind:outerWidth={screenWidth} />
<PageHead />
<h2 class="pt-8 text-center text-sm font-medium uppercase text-neutral-500 sm:hidden">videos</h2>
<section>
	<ul class="mx-auto max-w-3xl sm:pt-0 lg:mt-16">
		{#each videos as video}
			<li class="mb-20 px-8 lg:mb-28">
				<h3 class="pb-3 pt-10 text-center text-xs font-medium lg:pb-6 lg:text-left lg:text-base">
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
						if (phoneScreen) {
							goto(video.url);
						}
						openModal(video);
					}}
					aria-hidden="true"
				>
					<img src={video.snapshot} alt="" class="lazyload card-shadow bg-white" />
					{#if currentId === video.id}
						<div
							transition:fade|global={{ duration: 150 }}
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
{#if isOpenModal && !phoneScreen}
	<div transition:fade|global={{ duration: 150 }}>
		<Modal
			{videoData}
			on:closeModal={() => {
				isOpenModal = false;
			}}
		/>
	</div>
{/if}
