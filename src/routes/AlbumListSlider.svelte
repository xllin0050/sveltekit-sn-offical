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
	import '@splidejs/svelte-splide/css';
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

<div class="relative">
	<h3
		class="text-center text-xl font-medium uppercase tracking-widest text-neutral-800  lg:text-3xl"
	>
		records
	</h3>

	<Splide
		options={{
			pagination: false,
			perPage: 3,
			arrows: false,
			type: 'loop',
			rewind: true,
			rewindByDrag: true,
			gap: '1em',
			wheel: true,
			waitForTransition: true,
			wheelSleep: 500,
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
					<h5 class="py-4 text-center text-sm font-medium uppercase text-neutral-800 lg:text-base">
						<span class="rounded-lg p-6 drop-shadow">
							{album.title}
						</span>
					</h5>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>
