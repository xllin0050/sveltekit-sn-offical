<script lang="ts">
	import { onMount } from 'svelte';
	export let link: string;
	let sp: { [key: string]: string | undefined };
	const endpoint = 'https://open.spotify.com/oembed';
	onMount(() => {
		fetch(`${endpoint}?url=${link}`)
			.then((res) => res.json())
			.then((data) => {
				sp = data;
			});
	});
</script>

<div class="spotify-player">
	{#if sp && Object.keys(sp).length > 0}
		<div class="mb-4 w-full">
			{@html sp.html}
		</div>
	{/if}
</div>
