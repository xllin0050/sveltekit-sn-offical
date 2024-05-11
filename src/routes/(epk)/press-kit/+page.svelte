<script lang="ts">
	import 'lazysizes';

	import albums from '$lib/data/discography';
	import AlbumListRow from './AlbumListRow.svelte';
	import appleMusic from '$lib/assets/icons/epk/icons8-music.svg';
	import spotify from '$lib/assets/icons/epk/icons8-spotify.svg';
	import youtubeMusic from '$lib/assets/icons/epk/icons8-youtube-music.svg';
	import bandcamp from '$lib/assets/icons/epk/icons8-bandcamp.svg';
</script>

<article class="w-full px-4 sm:mx-auto sm:w-[50ch] lg:w-[80ch]">
	<p class="paragraph">
		Super Napkin is a band that does everything ridiculously, and only to a slight degree.
	</p>
	<p class="paragraph">
		Yau (he/him/founding fuzzgod) is obsessed with bad puns. His life goal is to have a successful
		band that starts with ‘S’ in its name. He wants to have his band’s records stocked on the shelf
		next to Sonic Youth, Sonic Boom, and Shakira. Super Napkin is his third band with this naming
		convention. As the most ridiculous name out of the three, Yau intends to go to his grave with
		this one.
	</p>
</article>
<section>
	{#if albums && albums.length}
		<AlbumListRow {albums} />
	{/if}
</section>
<section class="steaming">
	<p class="pb-8 text-center font-medium capitalize">our stream</p>
	<ul>
		<li>
			<a href="#" target="_blank" rel="noreferrer">
				<img src={spotify} alt="spotify" />
			</a>
		</li>
		<li>
			<a href="#" target="_blank" rel="noreferrer">
				<img src={appleMusic} alt="apple music" />
			</a>
		</li>
		<li>
			<a href="#" target="_blank" rel="noreferrer">
				<img src={youtubeMusic} alt="youtube music" />
			</a>
		</li>
		<li>
			<a href="#" target="_blank" rel="noreferrer">
				<img src={bandcamp} alt="bandcamp" />
			</a>
		</li>
	</ul>
</section>
<section class="mx-4 mt-4 border border-gray-500 py-[20em] text-center">youtube video</section>
<section class="mx-4 mt-4 border border-gray-500 py-[20em] text-center">
	<p class="pb-8 text-center font-medium capitalize">gigs</p>
	list last 3 gigs
</section>

<style lang="postcss">
	ul {
		@apply flex justify-center;
	}
	ul li {
		@apply mx-4 w-10;
	}
</style>
