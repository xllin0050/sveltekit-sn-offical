<script lang="ts">
	import { onNavigate, afterNavigate } from '$app/navigation';
	import '../app.css';
	let { children } = $props();

	const prefersReduced = typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	onNavigate((navigation) => {
		if (prefersReduced || !document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate(() => {
		const to_focus = document.querySelector('[data-autofocus]') as HTMLElement | null;
		to_focus?.focus();
	});
</script>

{@render children()}
