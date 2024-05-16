import albums from '$lib/data/discography';

export async function load({ params }) {
	const album = albums.find((album) => album.url === params.title);
	return {
		album
	};
}
