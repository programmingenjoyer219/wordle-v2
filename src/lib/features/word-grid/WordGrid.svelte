<script lang="ts">
	import GridCell from '$lib/components/GridCell.svelte';

	const gridColWidth: 'sm' | 'md' | 'lg' = 'md';
</script>

<section class="mb-2">
	<div data-col-width={gridColWidth} class="grid place-content-center gap-1">
		{#each { length: 30 }}
			<GridCell cellSize={gridColWidth} letterStatus="none">{'A'}</GridCell>
		{/each}
	</div>
</section>
