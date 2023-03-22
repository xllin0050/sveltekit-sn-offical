<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import fbIcon from '$lib/assets/icons/facebook-rounded-border-svgrepo-com.svg';
	import igIcon from '$lib/assets/icons/instagram-svgrepo-com.svg';
	import ytIcon from '$lib/assets/icons/youtube-svgrepo-com.svg';
	import mailIcon from '$lib/assets/icons/mail-svgrepo-com.svg';

	onMount(() => {});
</script>

<div id="layout" class="font-red-hat">
	<main class="w-full min-h-screen">
		<slot />
	</main>
	<footer class="max-w-screen-lg mx-auto py-12 font-medium uppercase">
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
	</footer>
</div>
