import { pb } from '$lib/pocketbase';
import albums from '$lib/data/discography';

export async function load() {
	// const today = new Date().toJSON().slice(0, 10);
	const testday = '2023-04-20';
	const nextGig = await pb.collection('sngigs').getFirstListItem(`gigdate>"${testday}"`);
	// console.log(nextGig);

	return {
		nextGig,
		albums
	};
}
