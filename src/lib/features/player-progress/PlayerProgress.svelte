<script>
	import { gameLevel, gamePoints } from './playerProgress.svelte';
</script>

<div class="flex items-center">
	<div class="flex items-center gap-1 px-3 py-1">
		<i class="ri-gamepad-line ri-2x"></i>
		<p class="text-sm font-bold">Lv-{gameLevel.value}</p>
	</div>

	<div class="flex items-center gap-1 px-3 py-1">
		<i class="ri-focus-2-line ri-2x"></i>
		<p class="text-sm font-bold">{gamePoints.value}-pts</p>
	</div>
</div>
