import { createPocketBaseClient } from '$lib/core/services/pocketbase.client';
import { PocketBaseGigRepository, type GigRepository } from './gig.repository';
import type { Gig, GigRecord } from './gig.types';

const normalizeGig = (record: GigRecord, referenceDate: Date): Gig => {
	const gigDate = new Date(record.gigdate);
	return {
		...record,
		coming: gigDate >= referenceDate
	};
};

const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);

export class GigService {
	constructor(private readonly repository: GigRepository) {}

	async getSchedule(referenceDate = new Date()) {
		const records = await this.repository.fetchAll();
		return records.map((record) => normalizeGig(record, referenceDate));
	}

	async getNextGig(referenceDate = new Date()) {
		const records = await this.repository.fetchAfter(toIsoDate(referenceDate));
		const first = records.at(0);
		return first ? normalizeGig(first, referenceDate) : null;
	}
}

export const createGigService = (repository?: GigRepository) => {
	const repo = repository ?? new PocketBaseGigRepository(createPocketBaseClient());
	return new GigService(repo);
};
