import { supabase } from '$lib/supabaseClient';

const getGigsData = async () => {
	const today = new Date();
	const { data: gigs, error } = await supabase
		.from('gigs')
		.select('*')
		.order('show_time', { ascending: false });

	let gigsData: any[] = [];
	if (gigs && gigs.length) {
		gigsData = gigs.map((gig) => {
			const gigDate = new Date(gig.show_time);
			gig.coming = gigDate >= today;
			return gig;
		});
	}
	return gigsData;
};

export async function load() {
	const gigs = await getGigsData();
	return { gigs };
}
