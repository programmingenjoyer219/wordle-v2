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
	class={[
		'grid place-content-center border-2 p-2',
		letterStatus == 'none' && 'border-gray-400',
		letterStatus == 'correct' && 'border-green-400 bg-green-400',
		letterStatus == 'present' && 'border-yellow-400 bg-yellow-400',
		letterStatus == 'absent' && 'border-gray-400 bg-gray-400',
		cellSize == 'sm' && 'size-8 sm:size-10',
		cellSize == 'md' && 'size-12 sm:size-14',
		cellSize == 'lg' && 'size-6 sm:size-18'
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
</div>
