import type { PageLoad } from './$types';
import { albums } from '$lib/domains/music/discography.data';
import { createGigService } from '$lib/domains/gigs/gig.service';

export const load = (async () => {
	const gigService = createGigService();
	const nextGig = await gigService.getNextGig();

	return {
		albums,
		nextGig
	};
}) satisfies PageLoad;
