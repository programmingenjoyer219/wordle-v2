<script lang="ts">
	import type { LetterStatus } from '$lib/types';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		letterStatus: LetterStatus;
	};

	var { children, letterStatus }: Props = $props();
</script>

<button
	data-key-status={letterStatus}
	class={[
		'rounded-sm p-[0.5em] shadow shadow-black/75 transition-all active:translate-y-1 min-[375px]:p-[0.65em] min-[425px]:p-[0.8em] sm:p-[1em]',
		letterStatus == 'none' &&
			'bg-gray-200 hover:bg-gray-200/75 active:bg-gray-200/50 dark:bg-gray-600 dark:hover:bg-gray-600/75 dark:active:bg-gray-600/50',
		letterStatus == 'correct' &&
			'bg-green-400 hover:bg-green-400/75 active:bg-green-400/50 dark:bg-green-600 dark:hover:bg-green-600/75 dark:active:bg-green-600/50',
		letterStatus == 'present' &&
			'bg-yellow-400 hover:bg-yellow-400/75 active:bg-yellow-400/50 dark:bg-yellow-600 dark:hover:bg-yellow-600/75 dark:active:bg-yellow-600/50',
		letterStatus == 'absent' && 'bg-gray-400 hover:bg-gray-400/75 active:bg-gray-400/50'
	]}
>
	<span
		class={[
			'text-md font-bold sm:text-lg',
			letterStatus != 'none' && 'text-white text-shadow-black/50 text-shadow-md'
		]}
	>
		{@render children()}
	</span>
</button>
