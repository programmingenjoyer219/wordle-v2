<script>
	import Keyboard from '$lib/features/keyboard/Keyboard.svelte';
	import WordGrid from '$lib/features/word-grid/WordGrid.svelte';
	import { solutionWord } from '$lib/game.svelte';

	$inspect(solutionWord.value);
</script>

<WordGrid />
<Keyboard />
