import { pb } from '$lib/pocketbase';
import type { ProductRecord } from '$lib/models/product';

export async function getRecords() {
	return (await pb.collection('snsellrecords').getFullList()) as ProductRecord[];
}

export async function getTshirts() {
	return (await pb.collection('snselltshirts').getFullList()) as ProductRecord[];
}
