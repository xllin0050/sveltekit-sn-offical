<script lang="ts">
	import { onMount } from 'svelte';
	import type { PhotoRecord } from '$lib/models/photo';
	import { getPhotos } from '$lib/services/photos';
	import { fileUrl } from '$lib/utils/pb';
	let photos: PhotoRecord[] = $state([]);
	async function fetchPhotos() {
		const year = new Date().getFullYear();
		const all = await getPhotos();
		return all.filter((p) => (p.photodate ?? '').startsWith(`${year}`));
	}
	onMount(async () => {
		photos = await fetchPhotos();
	});
</script>

<div class="flex justify-center py-4 2xl:py-8">
	{#if photos && photos.length}
		{#each photos as photo}
			<figure class="flex w-full flex-col items-center" aria-hidden="true">
				<img
					src={fileUrl({
						collection: 'snphotos',
						id: photo.id as string,
						filename: photo.photo as string,
						query: 'thumb=300x300'
					})}
					alt=""
					class="h-full w-full object-cover"
				/>
			</figure>
		{/each}
	{/if}
</div>
