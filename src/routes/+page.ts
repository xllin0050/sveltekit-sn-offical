import { supabase } from '$lib/supabaseClient';
import albums from '$lib/data/discography';

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

const createUrl = async () => {
	const { data } = await supabase.storage
		.from('assets')
		.createSignedUrl('video-banner-2.mp4', 36000);

	return data;
};

export async function load() {
	const nextGig = await getNextGigs();
	const videoUrl = await createUrl();
	return {
		nextGig,
		videoUrl,
		albums
	};
}
