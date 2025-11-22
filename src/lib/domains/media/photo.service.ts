import { runtimeEnv } from '$lib/core/config/env';
import { createPocketBaseClient } from '$lib/core/services/pocketbase.client';
import { PocketBasePhotoRepository, type PhotoRepository } from './photo.repository';
import type { PhotoAsset, PhotoRecord } from './photo.types';

const COLLECTION = 'snphotos';
const fileBaseUrl = `${runtimeEnv.pocketbaseUrl}/api/files/${COLLECTION}`;

const toAsset = (record: PhotoRecord): PhotoAsset => {
	const buildUrl = (suffix = '') => `${fileBaseUrl}/${record.id}/${record.photo}${suffix}`;
	return {
		id: record.id,
		fullUrl: buildUrl(),
		thumbnailUrl: buildUrl('?thumb=500x375'),
		takenAt: record.photodate,
		raw: record
	};
};

export class PhotoService {
	constructor(private readonly repository: PhotoRepository) {}

	async getGallery() {
		const records = await this.repository.fetchAll();
		return records.map(toAsset);
	}

	async getHighlights(limit = 3) {
		const records = await this.repository.fetchLatest(limit);
		return records.map(toAsset);
	}
}

export const createPhotoService = (repository?: PhotoRepository) => {
	const repo = repository ?? new PocketBasePhotoRepository(createPocketBaseClient());
	return new PhotoService(repo);
};
