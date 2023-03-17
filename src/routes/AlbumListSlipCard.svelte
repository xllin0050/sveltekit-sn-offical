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
	let _refHeight: number;
	let _len: number;
	// scroll hight
	let innerH: number;

	let sessionTitle: HTMLElement;

	onMount(() => {
		_len = _refs.length;
		scrollHeight.subscribe((scrollOffsetY) => {
			if (_refs.length) {
				_refHeight = _refs[0].offsetHeight;
				if (scrollOffsetY > sessionTitle.offsetTop - innerH && _len < _refHeight) {
					_len = scrollOffsetY / _refs.length;
				}
			}
		});
	});
</script>

<svelte:window bind:innerHeight={innerH} />
<h3
	bind:this={sessionTitle}
	class="pb-8 text-center font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800   lg:text-3xl"
>
	records
</h3>
<div class="relative" style:height={_refHeight * _refs.length + 'px'}>
	{#each albums as album, idx}
		<div
			bind:this={_refs[idx]}
			class="absolute bg-white left-1/2 "
			style:transform={`translate(-50%,${idx * _len}px)`}
			style:z-index={10 - idx}
		>
			<div class="mx-auto max-w-[75%] lg:max-w-sm">
				<a href={`/records/${album.release}/${album.url}`}>
					<img src={album.cover} alt={album.title} class="object-cover" />
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
