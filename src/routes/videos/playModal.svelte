<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	export let videoData: any;

	const dispatch = createEventDispatcher();
	const closeModal = () => {
		dispatch('closeModal');
	};
</script>

<div id="background" on:click={closeModal} aria-hidden="true" />

<div
	id="modal"
	class="relative flex max-h-screen w-3/4 flex-col justify-between rounded-md bg-neutral-50 p-2 uppercase  md:px-12 md:py-8"
>
	<div class="absolute right-1 top-2 w-8 bg-neutral-50" on:click={closeModal} aria-hidden="true">
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
		/>
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
