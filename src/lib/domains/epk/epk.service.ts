import { albums } from '$lib/domains/music/discography.data';
import { createGigService } from '$lib/domains/gigs/gig.service';
import type { Gig } from '$lib/domains/gigs/gig.types';
import { createPhotoService } from '$lib/domains/media/photo.service';
import type { PhotoAsset } from '$lib/domains/media/photo.types';

export interface EpkPayload {
	albums: typeof albums;
	recentGigs: Gig[];
	photoHighlights: PhotoAsset[];
}

export const fetchEpkPayload = async (): Promise<EpkPayload> => {
	const gigService = createGigService();
	const photoService = createPhotoService();
	const [recentGigs, photoHighlights] = await Promise.all([
		gigService.getSchedule(),
		photoService.getHighlights(3)
	]);

	return {
		albums,
		recentGigs,
		photoHighlights
	};
};
