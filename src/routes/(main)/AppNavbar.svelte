<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import menuIcon from '$lib/assets/icons/menu-04-svgrepo-com.svg';
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';

	let isMenuOpen = $state(false);
	const menuSwitch = () => {
		isMenuOpen = !isMenuOpen;
	};
	afterNavigate(() => {
		isMenuOpen = false;
	});

	const navLinks = [
		{ href: '/', text: 'home' },
		{ href: '/about', text: 'about us' },
		{ href: '/discography', text: 'discography' },
		{ href: '/gigs', text: 'gigs' },
		{ href: '/videos', text: 'videos' },
		{ href: '/photos', text: 'photos' },
		{ href: '/products', text: 'products' }
	];
</script>

<nav class="sticky top-0 z-50 flex w-full flex-col bg-white/90 md:hidden">
	<div class="border-b border-neutral-200 py-2">
		<div class="flex items-center justify-center">
			<button
				onclick={menuSwitch}
				class="flex items-center rounded px-2 py-1 transition-all duration-200"
				class:bg-neutral-200={isMenuOpen}
			>
				<span class="text-sm uppercase">Menu</span>
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<ul transition:slide={{ duration: 300 }} class="flex flex-col bg-white">
			{#each navLinks as link}
				<li class="border-b border-neutral-100">
					<a
						href={link.href}
						class="block py-2 pl-8 text-sm font-light uppercase hover:bg-neutral-50"
					>
						{link.text}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
