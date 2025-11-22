import type { PocketBaseClient } from '$lib/core/services/pocketbase.client';
import type { GigRecord } from './gig.types';

export interface GigRepository {
	fetchAll(): Promise<GigRecord[]>;
	fetchAfter(dateIso: string): Promise<GigRecord[]>;
}

export class PocketBaseGigRepository implements GigRepository {
	constructor(private readonly client: PocketBaseClient) {}

	async fetchAll() {
		return this.client.collection('sngigs').getFullList<GigRecord>({ sort: '-gigdate' });
	}

	async fetchAfter(dateIso: string) {
		return this.client
			.collection('sngigs')
			.getFullList<GigRecord>({ sort: 'gigdate', filter: `gigdate>"${dateIso}"` });
	}
}
