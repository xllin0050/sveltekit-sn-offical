<script lang="ts">
	import backIcon from '$lib/assets/icons/arrow-back-circle-outline-svgrepo-com.svg';
	import PageHead from '$lib/components/PageHead.svelte';
	export let data: any;
	const { album } = data;
</script>

<PageHead />

<section class="w-full pt-0 lg:pt-20">
	<div class="font-redhat flex flex-col p-12 lg:pt-0">
		<div class="mx-auto mb-3 max-w-xl lg:mb-4">
			<img src={album.cover} alt="" class="w-full" />
		</div>

		<div class="mx-auto mb-16">
			<h1 class="py-10 pb-14 text-lg font-bold uppercase lg:py-16 lg:text-2xl">
				{album.title}
			</h1>
			<!-- <div class="max-w-xl pb-14">
				<LangSwitch v-if="albumData.desc.en" />
				<div
					class="text-xs leading-loose lg:text-sm lg:leading-loose"
					:clsss="userLang === 'zh' ? 'text-justify' : ''"
				>
					{{ albumData.desc[userLang] || albumData.desc.zh }}
				</div>
			</div> -->
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
					class="pt-10 pb-3 text-sm font-medium uppercase text-neutral-600 lg:pt-24 lg:pb-4 lg:text-base"
				>
					credits
				</h3>
				{#each album.note as lineText}
					<p class="py-2 text-xs text-neutral-800 lg:text-base">
						{lineText}
					</p>
				{/each}
			{/if}
			<h3
				class="pt-10 pb-3 text-sm font-medium uppercase text-neutral-600 lg:pt-24 lg:pb-4 lg:text-base"
			>
				streams
			</h3>
			<ul>
				{#each Object.entries(album.listen) as [host, linkText]}
					<li class="py-2 text-xs text-neutral-800 lg:text-base">
						<a href={`${linkText}`} target="_blank" class="capitalize">{host}</a>
					</li>
				{/each}
			</ul>
			<a href="/discography" class="mt-24 block w-8">
				<img src={backIcon} alt="" />
			</a>
		</div>
	</div>
</section>
