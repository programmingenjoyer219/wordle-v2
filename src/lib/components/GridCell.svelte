<script lang="ts">
	import { keyboardLetterStatus } from '$lib/features/keyboard/keyboard.svelte';
	import type { LetterStatus } from '$lib/types';
	import { onMount, type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		letterStatus: LetterStatus;
		cellSize: 'sm' | 'md' | 'lg';
		letterName: string;
	};

	var { children, letterStatus, cellSize = 'sm', letterName = ' ' }: Props = $props();

	onMount(function updateKeyboardLetterStatus() {
		if (letterName in keyboardLetterStatus.value) {
			if (keyboardLetterStatus.value[letterName] == 'correct') return;

			if (
				keyboardLetterStatus.value[letterName] == 'present' &&
				['present', 'correct'].includes(letterStatus)
			) {
				keyboardLetterStatus.value[letterName] = letterStatus;
				return;
			}

			if (keyboardLetterStatus.value[letterName] == 'absent') return;

			if (keyboardLetterStatus.value[letterName] == 'none') {
				keyboardLetterStatus.value[letterName] = letterStatus;
				return;
			}
		}
	});
</script>

<div
	data-cell-size={cellSize}
	data-cell-status={letterStatus}
	class="grid place-content-center border-2 p-2"
>
	<span
		class={[
			'text-md leading-0 font-bold sm:text-lg',
			letterStatus != 'none' && 'text-white text-shadow-black/50 text-shadow-md'
		]}
	>
		{@render children()}
	</span>
</div>
