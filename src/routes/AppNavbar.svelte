<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import menuIcon from '$lib/assets/icons/menu-04-svgrepo-com.svg';
	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	let isMenuOpen = false;
	const menuSwitch = () => {
		isMenuOpen = !isMenuOpen;
	};
	afterNavigate(() => {
		isMenuOpen = false;
	});
</script>

<nav class="absolute right-2 top-2 block md:hidden">
	<div class="w-8 opacity-70 hover:opacity-100" on:click={menuSwitch} aria-hidden="true">
		<img src={menuIcon} alt="" />
	</div>
</nav>
{#if isMenuOpen}
	<section class="fixed top-0 z-10 flex min-h-screen w-full bg-neutral-50">
		<ul class="pt-10 font-medium uppercase tracking-wider">
			<li>
				<a href="/">home</a>
			</li>
			<li
				on:click={() => {
					isMenuOpen = false;
				}}
				aria-hidden
			>
				<a href="/about">about us</a>
			</li>
			<li>
				<a href="/discography">discography</a>
			</li>
			<li>
				<a href="/gigs">gigs</a>
			</li>
			<li>
				<a href="/videos">videos</a>
			</li>
			<li>
				<a href="/photos">photos</a>
			</li>
			<li>
				<a href="/products">products</a>
			</li>
		</ul>
		<div class="relative grow">
			<figure class="absolute right-6 top-6 w-8" on:click={menuSwitch} aria-hidden="true">
				<img src={closeIcon} alt="" />
			</figure>
		</div>
	</section>
{/if}

<style>
	ul {
		word-spacing: -0.3em;
	}
	ul li {
		padding: 0.75rem 3rem;
	}
	ul li:hover {
		text-decoration-line: underline;
	}
	ul li a {
		display: block;
	}
</style>
