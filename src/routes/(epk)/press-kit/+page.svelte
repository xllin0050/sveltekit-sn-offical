<script lang="ts">
	import bandcamp from '$lib/assets/icons/epk/icons8-bandcamp.svg';
	import appleMusic from '$lib/assets/icons/epk/icons8-music.svg';
	import spotify from '$lib/assets/icons/epk/icons8-spotify.svg';
	import youtubeMusic from '$lib/assets/icons/epk/icons8-youtube-music.svg';
	import albums from '$lib/data/discography';
	import LastGigList from './LastGigList.svelte';
	import LivePhotos from './LivePhotos.svelte';
	import ReleaseCovers from './ReleaseCovers.svelte';
	import ReleasePlayers from './ReleasePlayers.svelte';
</script>

<!-- bio -->
<article class="w-full sm:mx-auto sm:w-[50ch] lg:w-[80ch]">
	<p class="px-6 text-justify">
		Super Napkin is a fuzz-pop trio hailing from Taiwan. As 80’s kids born in the Taipei Basin, the
		drone of motorbikes comprised our early childhood ‘soundtrack’. So when we came of age in the
		Soulseek 56k baud modem era, it made perfect sense for we to fall in love with the equally
		droney sounds of Yo La Tengo, Sonic Youth, Eric's Trip, The Microphones, and My Bloody
		Valentine.
	</p>
</article>
<!-- release -->
<section>
	<p class="section-title">our released</p>
	<p class="mx-auto px-6 pb-4 sm:w-[50ch] lg:w-[80ch]">
		Since 2016, we’ve released 3 full length albums, 2 EPs. and 2 singles.
	</p>
	{#if albums && albums.length}
		<ReleaseCovers {albums} />
		<ReleasePlayers {albums} />
	{/if}
</section>
<!-- stream -->
<section class="pb-4 md:pb-12">
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
	<p class="section-title">our live gig</p>
	<p class="mx-auto px-4 text-justify sm:w-[50ch] lg:w-[80ch]">
		With the experience of over a hundred shows and the musicality that covers lots of ground, Super
		Napkin has become the opening act of choice for overseas bands who still use distortion pedals
		and the wedding band for local band friends who can't afford to hire someone better.
	</p>
	<p class="mx-auto px-4 py-4 text-justify sm:w-[50ch] lg:w-[80ch]">
		They’ve played major festivals in Taiwan, such as Megaport, Vegabond, and LUCfest.
	</p>
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
	<p class="pb-4 pt-8 text-center font-medium capitalize md:py-8 md:text-lg">recent gigs</p>
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
