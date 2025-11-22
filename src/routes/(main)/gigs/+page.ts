import type { PageLoad } from './$types';
import { createGigService } from '$lib/domains/gigs/gig.service';

export const load = (async () => {
	const gigService = createGigService();
	const gigs = await gigService.getSchedule();

	return {
		gigs
	};
}) satisfies PageLoad;
