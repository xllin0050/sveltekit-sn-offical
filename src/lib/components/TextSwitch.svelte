<script lang="ts">
	import translateIcon from '$lib/assets/icons/translate-svgrepo-com.svg';
	import { userLanguage } from '$lib/stores';
	let target: string;
	userLanguage.subscribe((lang) => {
		target = lang;
	});
	const switchLang = () => {
		if (target === 'zh') {
			userLanguage.set('en');
			return;
		}
		userLanguage.set('zh');
	};
</script>

<button class="w-8" on:click={switchLang} aria-hidden="true">
	<img src={translateIcon} alt="" />
</button>
