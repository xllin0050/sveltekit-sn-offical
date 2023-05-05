<script lang="ts">
	import 'lazysizes';
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$types';
	export let data: PageData | { [index: string]: any } = {};

	const { albums } = data;
</script>

<PageHead />
<h2 class="pt-8 text-center text-sm font-medium uppercase text-neutral-500 sm:hidden">
	Discography
</h2>
<section class="mx-auto max-w-sm lg:max-w-4xl lg:pt-4">
	{#each albums as album}
		<div
			class="flex flex-col items-center justify-center pt-10 pb-24 md:pt-2 md:pb-24 lg:flex-row lg:items-stretch  lg:pt-4 lg:pb-44"
		>
			<a
				href={`records/${album.release}/${album.url}`}
				class="block w-[250px] shrink-0 lg:w-[400px]"
			>
				<img src={album.cover} alt="" class="w-full p-1 shadow-xl ring-neutral-300 hover:ring" />
			</a>
			<div class="mx-8 flex w-[250px] flex-col justify-between pt-12 lg:ml-16 lg:w-full lg:py-6">
				<article>
					<h3 class="pb-8 text-xs uppercase text-neutral-800 lg:pb-4 lg:text-lg">
						<span class="capitalize lg:hidden">title: </span>{album.title}
					</h3>
					<div class="pb-8 text-xs capitalize lg:pb-12 lg:text-base">
						release: {album.release}
					</div>
				</article>
				<iframe
					title={album.title}
					class="lazyload shadow"
					style="border: 0; width: 100%; height: 120px; "
					data-src={album.bandcamp}
					seamless
				/>
			</div>
		</div>
	{/each}
</section>
