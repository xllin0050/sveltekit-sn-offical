<script lang="ts">
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

<div class="album-row w-full px-6 lg:w-[40em] lg:py-12">
	{#each albums as album}
		<div
			class="album-cover h-[7em] w-[7em] lg:h-[12em] lg:w-[12em]"
			style="background-image:url({album.cover})"
		/>
	{/each}
</div>

<style lang="postcss">
	.album-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 0.5em;
		margin-inline: auto;
	}
	.album-cover {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
