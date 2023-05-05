import { pb } from '$lib/pocketbase';

export async function load() {
	const gigs = await pb.collection('sngigs').getFullList({ sort: '-gigdate' });
	return { gigs };
}
