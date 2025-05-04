export var solutionWord = $state({ value: 'APPLE' });
export var userInput = $state({ value: '' });
export var words = $state(['', '', '', '', '', '']);
export var currentGridRowNum = $state({ value: 1 });
export var isLevelComplete = $state({ value: false });

var areTriesRemaining = $derived(words.includes(''));
var currentGridRowIdx = $derived(currentGridRowNum.value - 1);

export function getCurrentGridRowIdx(): number {
	return currentGridRowIdx;
}

export function isGuessCorrect(): boolean {
	return words.includes(solutionWord.value);
}

export function ranOutOfTries(): boolean {
	return !areTriesRemaining;
}
