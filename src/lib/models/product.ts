export interface ProductRecord {
	id?: string;
	collectionName?: string;
	itemname?: string;
	itemformat?: string;
	itemsize?: Record<string, unknown> | string;
	itemnote?: Record<string, string>;
	picture?: string;
	[key: string]: unknown;
}
