<script lang="ts">
	import Modal from './Modal.svelte';
	import WordGridCell from '../word-grid/WordGridCell.svelte';
	import type { LetterStatus } from '$lib/types';

	var showModal = $state(false);

	function openModal() {
		showModal = true;
	}

	type Example = {
		word: string;
		letter: string;
		letterStatus: LetterStatus;
		description: string;
	};

	const EXAMPLES: Example[] = [
		{
			word: 'WORDY',
			letter: 'W',
			letterStatus: 'correct',
			description: 'is in the word and in the correct spot.'
		},
		{
			word: 'LIGHT',
			letter: 'I',
			letterStatus: 'present',
			description: 'is in the word but in the wrong spot.'
		},
		{
			word: 'ROGUE',
			letter: 'U',
			letterStatus: 'absent',
			description: 'is not in the word in any spot.'
		}
	];
</script>

<button
	title="how to play?"
	class="rounded px-3 py-1 transition-colors duration-200 hover:bg-gray-200 active:bg-gray-200/75 dark:hover:bg-gray-600/75 dark:active:bg-gray-600/50"
	onclick={openModal}>
	<span class="sr-only">how to play?</span>
	<i
		aria-hidden="true"
		class="ri-question-line ri-2x"></i>
</button>

<Modal bind:show={showModal}>
	<h1 class="text-heading-sm sm:text-heading-base text-center font-semibold">How to play?</h1>

	<div class="flow">
		<h2 class="text-md sm:text-lg">Guess the wordle in 6 tries</h2>
		<ul class="list-disc pl-4 text-sm sm:text-base">
			<li>Each guess must be a valid 5-letter word.</li>
			<li>The color of the tiles will change to show how close your guess was to the word.</li>
		</ul>
	</div>

	<div class="flow">
		<h2 class="text-md sm:text-lg">Examples</h2>

		{#each EXAMPLES as example, i (i)}
			{@render Example(example)}
		{/each}
	</div>
</Modal>

{#snippet Example({ word, letter, letterStatus, description }: Example)}
	<div>
		<div class="flex items-center gap-1">
			{#each word.split('') as letter, i (i)}
				<WordGridCell
					size="sm"
					status={letter == letter ? letterStatus : 'none'}
					name={letter} />
			{/each}
		</div>
		<p class="text-sm sm:text-base">
			<span class="font-semibold">{letter}</span>
			{description}
		</p>
	</div>
{/snippet}
