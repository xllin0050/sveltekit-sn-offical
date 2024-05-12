<script lang="ts">
	import { pb } from '$lib/pocketbase';

	import { onMount } from 'svelte';

	const thumbnailUrlPreifx = `${import.meta.env.VITE_POCKETBASE}/api/files/snphotos`;
	let photos: any;
	async function getPhotos() {
		const year = new Date().getFullYear();
		const photos = await pb
			.collection('snphotos')
			.getList(1, 3, { filter: `photodate>"${year}-01-01"` });

		if (Object.hasOwn(photos, 'items')) {
			return photos.items;
		}
		return [];
	}
	onMount(async () => {
		photos = await getPhotos();
	});
</script>

<div class="flex">
	{#if photos && photos.length}
		{#each photos as photo}
			<figure class="w-full" aria-hidden="true">
				<img
					src={`${thumbnailUrlPreifx}/${photo.id}/${photo.photo}?thumb=500x375`}
					alt=""
					class="object-cover"
				/>
			</figure>
		{/each}
	{/if}
</div>
