import { pb } from '$lib/pocketbase';

export async function load() {
	// const today = new Date();
	const testday = new Date('2023-04-25');

	const gigs = await (
		await pb.collection('sngigs').getFullList({ sort: '-gigdate' })
	).map((gig) => {
		const gigDate = new Date(gig.gigdate);
		gig.coming = gigDate >= testday;
		return gig;
	});
	// console.log(gigs);

	return { gigs };
}
