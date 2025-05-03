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

<style>
	[data-col-width='sm'] {
		grid-template-columns: repeat(5, 2rem);
		@media (width >= 40rem) {
			grid-template-columns: repeat(5, 2.5rem);
		}
	}

	[data-col-width='md'] {
		grid-template-columns: repeat(5, 3.25rem);
		@media (width >= 40rem) {
			grid-template-columns: repeat(5, 3.75rem);
		}
	}

	[data-col-width='lg'] {
		grid-template-columns: repeat(5, 4rem);
		@media (width >= 40rem) {
			grid-template-columns: repeat(5, 4.5rem);
		}
	}
</style>
