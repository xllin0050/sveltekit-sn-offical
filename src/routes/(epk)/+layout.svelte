<script lang="ts">
	import '../../app.css';
	import facebook from '$lib/assets/icons/epk/icons8-facebook.svg';
	import youtube from '$lib/assets/icons/epk/icons8-youtube-logo.svg';
	import instagram from '$lib/assets/icons/epk/icons8-instagram.svg';
	import mail from '$lib/assets/icons/epk/icons8-mail.svg';
	import appleMusic from '$lib/assets/icons/epk/icons8-music.svg';
	import spotify from '$lib/assets/icons/epk/icons8-spotify.svg';
	import youtubeMusic from '$lib/assets/icons/epk/icons8-youtube-music.svg';
	import bandcamp from '$lib/assets/icons/epk/icons8-bandcamp.svg';
</script>

<svelte:head>
	<title>Super Napkin EPK</title>
</svelte:head>

<div id="epk" class="font-red-hat">
	<h1
		class="pt-4 text-center text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:pt-12 lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
	<slot />
	<section class="steaming">
		<p class="pb-8 text-center font-medium capitalize">our streaming</p>
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
	<footer class="footer pt-8">
		<p class="pb-8 text-center font-medium capitalize">more about us</p>
		<ul>
			<li>
				<a href="https://www.facebook.com/SuperNapkin/" target="_blank" rel="noreferrer">
					<img src={facebook} alt="facebook" />
				</a>
			</li>
			<li>
				<a
					href="https://www.youtube.com/channel/UCla5IDvJMbZdiiEuhJyh-1Q"
					target="_blank"
					rel="noreferrer"
				>
					<img src={youtube} alt="youtube" />
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/super_napkin/" target="_blank" rel="noreferrer">
					<img src={instagram} alt="band logo" />
				</a>
			</li>
			<li>
				<a href="mailto:supernapkinsogood@gmail.com" target="_blank" rel="noreferrer">
					<img src={mail} alt="band logo" />
				</a>
			</li>
		</ul>
	</footer>
</div>

<style lang="postcss">
	ul {
		@apply flex justify-center;
	}
	ul li {
		@apply mx-4 w-10;
	}
</style>
