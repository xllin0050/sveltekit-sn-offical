import { pb } from '$lib/pocketbase';
import type { GigRecord } from '$lib/models/gig';

export async function getAllGigs() {
	const gigs = (await pb.collection('sngigs').getFullList({ sort: '-gigdate' })) as GigRecord[];
	return gigs.map(annotateComingFlag);
}

export async function getRecentGigs(limit = 3) {
	const gigs = (await pb.collection('sngigs').getFullList({ sort: '-gigdate' })) as GigRecord[];
	return gigs.map(annotateComingFlag).slice(0, limit);
}

export async function getNextGig() {
	const today = new Date().toJSON().slice(0, 10);
	const gigs = (await pb
		.collection('sngigs')
		.getFullList({ sort: 'gigdate', filter: `gigdate>"${today}"` })) as GigRecord[];

	const next = gigs.shift();
	return next ? annotateComingFlag(next) : undefined;
}

function annotateComingFlag(gig: GigRecord): GigRecord {
	if (!gig?.gigdate) return gig;
	const today = new Date();
	const gigDate = new Date(gig.gigdate);
	return { ...gig, coming: gigDate >= today };
}
