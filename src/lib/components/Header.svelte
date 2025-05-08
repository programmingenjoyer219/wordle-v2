<script>
	import Progress from '$lib/features/game/Progress.svelte';
	import HowToPlay from '$lib/features/how-to-play/HowToPlay.svelte';
	import AppSettings from '$lib/features/settings/AppSettings.svelte';
</script>

<header class="mb-2 border-b-2 border-gray-200/75 dark:border-gray-600/75">
	<div class="flex items-center justify-between gap-2">
		<Progress />
		<div class="flex items-center gap-2">
			<HowToPlay />
			<AppSettings />
		</div>
	</div>
</header>
