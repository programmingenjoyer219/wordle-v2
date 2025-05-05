import { resetKeyboard } from './features/keyboard/keyboard.svelte';
import { getRandomWord } from './words';

export var solutionWord = $state({ value: getRandomWord().toUpperCase() });
export var userInput = $state({ value: '' });
export var words = $state({ value: ['', '', '', '', '', ''] });
export var currentGridRowNum = $state({ value: 1 });
export var isLevelComplete = $state({ value: false });

var areTriesRemaining = $derived(words.value.includes(''));
var currentGridRowIdx = $derived(currentGridRowNum.value - 1);
var isWin = $derived(isLevelComplete.value && isGuessCorrect());

export function getCurrentGridRowIdx(): number {
	return currentGridRowIdx;
}

export function isGuessCorrect(): boolean {
	return words.value.includes(solutionWord.value);
}

export function ranOutOfTries(): boolean {
	return !areTriesRemaining;
}

export function hasPlayerWon(): boolean {
	return isWin;
}

export function resetGameState() {
	solutionWord.value = getRandomWord().toUpperCase();
	userInput.value = '';
	words.value = ['', '', '', '', '', ''];
	currentGridRowNum.value = 1;
	isLevelComplete.value = false;
	resetKeyboard();
}
