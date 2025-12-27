<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import enterIcon from '$lib/assets/icons/enter-svgrepo-com.svg';
	import PageHead from '$lib/components/base/PageHead.svelte';
	import Modal from './playModal.svelte';
	import videos from './data';
	import 'lazysizes';

	type VideoItem = {
		id: string;
		title?: string;
		url?: string;
		snapshot?: string;
	};

	const videoList = videos as VideoItem[];

	let currentId: string = $state('');
	let screenWidth: number = $state(0);
	let phoneScreen: boolean = $state(false);
	let isOpenModal: boolean = $state(false);

	let videoData: VideoItem | null = $state(null);
	const openModal = (data: VideoItem) => {
		videoData = data;
		isOpenModal = true;
	};
	onMount(() => {
		phoneScreen = screenWidth < 768;
	});
</script>

<svelte:window bind:outerWidth={screenWidth} />
<PageHead />
<h2 class="pt-8 text-center text-sm font-medium text-neutral-500 uppercase sm:hidden">videos</h2>
<section>
	<ul class="mx-auto max-w-3xl sm:pt-0 lg:mt-16">
		{#each videoList as video}
			<li class="mb-20 px-8 lg:mb-28">
				<h3 class="pt-10 pb-3 text-center text-xs font-medium lg:pb-6 lg:text-left lg:text-base">
					{video.title}
				</h3>
				<div
					class="relative"
					onmouseenter={() => {
						currentId = video.id;
					}}
					onmouseleave={() => {
						currentId = '';
					}}
					onclick={() => {
						if (phoneScreen && video.url) {
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
{#if isOpenModal && !phoneScreen && videoData}
	<div transition:fade|global={{ duration: 150 }}>
		<Modal
			{videoData}
			onclose={() => {
				isOpenModal = false;
				videoData = null;
			}}
		/>
	</div>
{/if}
