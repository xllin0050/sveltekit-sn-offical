<script lang="ts">
	import '../../app.css';
	import facebook from '$lib/assets/icons/epk/icons8-facebook.svg';
	import youtube from '$lib/assets/icons/epk/icons8-youtube-logo.svg';
	import instagram from '$lib/assets/icons/epk/icons8-instagram.svg';
	import mail from '$lib/assets/icons/epk/icons8-mail.svg';
</script>

<svelte:head>
	<title>Super Napkin EPK</title>
</svelte:head>

<div id="epk" class="font-red-hat">
	<div class="band-picture h-[15em] w-full lg:h-[30em]" />
	<h1
		class="py-4 text-center text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:py-12 lg:text-7xl lg:tracking-[.3em]"
	>
		super napkin
	</h1>
	<slot />

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
