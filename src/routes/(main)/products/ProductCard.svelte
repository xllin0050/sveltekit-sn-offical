<script lang="ts">
	import SizeGuide from './SizeGuide.svelte';
	export let data: { [key: string]: any };
	const pictureUrl = `${import.meta.env.VITE_POCKETBASE}/api/files/${data.collectionName}/${
		data.id
	}/${data.picture}`;
</script>

<div
	class="card-shadow hover:card-shadow-elev flex h-full w-[280px] flex-col justify-start rounded-lg bg-neutral-50"
>
	<div class="mx-auto min-h-[280px] w-full p-2 sm:p-4">
		<img src={pictureUrl} alt="super napkin goods" />
	</div>
	<div class="font-redhat flex flex-col pb-4 text-center text-xs font-medium">
		<div class="py-4 capitalize">
			{data.itemname}
		</div>
		{#if data.itemformat}
			<div class="pb-4">
				Format: {data.itemformat}
			</div>
		{/if}
		{#if data.itemsize}
			<SizeGuide data={data.itemsize} />
		{/if}
		{#if data.itemnote}
			<div class="pl-4 pt-8 text-left sm:pt-12">
				<div class="pb-2">Notice:</div>
				{#each Object.entries(data.itemnote) as [line, text]}
					<div class="pb-2">{text}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
