<script lang="ts">
	import { onMount } from 'svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import type { ProductRecord } from '$lib/models/product';
	import { getRecords, getTshirts } from '$lib/services/products';
	import Card from './ProductCard.svelte';
	import { fade } from 'svelte/transition';

	let records: ProductRecord[] = $state([]);
	let tshirts: ProductRecord[] = $state([]);
	onMount(async () => {
		records = await getRecords();
		tshirts = await getTshirts();
	});

	const reduced =
		typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const t = { duration: reduced ? 0 : 150 };
</script>

<PageHead />

<h2 class="pt-8 text-center text-sm font-medium text-neutral-500 uppercase sm:hidden">products</h2>
<section class="mx-auto max-w-sm pt-0 sm:max-w-5xl sm:pt-2">
	<div class="flex flex-col items-center pb-0 sm:flex-row sm:flex-wrap sm:items-stretch sm:pb-16">
		{#if records && records.length}
			{#each records as record}
				<div class="mx-0 my-8 sm:mx-6 sm:my-0 sm:mb-12" transition:fade={t}>
					<Card data={record} />
				</div>
			{/each}
		{/if}
	</div>
	<div class="flex flex-col items-center pt-0 sm:flex-row sm:items-stretch sm:py-16">
		{#if tshirts && tshirts.length}
			{#each tshirts as tshirt}
				<div class="mx-0 my-8 sm:mx-8 sm:my-0" transition:fade={t}>
					<Card data={tshirt} />
				</div>
			{/each}
		{/if}
	</div>
</section>
<section class="flex justify-center">
	<div
		class="font-redhat inline-block px-12 py-8 text-sm font-normal text-neutral-800 lg:px-0 lg:pt-14 lg:pb-36 lg:text-base lg:font-medium"
	>
		<p>If you’d like to get a copy of our albums or merchants,</p>
		<p>
			please drop us a line at
			<a href="mailto:supernapkinsogood@gmail.com" class="text-purple-500"
				>supernapkinsogood@gmail.com</a
			>
		</p>
	</div>
</section>
