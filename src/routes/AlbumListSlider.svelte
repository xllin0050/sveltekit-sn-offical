<script lang="ts">
	interface Album {
		id: number;
		release: string;
		tracks: { [key: string]: string | undefined };
		title: string;
		listen: { [key: string]: string | undefined };
		bandcamp: string;
		desc: { [key: string]: string | undefined };
		note: string[];
		url: string;
		cover: string;
	}
	export let albums: Album[];
	import { onMount } from 'svelte';
	import { scrollHeight } from '$lib/stores';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/sea-green';
	let scrollY;
	let _refs: HTMLElement[] = [];
	onMount(() => {
		scrollHeight.subscribe((value) => {
			scrollY = value;
			// console.log('Y', scrollY);
		});
		// _refs.forEach((elem) => {
		// 	console.log(elem);
		// });
	});
</script>

<div class="relative py-16 lg:py-28">
	<h3
		class="text-center text-xl font-medium uppercase tracking-widest text-neutral-800  lg:text-3xl"
	>
		records
	</h3>

	<Splide
		options={{
			perPage: 3,
			type: 'loop',
			rewind: true,
			rewindByDrag: true,
			gap: '1em',
			breakpoints: {
				640: {
					perPage: 1,
					padding: '3em'
				}
			}
		}}
		aria-label="Albums"
	>
		{#each albums as album}
			<SplideSlide>
				<div class="bg-white">
					<a href={`/records/${album.release}/${album.url}`} class="block">
						<img src={album.cover} alt={album.title} />
					</a>
					<h5 class=" text-center text-sm font-medium uppercase text-neutral-800 lg:text-base">
						<span class="rounded-lg drop-shadow">
							{album.title}
						</span>
					</h5>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	:global(.splide__arrow) {
		width: 1.5em;
	}
	:global(.splide__arrow svg) {
		fill: #000;
	}
	:global(.splide__pagination__page.is-active) {
		background: #000;
	}
	:global(.splide__arrow:hover:not(:disabled) svg) {
		fill: #000;
	}
</style>
