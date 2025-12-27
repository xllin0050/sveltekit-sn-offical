<script lang="ts">
	import { navigating } from '$app/state';
	import { goto } from '$app/navigation';
	import upArrowIcon from '$lib/assets/icons/up-arrow-circle-svgrepo-com.svg';
	import leftArrowIcon from '$lib/assets/icons/left-arrow-circle-svgrepo-com.svg';

	// 使用 $state 追蹤視窗狀態
	let scrollY = $state(0);
	let innerHeight = $state(0);

	// 使用 $derived 自動計算是否顯示
	let showButtons = $derived(scrollY > innerHeight / 2);

	let previousPage: string | null = $state(null);

	$effect(() => {
		if (navigating?.from) {
			previousPage = navigating.from.url.pathname;
		}
	});

	// --- 相容性高的平滑滾動函式 ---
	function smoothScrollToTop() {
		const startPosition = scrollY;
		const duration = 500; // 動畫時間 (毫秒)
		let startTime: number | null = null;

		function animation(currentTime: number) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;

			// Ease-out Cubic 緩動效果，讓滾動感覺更自然
			const progress = 1 - Math.pow(1 - Math.min(timeElapsed / duration, 1), 3);

			window.scrollTo(0, startPosition * (1 - progress));

			if (timeElapsed < duration) {
				requestAnimationFrame(animation);
			}
		}

		requestAnimationFrame(animation);
	}

	function goBack() {
		if (previousPage) {
			goto(previousPage);
		}
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<!-- 
  pointer-events-none: 避免隱藏時誤觸
-->
<div
	class="fixed bottom-5 z-10 flex flex-col items-end transition-opacity duration-300 sm:hidden"
	class:opacity-0={!showButtons}
	class:pointer-events-none={!showButtons}
>
	<button
		type="button"
		class="mb-2 ml-2 w-8 rounded-full bg-white"
		onclick={smoothScrollToTop}
		aria-label="scroll to top"
	>
		<img src={upArrowIcon} alt="Scroll to top" />
	</button>

	{#if previousPage}
		<button
			type="button"
			class="mb-2 ml-2 w-8 rounded-full bg-white"
			onclick={goBack}
			aria-label="back to previous page"
		>
			<img src={leftArrowIcon} alt="Go back" />
		</button>
	{/if}
</div>
