<script lang="ts">
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	import { fade, scale } from 'svelte/transition';
	export let singlePhotoUrl: string;
	export let onclose: () => void;


	const reduced = typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const backdrop = { duration: reduced ? 0 : 150 };
	const modal = { duration: reduced ? 0 : 150, start: 0.98 };
</script>

<div id="background" on:click={onclose} aria-hidden="true" transition:fade={backdrop}></div>
<div
	id="modal"
	class="relative flex max-h-screen w-3/4 flex-col justify-between rounded-md bg-neutral-50 p-2 uppercase md:px-10 md:py-8 xl:w-auto"
	transition:scale={modal}
>
	<div class="absolute right-2 top-2 w-6 bg-neutral-50" on:click={onclose} aria-hidden="true">
		<img src={closeIcon} alt="" />
	</div>
	<img src={singlePhotoUrl} alt="" class="max-h-[90vh] object-scale-down" />
</div>

<style>
	#background {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}

	#modal {
		position: fixed;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		filter: drop-shadow(0 0 20px #333);
	}
</style>
