<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	let shihDrum: HTMLElement;
	let yauGtr: HTMLElement;
	let weitingBass: HTMLElement;
	let hiddenCircle = true;
	onMount(() => {
		const nameCircle = (nameText: HTMLElement, position: number) => {
			nameText.innerHTML = nameText.innerText
				.split('')
				.map(
					(char: string, i: number) =>
						`<span style="transform:rotate(${(i + position) * 8}deg)">${char}</span>`
				)
				.join('');
		};
		nameCircle(shihDrum, 15);
		nameCircle(yauGtr, 0);
		nameCircle(weitingBass, 28);
		hiddenCircle = false;
	});

	const membersName = ['shih', 'yau', 'weiting'];
	let nameIndex = 0;
	let backgroundName = 'yau';
	const changeNameTimer = setInterval(() => {
		nameIndex++;
		if (nameIndex === 3) nameIndex = 0;
		backgroundName = membersName[nameIndex];
	}, 1800);
	onDestroy(() => {
		clearInterval(changeNameTimer);
	});
</script>

<div class="pointer-events-none relative my-0 h-[380px] w-full pb-0 lg:h-[615px]">
	<div class="hidden w-full lg:flex lg:items-center lg:justify-center">
		<div
			class="font-redhat relative block h-[480px] w-[480px] translate-y-[70px] rounded-full text-xl font-medium"
			class:opacity-0={hiddenCircle}
		>
			<p
				bind:this={shihDrum}
				class="nameText"
				class:text-neutral-700={backgroundName === 'shih'}
				class:text-neutral-200={backgroundName !== 'shih'}
			>
				shih(drum)
			</p>
			<p
				bind:this={yauGtr}
				class="nameText"
				class:text-neutral-700={backgroundName === 'yau'}
				class:text-neutral-200={backgroundName !== 'yau'}
			>
				yau(gtr)
			</p>
			<p
				bind:this={weitingBass}
				class="nameText"
				class:text-neutral-700={backgroundName === 'weiting'}
				class:text-neutral-200={backgroundName !== 'weiting'}
			>
				weiting(bass)
			</p>
		</div>
	</div>
	{#each membersName as name}
		<div
			class="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg lg:h-[320px] lg:w-[320px] {name}"
			class:opacity-100={name === backgroundName}
			class:opacity-0={name !== backgroundName}
		>
			<div
				class="absolute bottom-4 w-full text-center uppercase tracking-widest text-neutral-50 opacity-100 lg:opacity-0"
			>
				{name}
			</div>
		</div>
	{/each}
</div>

<style>
	@keyframes rotateText {
		0% {
			transform: rotate(360deg);
		}
	}
	.nameText {
		position: absolute;
		width: 100%;
		height: 100%;
		text-transform: uppercase;
		animation: rotateText 24s linear infinite;
	}
	:global(.nameText > span) {
		position: absolute;
		left: 50%;
		transform-origin: 0px 240px;
	}
	.shih {
		background: url('$lib/assets/images/members/shih.jpg');
		background-size: cover;
		background-position: center;
	}
	.yau {
		background: url('$lib/assets/images/members/yau.jpg');
		background-size: cover;
		background-position: left;
	}
	.weiting {
		background: url('$lib/assets/images/members/weiting.jpg');
		background-size: cover;
		background-position: left;
	}
</style>
