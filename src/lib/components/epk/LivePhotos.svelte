<script lang="ts">
	import type { PhotoAsset } from '$lib/domains/media/photo.types';

	interface Props {
		photos: PhotoAsset[];
	}

	let { photos }: Props = $props();
	const gallery = $derived(photos.slice(0, 3));
</script>

<div class="flex justify-center py-4 2xl:py-8">
	{#if gallery && gallery.length}
		{#each gallery as photo}
			<figure class="flex w-full flex-col items-center" aria-hidden="true">
				<img src={photo.thumbnailUrl} alt="" class="w-full" />
			</figure>
		{/each}
	{/if}
</div>
