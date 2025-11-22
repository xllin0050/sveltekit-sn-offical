import type { PageLoad } from './$types';
import { albums } from '$lib/domains/music/discography.data';

export const load = (({ params }) => {
	const album = albums.find((candidate) => candidate.url === params.title);
	return { album };
}) satisfies PageLoad;
