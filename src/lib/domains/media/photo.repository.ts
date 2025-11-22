import type { PocketBaseClient } from '$lib/core/services/pocketbase.client';
import type { PhotoRecord } from './photo.types';

const COLLECTION = 'snphotos';

export interface PhotoRepository {
	fetchAll(): Promise<PhotoRecord[]>;
	fetchLatest(limit?: number): Promise<PhotoRecord[]>;
}

export class PocketBasePhotoRepository implements PhotoRepository {
	constructor(private readonly client: PocketBaseClient) {}

	async fetchAll() {
		return this.client.collection(COLLECTION).getFullList<PhotoRecord>({ sort: '-photodate' });
	}

	async fetchLatest(limit = 3) {
		const { items } = await this.client
			.collection(COLLECTION)
			.getList<PhotoRecord>(1, limit, { sort: '-photodate' });
		return items;
	}
}
