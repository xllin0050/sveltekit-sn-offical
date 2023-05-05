<script lang="ts">
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';
	import { goto } from '$app/navigation';
	import upArrowIcon from '$lib/assets/icons/up-arrow-circle-svgrepo-com.svg';
	import leftArrowIcon from '$lib/assets/icons/left-arrow-circle-svgrepo-com.svg';
	let stopAnimationFrame: any;
	let scrollButton: HTMLElement;
	let scrollHeight: number;
	let screenHeight: number;
	let previousPage: string;
	// let forwardPage: string | null | undefined;
	const scrollHandler = () => {
		if (scrollHeight > screenHeight / 2) {
			scrollButton.classList.remove('opacity-0');
		} else {
			scrollButton.classList.add('opacity-0');
		}
		stopAnimationFrame = requestAnimationFrame(scrollHandler);
	};
	onMount(() => {
		const { navigating } = getStores();
		navigating.subscribe((nav) => {
			if (nav?.from) {
				previousPage = nav.from.url.pathname;
			}
			// if (nav?.to) {
			// 	forwardPage = nav.to.url.pathname;
			// }
		});
		scrollHandler();
		scrollButton.classList.add('opacity-0');
		return () => {
			cancelAnimationFrame(stopAnimationFrame);
		};
	});
</script>

<svelte:window bind:scrollY={scrollHeight} bind:outerHeight={screenHeight} />
<div bind:this={scrollButton} class="fixed bottom-5 z-10 block transition sm:hidden">
	<figure
		class="mb-2 ml-2 w-8"
		on:click={() => {
			document.body.scrollIntoView();
		}}
		aria-hidden
	>
		<img src={upArrowIcon} alt="" />
	</figure>
	<!-- <figure
		class="mb-2 ml-2 w-8"
		on:click={() => {
			if (forwardPage) {
				goto(forwardPage);
			}
		}}
		aria-hidden
	>
		<img src={leftArrowIcon} alt="" class="rotate-180" />
	</figure> -->

	<figure
		class="mb-2 ml-2 w-8"
		on:click={() => {
			if (previousPage) {
				goto(previousPage);
			}
		}}
		aria-hidden
	>
		<img src={leftArrowIcon} alt="" />
	</figure>
</div>
