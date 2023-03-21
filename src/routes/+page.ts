import { supabase } from '$lib/supabaseClient';
import albums from '$lib/data/discography';

// type Gig = {
// 	id: number;
// 	created_at: string;
// 	show_time: string;
// 	venue: string;
// 	city: string;
// 	event_url: string;
// 	banner: string;
// 	note: null;
// };

const getNextGigs = async () => {
	const today = new Date().toISOString();
	let { data, error } = await supabase
		.from('gigs')
		.select('*')
		.order('show_time')
		.gte('show_time', today);

	let theNextOne = {};
	if (data && data.length) {
		theNextOne = data[0];
	}

	return theNextOne;
};

export async function load() {
	const nextGig = await getNextGigs();

	return {
		nextGig,
		albums
	};
}
