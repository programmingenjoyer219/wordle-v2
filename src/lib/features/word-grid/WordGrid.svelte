<script lang="ts">
	import GridCell from '$lib/components/GridCell.svelte';
	import { gridCellDimensions } from '$lib/utils';

	const gridSize: 'sm' | 'md' | 'lg' = 'md';
	const currentGridCellDimensions = gridCellDimensions[gridSize];
</script>

<section class="mb-2">
	<div
		class="grid grid-cols-[repeat(5,_{currentGridCellDimensions[0]})] place-content-center gap-1 sm:grid-cols-[repeat(5,_{currentGridCellDimensions[1]})]"
	>
		{#each { length: 30 }}
			<GridCell cellSize={gridSize} letterStatus="none">{'A'}</GridCell>
		{/each}
	</div>
</section>
