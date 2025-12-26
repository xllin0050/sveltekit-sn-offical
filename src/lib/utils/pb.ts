const baseUrl = import.meta.env.VITE_POCKETBASE;

export function fileUrl(params: {
	collection: string;
	id: string;
	filename: string;
	query?: string;
}) {
	const { collection, id, filename, query } = params;
	const suffix = query ? `?${query}` : '';
	return `${baseUrl}/api/files/${collection}/${id}/${filename}${suffix}`;
}
