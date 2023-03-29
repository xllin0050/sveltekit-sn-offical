import { supabase } from '$lib/supabaseClient';

const getPhotoFiles = async () => {
	const { data, error } = await supabase.storage.from('live-photos').list();
	let photos: string[] = [];
	if (!error) {
		photos = data.map((item) => item.name);
	}
	return photos;
};
const getPhotoUrls = async (files: string[]) => {
	const { data, error } = await supabase.storage.from('live-photos').createSignedUrls(files, 1800);
	if (!error) {
		return data.map((item) => item.signedUrl);
	}
};

export async function load() {
	let photoUrls;
	await getPhotoFiles().then(async (files) => {
		photoUrls = await getPhotoUrls(files);
	});
	return {
		photoUrls
	};
}
