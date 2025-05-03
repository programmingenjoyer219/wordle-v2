<script lang="ts">
	import Key from './Key.svelte';

	const KEYBOARD_LAYOUT = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M']
	];
</script>

<section class="mb-2">
	<div class="grid grid-rows-3 gap-2">
		{#each KEYBOARD_LAYOUT as keyboardRow, rowIdx (rowIdx)}
			<div class="flex justify-center gap-1 min-[440px]:gap-2">
				{#each keyboardRow as keyName, keyIdx (keyIdx)}
					<Key letterStatus="none">{keyName}</Key>
				{/each}
			</div>
		{/each}
		<div class="flex justify-center gap-1 min-[440px]:gap-2">
			<Key letterStatus="none">Backspace</Key>
			<Key letterStatus="none">Enter</Key>
		</div>
	</div>
</section>
