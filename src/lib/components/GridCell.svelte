<script lang="ts">
	import type { LetterStatus } from '$lib/types';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		letterStatus: LetterStatus;
		cellSize: 'sm' | 'md' | 'lg';
	};

	var { children, letterStatus, cellSize = 'sm' }: Props = $props();
</script>

<div
	data-cell-size={cellSize}
	class={[
		`grid place-content-center border-2 p-2`,
		letterStatus == 'none' && 'border-gray-400',
		letterStatus == 'correct' &&
			'border-green-400 bg-green-400 dark:border-green-600 dark:bg-green-600',
		letterStatus == 'present' &&
			'border-yellow-400 bg-yellow-400 dark:border-yellow-600 dark:bg-yellow-600',
		letterStatus == 'absent' && 'border-gray-400 bg-gray-400'
	]}
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

<style>
	[data-cell-size='sm'] {
		height: 2rem;
		width: 2rem;
		@media (width >= 40rem) {
			height: 2.5rem;
			width: 2.5rem;
		}
	}

	[data-cell-size='md'] {
		height: 3.25rem;
		width: 3.25rem;
		@media (width >= 40rem) {
			height: 3.75rem;
			width: 3.75rem;
		}
	}

	[data-cell-size='lg'] {
		height: 4rem;
		width: 4rem;
		@media (width >= 40rem) {
			height: 4.5rem;
			width: 4.5rem;
		}
	}
</style>
