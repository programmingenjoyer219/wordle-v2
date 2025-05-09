<script>
	import { game } from '$lib/features/game/game.svelte';
	import Progress from '$lib/features/game/Progress.svelte';
	import { appSettings } from '$lib/features/menu/app-settings.svelte';
	import Guide from '$lib/features/menu/Guide.svelte';
	import Settings from '$lib/features/menu/Settings.svelte';
</script>

<header class="mb-2 border-b-2 border-gray-200/75 dark:border-gray-600/75">
	<div class="flex items-center justify-between gap-2">
		<Progress
			level={game.playerStats.level}
			points={game.playerStats.points} />
		<div class="flex items-center gap-2">
			<Guide />
			<Settings
				bind:darkTheme={appSettings.darkTheme}
				bind:onscreenKbdOnly={appSettings.onscreenKbdOnly} />
		</div>
	</div>
</header>
