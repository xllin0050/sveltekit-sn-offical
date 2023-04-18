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
</script>

<div class="relative pt-16 lg:pt-24">
	<h3
		class="pb-4 text-center text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
	>
		albums
	</h3>
	{#each albums as album}
		<div class="relative pb-10 lg:pb-28">
			<div class="mx-auto max-w-[65%] lg:max-w-sm">
				<a href={`/records/${album.release}/${album.url}`}>
					<img
						src={album.cover}
						alt={album.title}
						class="card-shadow hover:card-shadow-elev duration-600 mx-auto block w-full object-cover transition-all hover:scale-105 hover:rounded-2xl"
					/>
				</a>
			</div>
			<h5 class="py-4 text-center text-sm font-medium uppercase text-neutral-800 lg:text-base">
				<span class="rounded-lg p-6 drop-shadow">
					{album.title}
				</span>
			</h5>
		</div>
	{/each}
</div>
