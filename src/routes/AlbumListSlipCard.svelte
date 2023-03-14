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
	let _refs: HTMLElement[] = [];
	let _len = 5;
	let y: number;
	let w: number;
	onMount(() => {
		console.log(w);

		scrollHeight.subscribe((h) => {
			console.log('h', h);
			console.log('y', y);
			if (w < 426) {
				if (h - y > -650 && _len < 220) {
					_len = h / 5;
				}
			}
			if (w > 426 && w < 581) {
				if (h - y > -650 && _len < 260) {
					_len = h / 5;
				}
			}
			if (w > 581 && w < 769) {
				if (h - y > -400 && _len < 330) {
					_len = h / 5;
				}
			}
			if (w > 769) {
				if (h - y > 0 && _len < 480) {
					_len = h / 5;
				}
			}
		});
	});
</script>

<svelte:window bind:innerHeight={y} bind:innerWidth={w} />
<h3
	class="pb-8 text-center font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800  lg:text-3xl"
>
	records
</h3>
<div class="relative min-h-[1500px] sm:min-h-[2000px] lg:min-h-[3000px]">
	{#each albums as album, idx}
		<div
			bind:this={_refs[idx]}
			class="absolute bg-white left-1/2 "
			style={`transform: translate(-50%,${idx * _len}px);z-index:${10 - idx}`}
		>
			<div class="mx-auto max-w-[75%] lg:max-w-sm">
				<a href={`/records/${album.release}/${album.url}`}>
					<img src={album.cover} alt={album.title} class="  w-full object-cover" />
				</a>
			</div>
			<h5
				class="py-4 text-center font-redhat text-xs font-medium uppercase text-neutral-800 lg:text-base"
			>
				<span class="rounded-lg p-0 drop-shadow">
					{album.title}
				</span>
			</h5>
		</div>
	{/each}
</div>
