<script>
	import GridCell from '$lib/components/GridCell.svelte';
</script>

<section>
	<div data-grid-size="md">
		{#each { length: 30 }}
			<GridCell cellSize="md" letterStatus="none">{' '}</GridCell>
		{/each}
	</div>
</section>

<style>
	[data-grid-size] {
		--multiplier: 4;
		--column-width: calc(var(--spacing) * var(--multiplier));
		display: grid;
		gap: calc(var(--spacing) * 1);
		grid-template-columns: repeat(5, var(--column-width));
		place-content: center;
	}

	[data-grid-size='sm'] {
		--multiplier: 8;

		@media (width >= var(--breakpoint-sm)) {
			--multiplier: 10;
		}
	}

	[data-grid-size='md'] {
		--multiplier: 12;

		@media (width >= var(--breakpoint-sm)) {
			--multiplier: 14;
		}
	}

	[data-grid-size='lg'] {
		--multiplier: 16;

		@media (width >= var(--breakpoint-sm)) {
			--multiplier: 18;
		}
	}
</style>
