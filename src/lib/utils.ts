export function appendChar(baseStr: string, char: string): string {
	return baseStr.length == 5 ? baseStr : baseStr + char;
}

export function removeChar(baseStr: string): string {
	if (baseStr.length <= 1) return '';
	return baseStr.slice(0, baseStr.length - 1);
}

export function generateWordToRender(word: string) {
	if (word.length > 5) return word.slice(0, 5);
	var numRemainingChars = 5 - word.length;
	for (let i = 0; i < numRemainingChars; i += 1) {
		word += ' ';
	}
	return word;
}

export function updateWord(words: string[], idx: number, newWord: string) {
	words[idx] = newWord;
}
