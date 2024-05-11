<script lang="ts">
	import SpotifyPlayer from './SpotifyPlayer.svelte';
	interface Album {
		id: number;
		release: string;
		tracks: { [key: string]: string | undefined };
		title: string;
		listen: { [key: string]: string | undefined };
		spotify: string;
		bandcamp: string;
		desc: { [key: string]: string | undefined };
		note: string[];
		url: string;
		cover: string;
	}
	export let albums: Album[];
</script>

<div class="album-row w-full px-8 py-6 sm:mx-auto sm:w-[25em] lg:w-[35em] lg:py-12">
	{#each albums.slice(0, 2) as album}
		<!-- <div
			class="album-cover mx-auto h-[10em] w-[10em] lg:h-[18em] lg:w-[18em]"
			style="background-image:url({album.cover})"
		/>
		<div class=" mx-auto">
			<iframe
				title={album.title}
				class="lazyload shadow"
				style="border: 0; width: 100%; height: 120px; "
				data-src={album.bandcamp}
				seamless
			/>
		</div> -->
		<SpotifyPlayer link={album.spotify} />
	{/each}
</div>

<style lang="postcss">
	.album-row {
		/* display: grid;
		grid-template-columns: repeat(7, 1fr); */
	}
	.album-cover {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
