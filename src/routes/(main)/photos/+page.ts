import type { PageLoad } from './$types';
import { createPhotoService } from '$lib/domains/media/photo.service';

export const load = (async () => {
	const photoService = createPhotoService();
	const photos = await photoService.getGallery();

	return { photos };
}) satisfies PageLoad;
