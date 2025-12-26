<script lang="ts">
	let { name, image, role } = $props<{
		name: string;
		image: string;
		role: string;
	}>();

	let nameChars = $derived(name.toUpperCase().split(''));
</script>

<div class="member-card group relative overflow-hidden rounded-md">
	<img
		src={image}
		alt={name}
		class="block aspect-square w-full object-cover duration-500 ease-out"
	/>
	<div
		class="pointer-events-none absolute inset-0 bg-neutral-900/0 transition-colors duration-500 ease-out group-hover:bg-neutral-900/55"
	></div>
	<div
		class="pointer-events-none absolute inset-0 flex flex-col items-center justify-between p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
	>
		<h3
			class="w-full text-[clamp(1.25rem,6vw,2.75rem)] leading-none tracking-normal text-white uppercase"
		>
			<span class="mx-auto flex w-[88%] justify-between" aria-label={name.toUpperCase()}>
				{#each nameChars as ch}
					<span>{ch}</span>
				{/each}
			</span>
		</h3>
		<p
			class="inline-flex items-center justify-center rounded-full bg-white/15 px-3 py-1 text-center text-[clamp(0.7rem,2.2vw,1rem)] leading-none font-medium tracking-[0.35em] text-white uppercase backdrop-blur-sm"
		>
			{role}
		</p>
	</div>
</div>
