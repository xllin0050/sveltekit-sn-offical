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

<div class="relative pt-16 lg:pt-24">
	<h3
		class="pb-4 text-center text-xl font-medium tracking-widest text-neutral-800 uppercase lg:pb-20 lg:text-3xl"
	>
		releases
	</h3>
	{#each albums as album}
		<div class="relative pb-10 lg:pb-28">
			<div class="mx-auto max-w-[65%] lg:max-w-sm">
				<a href={`/records/${album.release}/${album.url}`}>
					<img
						src={album.cover}
						alt={album.title}
						class="card-shadow hover:card-shadow-elev mx-auto block w-full object-cover transition-all duration-600 hover:scale-105 hover:rounded-2xl"
					/>
				</a>
			</div>
			<h5 class="py-4 text-center text-sm font-medium text-neutral-800 uppercase lg:text-base">
				<span class="rounded-lg p-6 drop-shadow-sm">
					{album.title}
				</span>
			</h5>
		</div>
	{/each}
</div>
