<h1 class="flex justify-between text-base uppercase lg:text-5xl xl:text-7xl">
	{#each 'super napkin'.split('') as char}
		<span>{char === ' ' ? '\u00A0' : char}</span>
	{/each}
</h1>
