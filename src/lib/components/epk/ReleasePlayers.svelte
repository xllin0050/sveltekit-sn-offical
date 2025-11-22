<script lang="ts">
	import BandcampPlayer from './BandcampPlayer.svelte';
	import type { AlbumRecord } from '$lib/domains/music/album.types';

	interface Props {
		albums: AlbumRecord[];
	}

	let { albums }: Props = $props();
</script>

<div class=" w-full px-4 py-6 sm:mx-auto sm:w-[25em] lg:w-[35em] lg:py-6">
	{#each albums.slice(0, 2) as album}
		<BandcampPlayer bcNum={album.bandcamp} title={album.title} />
	{/each}
</div>
