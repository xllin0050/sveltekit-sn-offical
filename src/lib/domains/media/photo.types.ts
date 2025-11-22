export interface PhotoRecord {
	id: string;
	photo: string;
	photodate?: string;
	[key: string]: unknown;
}

export interface PhotoAsset {
	id: string;
	fullUrl: string;
	thumbnailUrl: string;
	takenAt?: string;
	raw: PhotoRecord;
}
