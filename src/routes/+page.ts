import { pb } from '$lib/pocketbase';
import albums from '$lib/data/discography';

export async function load() {
	const today = new Date().toJSON().slice(0, 10);
	let nextGig = {};
	try {
		nextGig = await pb.collection('sngigs').getFirstListItem(`gigdate>"${today}"`);
	} catch (err: any) {
		console.log(err.response);
	}
	return {
		nextGig,
		albums
	};
}
