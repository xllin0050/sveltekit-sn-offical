<script lang="ts">
	import '../app.css';
	import Scrollbar from 'smooth-scrollbar';
	import { onMount } from 'svelte';
	let scrollArea!: HTMLElement;
	onMount(() => {
		Scrollbar.init(scrollArea, { alwaysShowTracks: true });
	});
</script>

<div bind:this={scrollArea} id="layout" class="font-red-hat">
	<slot />
</div>

<style>
	#layout {
		width: 100%;
		height: 100vh;
	}
</style>
