<script lang="ts">
	import fbIcon from '$lib/assets/icons/facebook-rounded-border-svgrepo-com.svg';
	import igIcon from '$lib/assets/icons/instagram-svgrepo-com.svg';
	import mailIcon from '$lib/assets/icons/mail-svgrepo-com.svg';
	import ytIcon from '$lib/assets/icons/youtube-svgrepo-com.svg';

	const socialLinks = [
		{
			href: 'https://www.facebook.com/SuperNapkin/',
			icon: fbIcon,
			alt: 'Facebook'
		},
		{
			href: 'https://www.youtube.com/channel/UCla5IDvJMbZdiiEuhJyh-1Q',
			icon: ytIcon,
			alt: 'YouTube'
		},
		{
			href: 'https://www.instagram.com/super_napkin/',
			icon: igIcon,
			alt: 'Instagram'
		},
		{
			href: 'mailto:supernapkinsogood@gmail.com',
			icon: mailIcon,
			alt: 'Email'
		}
	];
</script>

<footer class="py-8 uppercase">
	<ul class="footer-links flex items-center justify-center pt-2">
		{#each socialLinks as link}
			<li class="mx-2">
				<a
					href={link.href}
					target="_blank"
					rel="noreferrer"
					class="block w-6 opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100"
				>
					<img src={link.icon} alt={link.alt} />
				</a>
			</li>
		{/each}
	</ul>
	<div class="flex items-center justify-center pt-4 text-base font-light">
		<span class="px-1">&copy;</span>
		{new Date().getFullYear()} Super Napkin
	</div>
</footer>

<style></style>
