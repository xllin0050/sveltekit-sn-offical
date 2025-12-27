<h1 class="flex justify-center uppercase md:justify-between">
	{#each 'super napkin'.split('') as char}
		<span class="text-xl md:text-7xl">{char === ' ' ? '\u00A0' : char}</span>
	{/each}
</h1>
