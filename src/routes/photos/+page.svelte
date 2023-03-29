<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { photoUrls } = data;
	console.log(photoUrls);
</script>

<PageHead />
