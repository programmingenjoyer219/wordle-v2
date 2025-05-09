<script lang="ts">
	interface Props {
		level: number;
		points: number;
	}

	var { level = 1, points = 0 }: Props = $props();
</script>

<div class="flex items-center">
	{@render ProgressInfo({ iconClass: 'ri-gamepad-line', info: `Lv-${level}` })}
	{@render ProgressInfo({ iconClass: 'ri-focus-2-line', info: `${points}-pts` })}
</div>

{#snippet ProgressInfo({ iconClass, info }: { iconClass: string; info: string })}
	<div class="flex items-center gap-1 px-3 py-1">
		<i
			aria-hidden="true"
			class="{iconClass} ri-2x"></i>
		<p class="text-sm font-bold">{info}</p>
	</div>
{/snippet}
