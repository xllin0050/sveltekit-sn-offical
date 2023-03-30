import { supabase } from '$lib/supabaseClient';

const getRecords = async () => {
	const { data, error } = await supabase
		.from('records')
		.select('*')
		.order('id', { ascending: false });
	let records: any[] = [];
	if (!error) {
		records = data;
	}
	return records;
};

const gettshirts = async () => {
	const { data, error } = await supabase.from('tshirts').select('*').order('id');
	let tshirts: any[] = [];
	if (!error) {
		tshirts = data;
	}
	return tshirts;
};

export async function load() {
	const records = await getRecords();
	const tshirts = await gettshirts();
	return {
		records,
		tshirts
	};
}
