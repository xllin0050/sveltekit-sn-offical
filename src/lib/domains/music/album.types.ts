export interface AlbumDescription {
	zh: string;
	en: string;
}

export type AlbumListenLinks = Record<string, string>;

export type AlbumTrackList = Record<string, string>;

export interface AlbumRecord {
	id: number;
	release: string;
	title: string;
	tracks: AlbumTrackList;
	listen: AlbumListenLinks;
	desc: AlbumDescription;
	url: string;
	cover: string;
	spotify?: string;
	bandcamp?: string;
	note?: string[];
}
