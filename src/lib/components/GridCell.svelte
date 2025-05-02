<script lang="ts">
	import type { LetterStatus } from '$lib/types';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		letterStatus: LetterStatus;
		cellSize?: 'sm' | 'md' | 'lg';
	};

	var { children, letterStatus, cellSize = 'sm' }: Props = $props();
</script>

<div
	data-cell-size={cellSize}
	data-status={letterStatus}
	class="grid place-content-center border-2 p-2"
>
	<span
		class={[
			'text-md font-bold sm:text-lg',
			letterStatus != 'none' && 'text-shadow-black/50 text-shadow-md'
		]}
	>
		{@render children()}
	</span>
</div>

<style>
	[data-status='none'] {
		border-color: var(--color-gray-400);
	}

	[data-status='correct'] {
		color: var(--color-white);
		border-color: var(--color-green-400);
		background-color: var(--color-green-400);
	}

	[data-status='present'] {
		color: var(--color-white);
		border-color: var(--color-yellow-400);
		background-color: var(--color-yellow-400);
	}

	[data-status='absent'] {
		color: var(--color-white);
		border-color: var(--color-gray-400);
		background-color: var(--color-gray-400);
	}

	[data-cell-size] {
		height: calc(var(--multiplier) * var(--spacing));
		width: calc(var(--multiplier) * var(--spacing));
	}

	[data-cell-size='sm'] {
		--multiplier: 8;

		@media (width >= var(--breakpoint-sm)) {
			--multiplier: 10;
		}
	}

	[data-cell-size='md'] {
		--multiplier: 12;

		@media (width >= var(--breakpoint-sm)) {
			--multiplier: 14;
		}
	}

	[data-cell-size='lg'] {
		--multiplier: 16;

		@media (width >= var(--breakpoint-sm)) {
			--multiplier: 18;
		}
	}
</style>
