<script lang="ts">
	import facebook from '$lib/assets/icons/epk/icons8-facebook.svg';
	import instagram from '$lib/assets/icons/epk/icons8-instagram.svg';
	import youtube from '$lib/assets/icons/epk/icons8-youtube-logo.svg';
	import offical from '$lib/assets/images/napkin-logo.svg';
	import '../../app.css';
</script>

<svelte:head>
	<title>Super Napkin EPK</title>
</svelte:head>

<div id="epk" class="font-red-hat" style="view-transition-name: page" tabindex="-1" data-autofocus>
	<div class="band-picture h-[15em] w-full lg:h-[30em]" />
	<h1
		class="py-8 text-center text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:py-12 lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
	<slot />
	<footer class="footer py-8">
		<p class="pb-8 text-center font-medium capitalize">links</p>
		<ul>
			<li>
				<a href="https://www.instagram.com/super_napkin/" target="_blank" rel="noreferrer">
					<img src={instagram} alt="instagram" />
				</a>
			</li>
			<li>
				<a href="https://www.supernapkin.com" target="_blank" rel="noreferrer">
					<img src={offical} alt="offical site" class="h-[40px]" />
				</a>
			</li>
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
		</ul>
		<p class="pb-4 pt-8 text-center font-medium capitalize">contact</p>
		<div class="flex justify-center pb-8">
			<a href="mailto:supernapkinsogood@gmail.com" target="_blank" rel="noreferrer"
				>supernapkinsogood@gmail.com</a
			>
		</div>
	</footer>
</div>

<style lang="postcss">
	.band-picture {
		background-image: url('$lib/assets/images/band-image-2022.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}
	ul {
		@apply flex justify-center;
	}
	ul li {
		@apply mx-4 w-10;
	}
</style>
