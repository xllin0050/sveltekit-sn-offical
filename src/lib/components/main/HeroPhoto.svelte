<script lang="ts">
	import heroPhoto from '$lib/assets/images/2020_07_25_07_r0iK2C78PJ.jpg';

	let members = $state([
		{ name: 'weiting', role: 'bass', width: '36%' },
		{ name: 'shih', role: 'drums', width: '30%' },
		{ name: 'yau', role: 'guitar', width: '34%' }
	]);
</script>

<div class="max-w-hero relative mx-auto overflow-hidden">
	<img src={heroPhoto} alt="Super Napkin" class="block w-full object-cover" />

	<!-- Hover Zones -->
	<div class="absolute inset-0 flex">
		{#each members as member}
			<div class="group relative h-full" style="width: {member.width}">
				<!-- Dark Overlay -->
				<div
					class="pointer-events-none absolute inset-0 bg-neutral-900/0 transition-colors duration-500 ease-out group-hover:bg-neutral-900/55"
				></div>

				<!-- Member Info -->
				<div
					class="pointer-events-none absolute inset-0 flex flex-col items-center justify-between p-4 py-8 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 lg:p-8 lg:py-12"
				>
					<h3
						class="w-full text-center text-[clamp(1rem,2vw,2.5rem)] leading-none tracking-normal text-white uppercase"
					>
						{member.name}
					</h3>
					<p
						class="inline-flex items-center justify-center rounded-full bg-white/15 px-3 py-1 text-center text-[clamp(0.6rem,1.5vw,0.9rem)] font-normal tracking-[0.35em] text-white uppercase backdrop-blur-sm"
					>
						{member.role}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
