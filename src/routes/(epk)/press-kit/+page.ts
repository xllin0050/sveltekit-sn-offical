import type { PageLoad } from './$types';
import { fetchEpkPayload } from '$lib/domains/epk/epk.service';

export const load = (async () => {
	return fetchEpkPayload();
}) satisfies PageLoad;
