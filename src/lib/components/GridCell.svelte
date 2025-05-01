<script>
	var { children, letterStatus } = $props();
</script>

<div
	data-status={letterStatus}
	class="grid size-8 place-content-center rounded-sm border-2 p-2 sm:size-10"
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
		color: white;
		border-color: var(--color-green-400);
		background-color: var(--color-green-400);
	}

	[data-status='present'] {
		color: white;
		border-color: var(--color-yellow-400);
		background-color: var(--color-yellow-400);
	}

	[data-status='absent'] {
		color: white;
		border-color: var(--color-gray-400);
		background-color: var(--color-gray-400);
	}
</style>
