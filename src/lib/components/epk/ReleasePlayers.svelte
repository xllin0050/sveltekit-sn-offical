<script lang="ts">
	import BandcampPlayer from './BandcampPlayer.svelte';
	interface Album {
		id: number;
		release: string;
		tracks: { [key: string]: string | undefined };
		title: string;
		listen: { [key: string]: string | undefined };
		spotify?: string;
		bandcamp: string;
		desc: { [key: string]: string | undefined };
		note: string[];
		url: string;
		cover: string;
	}
	export let albums: Album[];
</script>

<div class=" w-full px-4 py-6 sm:mx-auto sm:w-[25em] lg:w-[35em] lg:py-6">
	{#each albums.slice(0, 2) as album}
		<BandcampPlayer bcNum={album.bandcamp} title={album.title} />
	{/each}
</div>
