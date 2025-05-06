import localforage from 'localforage';
import { getKbdSnapshot, setKbdSnapshot } from './features/keyboard/keyboard.svelte';
import {
	getProgressSnapshot,
	setProgressSnapshot
} from './features/player-progress/playerProgress.svelte';
import { getSettingsSnapshot, setSettingsSnapshot } from './features/settings/settings.svelte';
import { getGameSnapshot, setGameSnapshot } from './game.svelte';
import type { GameSaveState } from './types';

export async function delay(duration: number): Promise<void> {
	return new Promise(function executor(resolve) {
		setTimeout(resolve, duration, 'delay complete');
	});
}

export function debounce(duration, cb) {
	var timeoutId = null;
	return function debouncedFn() {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(cb, duration);
	};
}

export async function loadGameSaveState() {
	return localforage.getItem('wordle-game-state') as Promise<GameSaveState>;
}

export function setGameStateToSavedProgress(gameSaveState: GameSaveState) {
	if (!gameSaveState) throw new Error('Save state was not provided');

	var {
		keyboardLetterStatus,
		gameLevel,
		gamePoints,
		onscreenKbdOnly,
		darkMode,
		solutionWord,
		userInput,
		words,
		currentGridRowNum,
		isLevelComplete
	} = gameSaveState;

	setGameSnapshot({ solutionWord, userInput, words, currentGridRowNum, isLevelComplete });
	setKbdSnapshot({ keyboardLetterStatus });
	setProgressSnapshot({ gameLevel, gamePoints });
	setSettingsSnapshot({ onscreenKbdOnly, darkMode });
}

export async function saveGameProgress() {
	var allSnapshots = {
		...getGameSnapshot(),
		...getSettingsSnapshot(),
		...getProgressSnapshot(),
		...getKbdSnapshot()
	};

	return localforage.setItem('wordle-game-state', allSnapshots);
}
