<script lang="ts">
	import { onNavigate, afterNavigate } from '$app/navigation';
	import { userLanguage } from '$lib/stores';
	import '../app.css';
	let { children } = $props();

	let currentLanguage = 'zh';
	userLanguage.subscribe((lang) => {
		currentLanguage = lang;
	});

	const prefersReduced =
		typeof window !== 'undefined' &&
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

	if (typeof window !== 'undefined' && currentLanguage === 'zh') {
		const browser = window.navigator.language;
		const zh = ['zh-tw', 'zh-cn', 'zh-hk'];
		if (!zh.includes(browser.toLowerCase())) {
			userLanguage.set('en');
		}
	}
</script>

{@render children()}
