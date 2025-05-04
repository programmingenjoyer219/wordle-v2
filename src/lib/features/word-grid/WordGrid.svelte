<script lang="ts">
	import GridCell from '$lib/components/GridCell.svelte';
	import { getCurrentGridRowIdx, isLevelComplete, solutionWord, words } from '$lib/game.svelte';
	import { evaluateLetterStatus, generateWordToRender } from './utils';

	const gridColWidth: 'sm' | 'md' | 'lg' = 'md';
</script>

<section class="mb-2">
	<div data-col-width={gridColWidth} class="grid place-content-center gap-1">
		{#each words as word, wordIdx (wordIdx)}
			{@const wordToRender = generateWordToRender(word)}
			{@const showStatus = wordIdx < getCurrentGridRowIdx() || isLevelComplete.value}
			{#if showStatus}
				{#each wordToRender.split('') as char, charIdx (charIdx)}
					{@const letterStatus =
						char == ' ' ? 'none' : evaluateLetterStatus(char, charIdx, solutionWord.value)}
					<GridCell cellSize={gridColWidth} {letterStatus}>{char}</GridCell>
				{/each}
			{:else}
				{#each wordToRender.split('') as char}
					<GridCell cellSize={gridColWidth} letterStatus="none">{char}</GridCell>
				{/each}
			{/if}
		{/each}
	</div>
</section>
