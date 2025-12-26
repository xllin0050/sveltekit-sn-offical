import { pb } from '$lib/pocketbase';
import type { PhotoRecord } from '$lib/models/photo';

export async function getPhotos() {
	return (await pb.collection('snphotos').getFullList({ sort: '-photodate' })) as PhotoRecord[];
}
