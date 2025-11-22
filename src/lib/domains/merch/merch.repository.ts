import type { PocketBaseClient } from '$lib/core/services/pocketbase.client';
import type { MerchItem } from './merch.types';

const RECORDS_COLLECTION = 'snsellrecords';
const APPAREL_COLLECTION = 'snselltshirts';

export interface MerchRepository {
	fetchRecords(): Promise<MerchItem[]>;
	fetchApparel(): Promise<MerchItem[]>;
}

export class PocketBaseMerchRepository implements MerchRepository {
	constructor(private readonly client: PocketBaseClient) {}

	async fetchRecords() {
		return this.client.collection(RECORDS_COLLECTION).getFullList();
	}

	async fetchApparel() {
	 return this.client.collection(APPAREL_COLLECTION).getFullList();
	}
}
