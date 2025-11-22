<script lang="ts">
	import bandcamp from '$lib/assets/icons/epk/icons8-bandcamp.svg';
	import appleMusic from '$lib/assets/icons/epk/icons8-music.svg';
	import spotify from '$lib/assets/icons/epk/icons8-spotify.svg';
	import youtubeMusic from '$lib/assets/icons/epk/icons8-youtube-music.svg';
	import LastGigList from '$lib/components/epk/LastGigList.svelte';
	import LivePhotos from '$lib/components/epk/LivePhotos.svelte';
	import ReleaseCovers from '$lib/components/epk/ReleaseCovers.svelte';
	import ReleasePlayers from '$lib/components/epk/ReleasePlayers.svelte';
	import albums from '$lib/data/discography';
</script>

<!-- bio -->
<article class="w-full sm:mx-auto sm:w-[50ch] lg:w-[80ch]">
	<p class="px-6 text-justify">
		「如果要構思一個超級英雄的故事，我想寫一個叫做紙巾人的角色，能力是好好地聽
		每個心靈受傷的人說話，陪著他們將傷口上的污垢和血淚都擦拭乾淨。」
	</p>
</article>
<!-- release -->
<section>
	<p class="mx-auto px-6 py-4 sm:w-[50ch] lg:w-[80ch]">
		Super Napkin 超級紙巾 2014 年底成團，由黃尾 (Bass/Vocal)、小帕 (Guitar/Vocal)、施霖 (Drum)
		三人組成，至今發行 3 張專輯，2 張 EP，2 張單曲，從 Shoegaze 到 Grunge，Indie Pop 到 Noise
		Experiment， 像是把所有喜歡的音樂攤在桌上，吸收成自己的模樣，染上各種顏色的紙巾。
	</p>

	<ReleaseCovers {albums} />
	<div class="py-4">
		<p class="section-title">stream</p>
		<ul>
			<li>
				<a
					href="https://open.spotify.com/artist/5zqQabBzjxOyA0VkIRjPZw?si=UixVxPwzQ2WfVNw2k10kJA"
					target="_blank"
					rel="noreferrer"
				>
					<img src={spotify} alt="spotify" />
				</a>
			</li>
			<li>
				<a
					href="https://music.apple.com/tw/artist/super-napkin/1387820661"
					target="_blank"
					rel="noreferrer"
				>
					<img src={appleMusic} alt="apple music" />
				</a>
			</li>
			<li>
				<a
					href="https://music.youtube.com/channel/UCeYL_IGXzTMgFIjOzetbTlg?si=yPIg8FpjrMFWv7N5"
					target="_blank"
					rel="noreferrer"
				>
					<img src={youtubeMusic} alt="youtube music" />
				</a>
			</li>
			<li>
				<a href="https://supernapkin.bandcamp.com/" target="_blank" rel="noreferrer">
					<img src={bandcamp} alt="bandcamp" />
				</a>
			</li>
		</ul>
	</div>
	<ReleasePlayers {albums} />
</section>

<!-- live  -->
<section class="px-2 pb-8 md:pb-12">
	<p class="section-title">live gig</p>
	<p class="mx-auto px-4 py-4 text-justify sm:w-[50ch] lg:w-[80ch]">
		至今超過百場演出，參與過包含大港開唱、浪人祭、貴人散步等大型音樂祭。Super Napkin
		多樣的面貌也讓他們成為國外樂團共演，以及台灣友團發片暖場的受邀常客。無論音量大小，超級紙巾都有可以說的故事。他們舉辦過兩小時的專場，未來計畫挑戰三小時。
	</p>
	<p class="mx-auto px-4 pb-4 pt-2 text-justify sm:w-[50ch] lg:w-[80ch]">
		更多資訊，請至<a href="www.supernapkin.com">www.supernapkin.com</a>
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
		></iframe>
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
		></iframe>
	</div>
	<p class="pb-4 pt-8 text-center font-medium capitalize md:py-8 md:text-lg">recent gigs</p>
	<LastGigList />
</section>

<style lang="postcss">
	@reference '../../../app.css';
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
