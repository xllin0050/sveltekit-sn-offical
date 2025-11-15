<script lang="ts">
	import { run } from 'svelte/legacy';

	import closeIcon from '$lib/assets/icons/close-square-svgrepo-com.svg';
	import { fade, scale } from 'svelte/transition';
	interface Props {
		singlePhotoUrl: string;
		onclose: () => void;
	}

	let { singlePhotoUrl, onclose }: Props = $props();


	const reduced = typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const backdrop = { duration: reduced ? 0 : 150 };
	const modal = { duration: reduced ? 0 : 150, start: 0.98 };

	let hiLoaded = $state(false);
	let previewUrl: string = $state();
	let hi800: string = $state();
	let hi1200: string = $state();
	let hi1600: string = $state();
    let ratio: number = $state(4 / 3); // 預設比例，避免尚未載入前佈局塌陷

	run(() => {
		previewUrl = `${singlePhotoUrl}?thumb=500x375`;
		hi800 = `${singlePhotoUrl}?thumb=800x600`;
		hi1200 = `${singlePhotoUrl}?thumb=1200x900`;
		hi1600 = `${singlePhotoUrl}?thumb=1600x1200`;
		hiLoaded = false;
	});
</script>

<div id="background" onclick={onclose} aria-hidden="true" transition:fade={backdrop}></div>
<div
    id="modal"
    class="relative flex max-h-screen flex-col justify-between rounded-md bg-neutral-50 p-2 md:p-3 uppercase max-w-[92vw]"
    transition:scale={modal}
>
	<div class="absolute right-2 top-2 w-6 bg-neutral-50" onclick={onclose} aria-hidden="true">
		<img src={closeIcon} alt="" />
	</div>
	    <div
        class="relative w-full"
        style={`width: min(92vw, calc(92vh * ${ratio})); max-height: 92vh; aspect-ratio: ${ratio};`}
    >
		        <img
            src={previewUrl}
            alt=""
            aria-hidden="true"
            class="absolute inset-0 h-full w-full object-contain"
            style="filter: blur(12px); transform: scale(1.02);"
            style:opacity={hiLoaded ? 0 : 1}
            onload={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.naturalHeight) ratio = img.naturalWidth / img.naturalHeight;
            }}
        />
		<img
			srcset={`${hi800} 800w, ${hi1200} 1200w, ${hi1600} 1600w`}
			sizes="(min-width: 1280px) 1200px, (min-width: 768px) 900px, 80vw"
			src={hi1200}
			alt=""
			class="absolute inset-0 h-full w-full object-contain"
			decoding="async"
			fetchpriority="high"
			onload={() => (hiLoaded = true)}
			style:opacity={hiLoaded ? 1 : 0}
			style:transition="opacity 150ms ease"
		/>
	</div>
</div>

<style>
	#background {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}

	#modal {
		position: fixed;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		filter: drop-shadow(0 0 20px #333);
	}
</style>
