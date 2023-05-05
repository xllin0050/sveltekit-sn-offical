<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	export let gigData: any;
	const posterUrl = `${import.meta.env.VITE_POCKETBASE}/api/files/sngigs/${gigData.id}/${
		gigData.gigbanner
	}?thumb=300x225f`;

	const dispatch = createEventDispatcher();
	let imgLoadded = false;
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

<div
	id="modal"
	class="relative flex h-[520px] w-[320px] flex-col justify-between rounded-md bg-neutral-50 p-2 uppercase"
>
	<div class="absolute right-1 top-2 w-6 bg-neutral-50" on:click={closeModal} aria-hidden="true">
		<img src={closeIcon} alt="" />
	</div>
	<div class="w-full pt-14">
		<img
			src={posterUrl}
			alt=""
			class="mx-auto"
			on:load={() => {
				imgLoadded = true;
			}}
		/>
		{#if !imgLoadded}
			<div class="h-[100px] px-16 pt-8 text-center">gig poster loading...</div>
		{/if}
	</div>
	<div class="grow flex flex-col justify-end p-4 text-sm lg:text-base">
		<p class="pt-6">{gigData.gigdate.slice(0, 10)}</p>
		<p class="pt-6">{gigData.gigvenue} / {gigData.giglocation}</p>
		{#if gigData.gignote}
			<p class="pt-6 text-xs normal-case text-gray-500">{gigData.gignote}</p>
		{/if}
	</div>
	<div class="pt-8">
		<div
			class="rounded bg-neutral-100 p-2 text-base shadow hover:bg-neutral-100"
			on:click={closeModal}
			aria-hidden="true"
		>
			<a href={gigData.gigurl} target="_blank" class="flex items-center justify-center">info </a>
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
