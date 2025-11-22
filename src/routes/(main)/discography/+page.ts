import type { PageLoad } from './$types';
import { albums } from '$lib/domains/music/discography.data';

export const load = (() => {
	return {
		albums
	};
}) satisfies PageLoad;
