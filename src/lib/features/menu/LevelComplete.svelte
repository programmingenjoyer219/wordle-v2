<script lang="ts">
	import Modal from './Modal.svelte';

	interface Props {
		levelCompleted: boolean;
		levelPassed: boolean;
		answer: string;
		pointsGained: number;
		nextLevel: () => void;
	}

	var { levelCompleted, levelPassed, answer, pointsGained, nextLevel }: Props = $props();
	var showModal = $derived(levelCompleted);
</script>

<Modal
	show={showModal}
	canBeClosed={false}
	delayInOpening={150}>
	<h1 class="text-heading-sm sm:text-heading-base text-center font-semibold">
		{levelPassed ? 'Level cleared 🎉' : 'Level failed 😿'}
	</h1>

	{@render LevelDescription({ answer, pointsGained })}

	<div class="flex items-center justify-center">
		{@render NextLevelButton()}
	</div>
</Modal>

{#snippet LevelDescription({ answer, pointsGained }: { answer: string; pointsGained: number })}
	<p class="text-center sm:text-lg">
		Answer :
		<span class="font-bold">
			{answer}
		</span>
	</p>

	<p class="text-center sm:text-lg">
		Points :
		<span class="font-bold">+{pointsGained}</span>
	</p>
{/snippet}

{#snippet NextLevelButton()}
	<button
		id="next-level"
		onclick={nextLevel}
		class="rounded border-2 border-black/80 bg-black/80 px-3 py-2 text-sm text-gray-50 transition-all duration-200 hover:bg-gray-50 hover:text-black/80 sm:text-base dark:border-gray-50 dark:bg-gray-50 dark:text-black/80 dark:hover:bg-black/80 dark:hover:text-gray-50">
		Next level <i
			aria-hidden="true"
			class="ri-arrow-right-line"></i>
	</button>
{/snippet}
