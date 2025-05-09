<script lang="ts">
	import toast from 'svelte-french-toast';
	import KbdKey from './KbdKey.svelte';
	import { isWordValid } from '$lib/words';
	import type { KbdKeyStatus } from './kbd.svelte';

	interface Props {
		levelCompleted: boolean;
		guess: string;
		attempts: string[];
		attemptNum: number;
		onscreenKbdOnly: boolean;
		kbdKeyStatus: KbdKeyStatus;
	}

	var {
		levelCompleted,
		guess = $bindable(),
		attempts = $bindable(),
		attemptNum = $bindable(),
		onscreenKbdOnly,
		kbdKeyStatus = $bindable()
	}: Props = $props();

	var attemptIdx = $derived(attemptNum - 1);

	const KBD_LAYOUT = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M']
	];

	const ALLOWED_KEYS = new Set([
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

	function onBackspaceClick() {
		if (levelCompleted) return;

		if (guess.length <= 1) {
			guess = '';
		} else {
			guess = guess.slice(0, guess.length - 1);
		}

		attempts[attemptIdx] = guess;
	}

	function onKeyClick(keyName: string) {
		if (levelCompleted) return;

		if (guess.length < 5) {
			guess += keyName.toUpperCase();
		}

		attempts[attemptIdx] = guess;
	}

	function onEnterClick() {
		if (levelCompleted) return;

		var invalidGuess = !isWordValid(guess);

		if (guess.length < 5) {
			toast.error('Please provide a 5 letter word');
		} else if (invalidGuess) {
			toast.error(`${guess} is not a valid word`);
		} else {
			attemptNum += 1;
			guess = '';
		}
	}

	function handleKeyDown(evt: KeyboardEvent) {
		if (onscreenKbdOnly) return;

		if (ALLOWED_KEYS.has(evt.key)) {
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
		{#each KBD_LAYOUT as keyboardRow, rowIdx (rowIdx)}
			<div class="flex justify-center gap-1 min-[440px]:gap-2">
				{#each keyboardRow as keyName, keyIdx (keyIdx)}
					<KbdKey
						name={keyName}
						status={kbdKeyStatus[keyName]}
						onclick={function handleKeyClick() {
							onKeyClick(keyName);
						}} />
				{/each}
			</div>
		{/each}
		<div class="flex justify-center gap-1 min-[440px]:gap-2">
			<KbdKey
				name="Backspace"
				status="none"
				onclick={onBackspaceClick} />
			<KbdKey
				name="Enter"
				status="none"
				onclick={onEnterClick} />
		</div>
	</div>
</section>
