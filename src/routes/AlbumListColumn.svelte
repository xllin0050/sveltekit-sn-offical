<script lang="ts">
	interface album {
		id: number;
		release: string;
		tracks: { [index: string]: string  };
		title: string;
		listen: { [index: string]: string };
		bandcamp: string;
		desc: { [index: string]: string };
		note: string[];
		url: string;
		cover: string;
	}
	export let albums: album[];
</script>

<div class="relative pt-16 lg:pt-24">
	<h3
		class="pb-4 text-center font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
	>
		albums
	</h3>
	{#each albums as album}
		<div class="relative pb-10 lg:pb-28">
			<div class="mx-auto max-w-[75%] lg:max-w-sm">
				<!-- <router-link
          :to="{
            path: `/album/${album.release}/${album.url}`,
            hash: width > 1024 ? '#banner' : '',
          }"
        >
          <img
            :src="album.cover"
            :alt="album.title"
            class="card-shadow mx-auto block w-full object-cover"
          />
        </router-link> -->
				<a href={`/records/${album.release}/${album.url}`}>
					<img
						src={album.cover}
						alt={album.title}
						class="card-shadow mx-auto block w-full object-cover"
					/>
				</a>
			</div>
			<h5
				class="py-4 text-center font-redhat text-sm font-medium uppercase text-neutral-800 lg:text-base"
			>
				<span class="rounded-lg p-6 drop-shadow">
					{album.title}
				</span>
			</h5>
		</div>
	{/each}
</div>
