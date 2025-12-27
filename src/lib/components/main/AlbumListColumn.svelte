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
	interface Props {
		albums: Album[];
	}

	let { albums }: Props = $props();
</script>

<div class="max-w-hero relative mx-auto pt-8">
	<h3 class="pt-2 text-center text-xl uppercase">releases</h3>
	<div class="wrapper">
		{#each albums as album}
			<div class="group relative">
				<h5 class="pt-8 pb-2 text-center font-light uppercase group-first:pt-2">
					{album.title}
				</h5>
				<a
					href={`/records/${album.release}/${album.url}`}
					class="hover:ring-primary hover:ring-offset-bg mx-auto block w-[clamp(300px,90vw,768px)] transition-all duration-300 hover:ring-2 hover:ring-offset-2"
				>
					<img
						src={album.cover}
						alt={album.title}
						sizes="clamp(300px, 90vw, 768px)"
						class="block w-full object-cover"
					/>
				</a>
			</div>
		{/each}
	</div>
</div>
