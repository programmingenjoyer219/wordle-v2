<script lang="ts">
	import Key from './Key.svelte';
	import {
		currentGridRowNum,
		getCurrentGridRowIdx,
		isGuessCorrect,
		isLevelComplete,
		ranOutOfTries,
		userInput,
		words
	} from '$lib/game.svelte';
	import { allowedKeys, keyboardLayout } from './utils';
	import { isWordValid } from '$lib/words';
	import toast from 'svelte-french-toast';
	import { keyboardLetterStatus } from './keyboard.svelte';

	function onBackspaceClick() {
		if (!isLevelComplete.value) {
			if (userInput.value.length <= 1) {
				userInput.value = '';
			} else {
				userInput.value = userInput.value.slice(0, userInput.value.length - 1);
			}
			words.value[getCurrentGridRowIdx()] = userInput.value;
		}
	}

	function onKeyClick(keyName: string) {
		if (!isLevelComplete.value) {
			if (userInput.value.length < 5) {
				userInput.value += keyName.toUpperCase();
			}
			words.value[getCurrentGridRowIdx()] = userInput.value;
		}
	}

	function onEnterClick() {
		if (!isLevelComplete.value) {
			if (userInput.value.length < 5) {
				toast.error('Please provide a 5 letter word');
			} else if (!isWordValid(userInput.value)) {
				toast.error(`${userInput.value} is not a valid word`);
			} else if (isGuessCorrect() || ranOutOfTries()) {
				isLevelComplete.value = true;
			} else {
				currentGridRowNum.value += 1;
				userInput.value = '';
			}
		}
	}

	function handleKeyDown(evt: KeyboardEvent) {
		var isAllowed = allowedKeys.has(evt.key);
		if (isAllowed) {
			if (evt.key == 'Enter') {
				onEnterClick();
			} else if (evt.key == 'Backspace') {
				onBackspaceClick();
			} else {
				onKeyClick(evt.key);
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
					<Key
						onclick={function handleKeyClick() {
							onKeyClick(keyName);
						}}
						letterStatus={keyboardLetterStatus.value[keyName]}
					>
						{keyName}
					</Key>
				{/each}
			</div>
		{/each}
		<div class="flex justify-center gap-1 min-[440px]:gap-2">
			<Key onclick={onBackspaceClick} letterStatus="none">Backspace</Key>
			<Key onclick={onEnterClick} letterStatus="none">Enter</Key>
		</div>
	</div>
</section>
