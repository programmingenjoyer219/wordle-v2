<script>
	import { game, playerStats } from '$lib/features/game/game.svelte';
	import { kbd } from '$lib/features/keyboard/kbd.svelte';
	import { appSettings } from '$lib/features/menu/app-settings.svelte';
	import Keyboard from '$lib/features/keyboard/Keyboard.svelte';
	import WordGrid from '$lib/features/word-grid/WordGrid.svelte';
	import localforage from 'localforage';
	import { onMount } from 'svelte';

	onMount(function loadSavedState() {
		localforage
			.getItem('wordle-player-stats')
			.then(function initPlayerStats(value) {
				if (value == null) throw new Error('wordle-player-stats save state not found');
				playerStats.init(value);
			})
			.catch(console.error.bind(console));

		localforage
			.getItem('wordle-game')
			.then(function initGame(value) {
				if (value == null) throw new Error('wordle-game save state not found');
				game.init(value);
			})
			.catch(console.error.bind(console));

		localforage
			.getItem('wordle-kbd')
			.then(function initKbd(value) {
				if (value == null) throw new Error('wordle-kbd save state not found');
				kbd.init(value);
			})
			.catch(console.error.bind(console));

		localforage
			.getItem('wordle-app-settings')
			.then(function initAppSettings(value) {
				if (value == null) throw new Error('wordle-app-settings save state not found');
				appSettings.init(value);
			})
			.catch(console.error.bind(console));
	});

	$effect(function saveState() {
		localforage.setItem('wordle-player-stats', playerStats.snapshot());
		localforage.setItem('wordle-game', game.snapshot());
		localforage.setItem('wordle-kbd', kbd.snapshot());
		localforage.setItem('wordle-app-settings', appSettings.snapshot());
	});
</script>

<WordGrid
	attempts={game.attempts}
	attemptNum={game.attemptNum}
	levelCompleted={game.levelCompleted}
	answer={game.answer}
	syncKeyStatus={kbd.syncKeyStatus.bind(kbd)} />

<Keyboard
	bind:levelCompleted={game.levelCompleted}
	levelPassed={game.levelPassed}
	bind:guess={game.guess}
	bind:attempts={game.attempts}
	bind:attemptNum={game.attemptNum}
	onscreenKbdOnly={appSettings.onscreenKbdOnly}
	bind:kbdKeyStatus={kbd.kbdKeyStatus} />
