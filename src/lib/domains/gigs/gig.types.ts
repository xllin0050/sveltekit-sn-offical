export interface GigRecord {
	id: string;
	gigdate: string;
	gigtitle?: string;
	gigurl?: string;
	gigvenue?: string;
	giglocation?: string;
	announce?: boolean;
	[key: string]: unknown;
}

export interface Gig extends GigRecord {
	coming: boolean;
}
