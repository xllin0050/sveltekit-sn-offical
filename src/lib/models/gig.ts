export interface GigRecord {
	id?: string;
	collectionName?: string;
	gigdate: string;
	gigurl?: string;
	gigtitle?: string;
	giglocation?: string;
	gigvenue?: string;
	announce?: boolean;
	coming?: boolean;
	[key: string]: unknown;
}
