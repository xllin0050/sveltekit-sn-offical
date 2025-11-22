export interface MerchItem {
	id: string;
	type?: string;
	title?: string;
	price?: number;
	[key: string]: unknown;
}
