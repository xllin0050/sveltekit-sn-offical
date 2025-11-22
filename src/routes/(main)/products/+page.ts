import type { PageLoad } from './$types';
import { createMerchService } from '$lib/domains/merch/merch.service';

export const load = (async () => {
	const merchService = createMerchService();
	const catalog = await merchService.getCatalog();

	return catalog;
}) satisfies PageLoad;
