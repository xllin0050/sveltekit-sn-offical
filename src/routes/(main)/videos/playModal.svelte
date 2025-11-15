<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	interface Props {
		videoData: any;
		onclose: () => void;
	}

	let { videoData, onclose }: Props = $props();

	const reduced = typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const backdrop = { duration: reduced ? 0 : 150 };
	const modal = { duration: reduced ? 0 : 150, start: 0.98 };
</script>

<div id="background" onclick={onclose} aria-hidden="true" transition:fade={backdrop}></div>

<div
	id="modal"
	class="relative flex max-h-screen w-3/4 flex-col justify-between rounded-md bg-neutral-50 p-2 uppercase md:px-12 md:py-8"
	transition:scale={modal}
>
	<div class="absolute right-1 top-1 w-6 bg-neutral-50" onclick={onclose} aria-hidden="true">
		<img src={closeIcon} alt="" />
	</div>
	<div class="resp-container">
		<iframe
			src={`https://www.youtube-nocookie.com/embed/${videoData.id}?controls=0`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			class="responsive-iframe"
			allowfullscreen
		></iframe>
	</div>
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

	.resp-container {
		position: relative;
		overflow: hidden;
		padding-top: 56.25%;
	}
	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>
