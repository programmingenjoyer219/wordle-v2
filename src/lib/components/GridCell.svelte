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

	[data-cell-size='sm'] {
		height: 2rem;
		width: 2rem;

		@media (width >= 40rem) {
			height: 2.5rem;
			width: 2.5rem;
		}
	}

	[data-cell-size='md'] {
		height: 3rem;
		width: 3rem;

		@media (width >= 40rem) {
			height: 3.5rem;
			width: 3.5rem;
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
