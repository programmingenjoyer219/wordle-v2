<script lang="ts">
	import GridCell from '$lib/components/GridCell.svelte';
	import { words } from '$lib/game.svelte';
	import { generateWordToRender } from '$lib/utils';

	const gridColWidth: 'sm' | 'md' | 'lg' = 'md';

	// $inspect(words);
</script>

<section class="mb-2">
	<div data-col-width={gridColWidth} class="grid place-content-center gap-1">
		{#each words as word}
			{@const wordToRender = generateWordToRender(word)}
			{#each wordToRender.split('') as char}
				<GridCell cellSize={gridColWidth} letterStatus="none">{char}</GridCell>
			{/each}
		{/each}
	</div>
</section>
