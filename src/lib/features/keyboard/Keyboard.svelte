<script lang="ts">
	import Key from './Key.svelte';
	import { currentGridRowNum, getCurrentGridRowIdx, userInput, words } from '$lib/game.svelte';
	import { updateWord } from './utils';
	import { createClickHandler, handleBackspaceClick, handleEnterClick } from './utils';

	const keyboardLayout = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M']
	];

	const allowedKeys = new Set([
		'q',
		'w',
		'e',
		'r',
		't',
		'y',
		'u',
		'i',
		'o',
		'p',
		'a',
		's',
		'd',
		'f',
		'g',
		'h',
		'j',
		'k',
		'l',
		'z',
		'x',
		'c',
		'v',
		'b',
		'n',
		'm',
		'Enter',
		'Backspace'
	]);

	// $inspect({ input: userInput.value, row: currentGridRowNum.value });

	function onBackspaceClick() {
		handleBackspaceClick(userInput)();
		updateWord(words, getCurrentGridRowIdx(), userInput.value);
	}

	function onKeyClick(keyName: string) {
		return function keyClickHandler() {
			createClickHandler(keyName.toUpperCase())(userInput)();
			updateWord(words, getCurrentGridRowIdx(), userInput.value);
		};
	}

	function handleKeyDown(evt: KeyboardEvent) {
		var isAllowed = allowedKeys.has(evt.key);
		if (isAllowed) {
			if (evt.key == 'Enter') {
				handleEnterClick(currentGridRowNum)(userInput)();
			} else if (evt.key == 'Backspace') {
				onBackspaceClick();
			} else {
				onKeyClick(evt.key)();
			}
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

<section class="mb-2">
	<div class="grid grid-rows-3 gap-2">
		{#each keyboardLayout as keyboardRow, rowIdx (rowIdx)}
			<div class="flex justify-center gap-1 min-[440px]:gap-2">
				{#each keyboardRow as keyName, keyIdx (keyIdx)}
					<Key onclick={onKeyClick(keyName)} letterStatus="none">{keyName}</Key>
				{/each}
			</div>
		{/each}
		<div class="flex justify-center gap-1 min-[440px]:gap-2">
			<Key onclick={onBackspaceClick} letterStatus="none">Backspace</Key>
			<Key onclick={handleEnterClick(currentGridRowNum)(userInput)} letterStatus="none">Enter</Key>
		</div>
	</div>
</section>
