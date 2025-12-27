<script lang="ts">
	import '../../app.css';
	import AppNav from './AppNavbar.svelte';
	import AppFooter from './AppFooter.svelte';
	import ScrollHandler from './ScrollHandler.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Super Napkin Offical</title>
</svelte:head>
<div id="layout" class="font-sans">
	<AppNav />
	<ScrollHandler />
	<main class="grow" style="view-transition-name: page" tabindex="-1" data-autofocus>
		{@render children?.()}
	</main>
	<AppFooter />
</div>

<style>
	#layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
		/* display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        "main"
        "contact"
        "footer"; */
	}
</style>
