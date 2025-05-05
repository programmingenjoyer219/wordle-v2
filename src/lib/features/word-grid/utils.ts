export function generateWordToRender(word: string) {
	if (word.length > 5) return word.slice(0, 5);
	var numRemainingChars = 5 - word.length;
	for (let i = 0; i < numRemainingChars; i += 1) {
		word += ' ';
	}
	return word;
}

export function evaluateWordStatus(
	inputWord: string,
	solutionWord: string
): ('correct' | 'present' | 'absent')[] {
	const result = Array(inputWord.length).fill('absent');
	const solutionArr = solutionWord.split('');
	const inputArr = inputWord.split('');
	const usedIndices = new Set();

	// First pass: check for correct letters in correct positions
	for (let i = 0; i < inputArr.length; i++) {
		if (inputArr[i] === solutionArr[i]) {
			result[i] = 'correct';
			usedIndices.add(i);
			inputArr[i] = null; // Mark as matched
		}
	}

	// Second pass: check for correct letters in wrong positions
	for (let i = 0; i < inputArr.length; i++) {
		if (result[i] !== 'correct' && inputArr[i] !== null) {
			for (let j = 0; j < solutionArr.length; j++) {
				if (!usedIndices.has(j) && inputArr[i] === solutionArr[j]) {
					result[i] = 'present';
					usedIndices.add(j);
					break;
				}
			}
		}
	}

	return result;
}
