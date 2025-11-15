<script lang="ts">
	interface Props {
		bcNum: string | undefined;
		title: string | undefined;
	}

	let { bcNum, title }: Props = $props();
</script>

<div class="flex w-full flex-col items-center justify-center">
	{#if bcNum}
		<iframe
			style="border: 0; width: 350px; height: 470px;"
			src={`https://bandcamp.com/EmbeddedPlayer/${bcNum}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/`}
			seamless
			title={title ?? ''}
		></iframe>
	{/if}
</div>
