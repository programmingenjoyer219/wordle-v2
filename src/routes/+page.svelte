<script>
	import { game } from '$lib/features/game/game.svelte';
	import Kbd from '$lib/features/keyboard/Kbd.svelte';
	import { kbd } from '$lib/features/keyboard/kbd.svelte';
	import { appSettings } from '$lib/features/menu/app-settings.svelte';
	import WordGrid from '$lib/features/word-grid/WordGrid.svelte';
</script>

<WordGrid
	attempts={game.attempts}
	attemptNum={game.attemptNum}
	levelCompleted={game.levelCompleted}
	answer={game.answer} />

<Kbd
	levelCompleted={game.levelCompleted}
	bind:guess={game.guess}
	bind:attempts={game.attempts}
	bind:attemptNum={game.attemptNum}
	onscreenKbdOnly={appSettings.onscreenKbdOnly}
	bind:kbdKeyStatus={kbd.kbdKeyStatus} />
