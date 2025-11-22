import { createPocketBaseClient } from '$lib/core/services/pocketbase.client';
import { PocketBaseMerchRepository, type MerchRepository } from './merch.repository';
import type { MerchItem } from './merch.types';

export interface MerchCatalog {
	records: MerchItem[];
	apparel: MerchItem[];
}

export class MerchService {
	constructor(private readonly repository: MerchRepository) {}

	async getRecords() {
		const records = await this.repository.fetchRecords();
		return records.map((record) => ({ type: 'record', ...record }));
	}

	async getApparel() {
		const apparel = await this.repository.fetchApparel();
		return apparel.map((item) => ({ type: 'apparel', ...item }));
	}

	async getCatalog(): Promise<MerchCatalog> {
		const [records, apparel] = await Promise.all([this.getRecords(), this.getApparel()]);
		return { records, apparel };
	}
}

export const createMerchService = (repository?: MerchRepository) => {
	const repo = repository ?? new PocketBaseMerchRepository(createPocketBaseClient());
	return new MerchService(repo);
};
