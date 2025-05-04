<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { hasPlayerWon, isLevelComplete, resetGameState, solutionWord } from '$lib/game.svelte';
	import { delay } from '$lib/utils';

	var showModal = $state(false);

	$effect(function sideEffect() {
		if (isLevelComplete.value) {
			delay(200).then(function afterDelay() {
				showModal = true;
			});
		}
	});

	function setupNextLevel() {
		resetGameState();
		showModal = false;
	}
</script>

<Modal {showModal} canBeClosed={false}>
	<h1 class="text-heading-sm sm:text-heading-base text-center font-semibold">
		{hasPlayerWon() ? 'Level cleared 🎉' : 'Level failed 😿'}
	</h1>
	<p class="text-center sm:text-lg">
		Answer :
		<span class="font-bold">
			{solutionWord.value}
		</span>
	</p>
	<div class="flex items-center justify-center">
		<button
			id="next-level"
			onclick={setupNextLevel}
			class="rounded border-2 border-black/80 bg-black/80 px-3 py-2 text-sm text-gray-50 transition-all duration-200 hover:bg-gray-50 hover:text-black/80 sm:text-base dark:border-gray-50 dark:bg-gray-50 dark:text-black/80 dark:hover:bg-black/80 dark:hover:text-gray-50"
		>
			Next level <i class="ri-arrow-right-line"></i>
		</button>
	</div>
</Modal>
