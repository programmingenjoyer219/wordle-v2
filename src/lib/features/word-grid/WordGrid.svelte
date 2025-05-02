<script lang="ts">
	import GridCell from '$lib/components/GridCell.svelte';

	const GRID_SIZE: 'sm' | 'md' | 'lg' = 'md';
</script>

<section class="mb-4">
	<div
		class={[
			'grid place-content-center gap-1',
			GRID_SIZE == 'sm' && 'grid-cols-[repeat(5,_2rem)] sm:grid-cols-[repeat(5,_2.5rem)]',
			GRID_SIZE == 'md' && 'grid-cols-[repeat(5,_3rem)] sm:grid-cols-[repeat(5,_3.5rem)]',
			GRID_SIZE == 'lg' && 'grid-cols-[repeat(5,_4rem)] sm:grid-cols-[repeat(5,_4.5rem)]'
		]}
	>
		{#each { length: 30 }}
			<GridCell cellSize={GRID_SIZE} letterStatus="none">{'A'}</GridCell>
		{/each}
	</div>
</section>
