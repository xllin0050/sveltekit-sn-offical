<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Card from './ProductCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { records, tshirts } = data;
</script>

<PageHead />
<section class="mx-auto max-w-sm pt-4 sm:max-w-5xl sm:pt-0">
	<div class="flex flex-col items-center pb-0 sm:flex-row sm:flex-wrap sm:items-stretch sm:pb-16">
		{#each records as record}
			<div class="mx-0 my-8 sm:my-0 sm:mx-6 sm:mb-12">
				<Card data={record} />
			</div>
		{/each}
	</div>
	<div class="flex flex-col items-center pt-0 sm:flex-row sm:items-stretch sm:py-16">
		{#each tshirts as tshirt}
			<div class="mx-0 my-8 sm:my-0 sm:mx-8">
				<Card data={tshirt} />
			</div>
		{/each}
	</div>
</section>
<section class="flex justify-center">
	<div
		class="font-redhat inline-block py-8 px-12 text-sm font-normal text-neutral-800 lg:px-0 lg:pb-36 lg:pt-14 lg:text-base lg:font-medium"
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
