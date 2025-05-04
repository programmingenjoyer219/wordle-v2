export function appendChar(baseStr: string, char: string): string {
	return baseStr.length == 5 ? baseStr : baseStr + char;
}

export function removeChar(baseStr: string): string {
	if (baseStr.length <= 1) return '';
	return baseStr.slice(0, baseStr.length - 1);
}

export function updateWord(words: string[], idx: number, newWord: string) {
	words[idx] = newWord;
}

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

export function handleEnterClick(gridRowNumber: { value: number }) {
	return function takeUserInput(userInput: { value: string }) {
		return function enterClickHandler() {
			if (userInput.value.length == 5 && gridRowNumber.value < 6) {
				gridRowNumber.value += 1;
				userInput.value = '';
			}
		};
	};
}
