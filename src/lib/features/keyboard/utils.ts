import { appendChar, removeChar } from '../../utils';

export function createClickHandler(keyName: string) {
	return function takeUserInput(userInput: { value: string }) {
		return function clickHandler() {
			userInput.value = appendChar(userInput.value, keyName);
		};
	};
}

export function handleBackspaceClick(userInput: { value: string }) {
	return function backspaceClickHandler() {
		userInput.value = removeChar(userInput.value);
	};
}
