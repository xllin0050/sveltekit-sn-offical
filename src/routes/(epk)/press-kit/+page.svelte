<script lang="ts">
	import albums from '$lib/data/discography';
	import ReleaseCovers from './ReleaseCovers.svelte';
	import ReleasePlayers from './ReleasePlayers.svelte';
	import LivePhotos from './LivePhotos.svelte';
	import LastGigList from './LastGigList.svelte';
	import appleMusic from '$lib/assets/icons/epk/icons8-music.svg';
	import spotify from '$lib/assets/icons/epk/icons8-spotify.svg';
	import youtubeMusic from '$lib/assets/icons/epk/icons8-youtube-music.svg';
	import bandcamp from '$lib/assets/icons/epk/icons8-bandcamp.svg';
</script>

<!-- bio -->
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
<!-- release -->
<section class="">
	<p class="section-title">our release</p>
	{#if albums && albums.length}
		<ReleaseCovers {albums} />
		<ReleasePlayers {albums} />
	{/if}
</section>
<!-- stream -->
<section class="pb-8 md:pb-12">
	<p class="section-title">our stream</p>
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
<!-- live  -->
<section class="px-2 pb-8 md:pb-12">
	<p class="section-title">our live</p>
	<LivePhotos />
	<div class="youtubeWrap my-4 sm:w-[40em] md:my-8">
		<iframe
			width="100%"
			height="315"
			src="https://www.youtube-nocookie.com/embed/RbNEV0XCD-A?si=QcH-YTLEMyJBKlkH&amp;start=423"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		/>
	</div>
	<div class="youtubeWrap sm:w-[40em]">
		<iframe
			width="100%"
			height="315"
			src="https://www.youtube-nocookie.com/embed/HhBR0t9zyAY?si=vbWq64LOrPEdLGfF"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		/>
	</div>
	<p class="pb-4 pt-8 text-center font-medium capitalize md:py-8 md:text-lg">recent live</p>
	<LastGigList />
</section>

<style lang="postcss">
	.youtubeWrap {
		@apply mx-auto;
	}
	.section-title {
		@apply py-8 text-center text-lg font-medium capitalize md:text-2xl;
	}
	ul {
		@apply flex justify-center;
	}
	ul li {
		@apply mx-4 w-10;
	}
</style>
