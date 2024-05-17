<script lang="ts">
	export let bcNum: string | undefined;
	export let title: string | undefined;
	export let link: string | undefined;
</script>

<div class="flex w-full flex-col items-center justify-center">
	<iframe
		style="border: 0; width: 350px; height: 470px;"
		src="https://bandcamp.com/EmbeddedPlayer/{bcNum}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/"
		seamless
		title=""
		><a href={link}>{title}</a>
	</iframe>
</div>
