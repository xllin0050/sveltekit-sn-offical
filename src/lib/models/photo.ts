export interface PhotoRecord {
	id?: string;
	collectionName?: string;
	photo: string;
	photodate?: string;
	[key: string]: unknown;
}
