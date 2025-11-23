<script lang="ts">
	import fbIcon from '$lib/assets/icons/facebook-rounded-border-svgrepo-com.svg';
	import igIcon from '$lib/assets/icons/instagram-svgrepo-com.svg';
	import mailIcon from '$lib/assets/icons/mail-svgrepo-com.svg';
	import ytIcon from '$lib/assets/icons/youtube-svgrepo-com.svg';
	import '../../app.css';
	import AppNav from './AppNavbar.svelte';
	import ScrollHandler from './ScrollHandler.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Super Napkin Offical</title>
</svelte:head>
<div id="layout" class="font-red-hat">
	<!-- <AppNav /> -->
	<!-- <ScrollHandler /> -->
	<main class="min-h-screen w-full" style="view-transition-name: page" tabindex="-1" data-autofocus>
		{@render children?.()}
	</main>
	<!-- <footer class="mx-auto max-w-(--breakpoint-lg) py-12 font-medium uppercase">
		<ul class="footer-links flex items-center justify-center pt-12">
			<li>
				<a
					href="https://www.facebook.com/SuperNapkin/"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={fbIcon} alt="" />
				</a>
			</li>
			<li>
				<a
					href="https://www.youtube.com/channel/UCla5IDvJMbZdiiEuhJyh-1Q"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={ytIcon} alt="" />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/super_napkin/"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={igIcon} alt="" />
				</a>
			</li>
			<li>
				<a
					href="mailto:supernapkinsogood@gmail.com"
					target="_blank"
					rel="noreferrer"
					class="block w-6"
				>
					<img src={mailIcon} alt="" />
				</a>
			</li>
		</ul>
		<div class="flex items-center justify-center pt-8 text-sm text-neutral-700">
			<span class="px-1">&copy;</span>
			{new Date().getFullYear()} Super Napkin
		</div>
	</footer> -->
</div>

<style lang="postcss">
	@reference '../../app.css';
	:global(.footer-links li) {
		@apply mx-4 text-neutral-700 hover:text-neutral-900;
	}
</style>
