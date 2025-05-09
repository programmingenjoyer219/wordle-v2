<script lang="ts">
	import WordGridCell from './WordGridCell.svelte';

	interface Props {
		attempts: string[];
		levelCompleted: boolean;
		answer: string;
		attemptNum: number;
	}

	var { attempts, levelCompleted, answer, attemptNum }: Props = $props();
	var formattedAttempts = $derived(attempts.map(addSpaces));

	const COLUMN_WIDTH: 'sm' | 'md' | 'lg' = 'md';

	function addSpaces(word: string) {
		var space = 5 - word.length;
		for (let i = 0; i < space; i += 1) {
			word += ' ';
		}
		return word;
	}

	function evaluateWordStatus(input: string, answer: string): ('correct' | 'present' | 'absent')[] {
		var result = Array(input.length).fill('absent');
		var answerArr = answer.split('');
		var inputArr = input.split('');
		var usedIndices = new Set();

		// First pass: check for correct letters in correct positions
		for (let i = 0; i < inputArr.length; i++) {
			if (inputArr[i] === answerArr[i]) {
				result[i] = 'correct';
				usedIndices.add(i);
				inputArr[i] = null; // Mark as matched
			}
		}

		// Second pass: check for correct letters in wrong positions
		for (let i = 0; i < inputArr.length; i++) {
			if (result[i] !== 'correct' && inputArr[i] !== null) {
				for (let j = 0; j < answerArr.length; j++) {
					if (!usedIndices.has(j) && inputArr[i] === answerArr[j]) {
						result[i] = 'present';
						usedIndices.add(j);
						break;
					}
				}
			}
		}

		return result;
	}
</script>

<section class="mb-2">
	<div
		data-col-width={COLUMN_WIDTH}
		class="grid place-content-center gap-1">
		{#each formattedAttempts as word, wordIdx (wordIdx)}
			{@const wordNum = wordIdx + 1}
			{@const showStatus = wordNum < attemptNum || levelCompleted}
			{#if showStatus}
				{@const wordStatus = evaluateWordStatus(word, answer)}
				{#each word.split('') as char, charIdx (charIdx)}
					{@const letterStatus = char == ' ' ? 'none' : wordStatus[charIdx]}
					<WordGridCell
						status={letterStatus}
						size={COLUMN_WIDTH}
						name={char} />
				{/each}
			{:else}
				{#each word.split('') as char}
					<WordGridCell
						status="none"
						size={COLUMN_WIDTH}
						name={char} />
				{/each}
			{/if}
		{/each}
	</div>
</section>
