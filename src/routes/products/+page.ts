import { pb } from '$lib/pocketbase';


// const getRecords = async () => {
// 	const { data, error } = await supabase
// 		.from('records')
// 		.select('*')
// 		.order('id', { ascending: false });
// 	let records: any[] = [];
// 	if (!error) {
// 		records = data;
// 	}
// 	return records;
// };

// const gettshirts = async () => {
// 	const { data, error } = await supabase.from('tshirts').select('*').order('id');
// 	let tshirts: any[] = [];
// 	if (!error) {
// 		tshirts = data;
// 	}
// 	return tshirts;
// };

export async function load() {
	const records = await pb.collection('snsellrecords').getFullList();
	const tshirts = await pb.collection('snselltshirts').getFullList();
	return {
		records,
		tshirts
	};
}
