import { pb } from '$lib/pocketbase';

export async function load() {
	const records = await pb.collection('snsellrecords').getFullList();
	const tshirts = await pb.collection('snselltshirts').getFullList();
	return {
		records,
		tshirts
	};
}
