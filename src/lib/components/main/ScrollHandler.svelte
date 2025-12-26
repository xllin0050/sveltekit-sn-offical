<script lang="ts">
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';
	import { goto } from '$app/navigation';
	import upArrowIcon from '$lib/assets/icons/up-arrow-circle-svgrepo-com.svg';
	import leftArrowIcon from '$lib/assets/icons/left-arrow-circle-svgrepo-com.svg';
	let stopAnimationFrame: any;
	let scrollButton: HTMLElement | null = $state(null);
	let scrollHeight: number = $state(0);
	let screenHeight: number = $state(0);
	let previousPage: string | null = $state(null);
	// let forwardPage: string | null | undefined;
	const scrollHandler = () => {
		if (!scrollButton) return;
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
		if (scrollButton) {
			scrollHandler();
			scrollButton.classList.add('opacity-0');
		}
		return () => {
			cancelAnimationFrame(stopAnimationFrame);
		};
	});
</script>

<svelte:window bind:scrollY={scrollHeight} bind:outerHeight={screenHeight} />
<div bind:this={scrollButton} class="fixed bottom-5 z-10 block transition sm:hidden">
	<button
		type="button"
		class="mb-2 ml-2 w-8"
		onclick={() => {
			document.body.scrollIntoView();
		}}
		aria-label="scroll to top"
	>
		<img src={upArrowIcon} alt="" />
	</button>
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

	<button
		type="button"
		class="mb-2 ml-2 w-8"
		onclick={() => {
			if (previousPage) {
				goto(previousPage);
			}
		}}
		aria-label="back to previous page"
	>
		<img src={leftArrowIcon} alt="" />
	</button>
</div>
