<script lang="ts">
	import enterIcon from '$lib/assets/icons/enter-svgrepo-com.svg';
	import PageHead from '$lib/components/PageHead.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { videos } = data;
	let currentId: string = '';
</script>

<PageHead />
<section>
	<ul class="mx-auto max-w-3xl sm:pt-0 lg:mt-16">
		{#each videos as video}
			<li class="pb-0 px-8 lg:mb-28">
				<h3 class="pt-10 pb-3 text-center text-xs font-medium lg:pb-6 lg:text-left lg:text-base">
					{video.title}
				</h3>
				<div
					class="relative"
					on:mouseenter={() => {
						currentId = video.id;
					}}
					on:mouseleave={() => {
						currentId = '';
					}}
				>
					<img src={video.snapshot} alt="" class="card-shadow bg-white" />
					{#if currentId === video.id}
						<div
							class=" absolute top-0 flex h-full w-full items-center justify-center bg-neutral-700/60"
						>
							<div class="w-28 invert">
								<img src={enterIcon} alt="" />
							</div>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
