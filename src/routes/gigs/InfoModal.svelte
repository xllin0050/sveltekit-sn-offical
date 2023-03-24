<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	export let gigData: any;

	const dispatch = createEventDispatcher();

	const closeModal = () => {
		dispatch('closeModal');
	};

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});
	onDestroy(() => {
		document.body.style.overflow = 'auto';
	});
</script>

<div id="background" on:click={closeModal} aria-hidden="true" />
<div id="modal">
	<div class="w-full">
		<img src={gigData.banner} alt="" class="mx-auto h-full max-h-[70vh]" />
		<!-- <div  class="h-[300px] w-full text-center pt-8">
			wait for poster loading or nothing at all
		</div> -->
	</div>
	<div class="flex flex-col p-4 text-sm lg:text-base">
		<p class="pt-6">{gigData.show_time}</p>
		<p class="pt-6">{gigData.venue}</p>
		<p class="pt-6 text-xs text-gray-500 normal-case">{gigData.note}</p>
	</div>
	<div class="pt-8">
		<div class="rounded bg-neutral-100 p-2 text-base shadow hover:bg-neutral-100">
			<a href={gigData.event_url} target="_blank" class="flex justify-center items-center">info </a>
		</div>
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
</style>
