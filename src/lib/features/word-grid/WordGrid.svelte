<script>
	import GridCell from '$lib/components/GridCell.svelte';
</script>

<section class="mb-4">
	<div data-grid-size="md">
		{#each { length: 30 }}
			<GridCell cellSize="md" letterStatus="none">{' '}</GridCell>
		{/each}
	</div>
</section>

<style>
	[data-grid-size] {
		display: grid;
		gap: calc(var(--spacing) * 1);
		place-content: center;
	}

	[data-grid-size='sm'] {
		grid-template-columns: repeat(5, 2rem);
		@media (width >= 40rem) {
			grid-template-columns: repeat(5, 2.5rem);
		}
	}

	[data-grid-size='md'] {
		grid-template-columns: repeat(5, 3rem);
		@media (width >= 40rem) {
			grid-template-columns: repeat(5, 3.5rem);
		}
	}

	[data-grid-size='lg'] {
		grid-template-columns: repeat(5, 4rem);
		@media (width >= 40rem) {
			grid-template-columns: repeat(5, 4.5rem);
		}
	}
</style>
