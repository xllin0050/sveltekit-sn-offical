<script lang="ts">
	import shihImage from '$lib/assets/images/members/shih.jpg';
	import yauImage from '$lib/assets/images/members/yau.jpg';
	import weitingImage from '$lib/assets/images/members/weiting.jpg';
	import MemberCard from '$lib/components/base/MemberCard.svelte';
	let members = $state([
		{ name: 'shih', image: shihImage, role: 'drums' },
		{ name: 'yau', image: yauImage, role: 'guitar' },
		{ name: 'weiting', image: weitingImage, role: 'bass' }
	]);
</script>

<section class="mx-auto flex max-w-sm flex-wrap justify-center gap-6 py-8">
	{#each members as member}
		<MemberCard name={member.name} image={member.image} role={member.role} />
	{/each}
</section>