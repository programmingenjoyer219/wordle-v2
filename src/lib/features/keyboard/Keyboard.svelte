<script lang="ts">
	import { userInput } from '$lib/game.svelte';
	import Key from './Key.svelte';
	import { createClickHandler, handleBackspaceClick } from './utils';

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

	$inspect(userInput.value);

	function handleKeyDown(evt: KeyboardEvent) {
		var isAllowed = allowedKeys.has(evt.key);
		if (isAllowed) {
			if (evt.key == 'Enter') {
			} else if (evt.key == 'Backspace') {
				handleBackspaceClick(userInput)();
			} else {
				createClickHandler(evt.key.toUpperCase())(userInput)();
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
					<Key onclick={createClickHandler(keyName)(userInput)} letterStatus="none">{keyName}</Key>
				{/each}
			</div>
		{/each}
		<div class="flex justify-center gap-1 min-[440px]:gap-2">
			<Key onclick={handleBackspaceClick(userInput)} letterStatus="none">Backspace</Key>
			<Key onclick={() => {}} letterStatus="none">Enter</Key>
		</div>
	</div>
</section>
