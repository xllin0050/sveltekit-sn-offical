<script lang="ts">
	export let data: { [key: string]: any };
</script>

<div class="py-2">Size Guide (CM)</div>
<div class="flex justify-center">
	<ul>
		{#each Object.entries(data) as [sizeName, sizeNum]}
			<li class="flex py-2">
				<div class="w-6 uppercase">{sizeName}</div>
				{#each Object.entries(sizeNum) as [part, num]}
					<div class="flex px-2">
						{num}
					</div>
				{/each}
			</li>
		{/each}
	</ul>
</div>
