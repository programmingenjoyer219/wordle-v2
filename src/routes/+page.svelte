<script>
	import Keyboard from '$lib/features/keyboard/Keyboard.svelte';
	import WordGrid from '$lib/features/word-grid/WordGrid.svelte';
	import { loadGameSaveState, saveGameProgress, setGameStateToSavedProgress } from '$lib/utils';
	import { onMount } from 'svelte';

	onMount(function onPageMount() {
		loadGameSaveState()
			.then(setGameStateToSavedProgress)
			.catch(function handleError(err) {
				console.error('Failed to load game state', err);
			});
	});

	$effect(function sideEffect() {
		saveGameProgress()
			.then(function logSuccessMsg() {
				console.log('Game state saved successfully');
			})
			.catch(function handleError(err) {
				console.error('Failed to save game', err);
			});
	});
</script>

<WordGrid />
<Keyboard />
