<script lang="ts">
	import { userLanguage } from '$lib/stores';
	import backIcon from '$lib/assets/icons/arrow-back-circle-outline-svgrepo-com.svg';
	import PageHead from '$lib/components/PageHead.svelte';
	import TextSwitch from '$lib/components/TextSwitch.svelte';
	export let data: any;
	const { album } = data;
	let displayText = 'en';
	userLanguage.subscribe((lang) => {
		displayText = lang;
	});
	if (album.desc.en) {
		userLanguage.set('zh');
	}
</script>

<PageHead />

<section class="lg:pt-18 flex flex-col items-center p-12">
	<div class="max-w-xl">
		<div class="shadow">
			<img src={album.cover} alt="" class="w-full" />
		</div>
		<div class=" mb-16">
			<div class="flex items-center justify-between">
				<h1 class="py-10 pb-0 text-lg font-bold uppercase lg:pt-16 lg:pb-4 lg:text-2xl">
					{album.title}
				</h1>
			</div>
			{#if album.desc[displayText]}
				<div class="mb-4 flex justify-end">
					<TextSwitch />
				</div>
			{/if}

			<div class=" max-w-xl pb-14">
				<div
					class="text-xs leading-loose lg:text-sm lg:leading-loose"
					class:text-justify={displayText === 'zh'}
				>
					{#if album.desc[displayText]}
						{album.desc[displayText]}
					{/if}
				</div>
			</div>
			<h3 class="pb-3 text-sm font-medium uppercase text-neutral-600 lg:pb-4 lg:text-base">
				tracks
			</h3>
			<ul>
				{#each Object.entries(album.tracks) as [num, track]}
					<li class="py-2 text-xs text-neutral-800 lg:text-base">
						{num.slice(5)}.{track}
					</li>
				{/each}
			</ul>
			{#if album.note}
				<h3
					class="pb-3 pt-10 text-sm font-medium uppercase text-neutral-600 lg:pb-4 lg:pt-24 lg:text-base"
				>
					credits
				</h3>
				{#each album.note as lineText}
					<p class="py-2 text-xs text-neutral-800 lg:text-sm">
						{lineText}
					</p>
				{/each}
			{/if}
			<h3
				class="pb-3 pt-10 text-sm font-medium uppercase text-neutral-600 lg:pb-4 lg:pt-24 lg:text-base"
			>
				streams
			</h3>
			<ul>
				{#each Object.entries(album.listen) as [host, linkText]}
					<li class="py-2 text-xs text-neutral-800 lg:text-sm">
						<a href={`${linkText}`} target="_blank" class="capitalize">{host}</a>
					</li>
				{/each}
			</ul>
			<a href="/discography" class="mt-24 hidden w-8 sm:block">
				<img src={backIcon} alt="" />
			</a>
		</div>
	</div>
</section>
