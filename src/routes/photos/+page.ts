import { pb } from '$lib/pocketbase';

export async function load() {
	const photos = await pb.collection('snphotos').getFullList({ sort: '-photodate' });
	return {
		photos
	};
}
