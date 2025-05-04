export function generateWordToRender(word: string) {
	if (word.length > 5) return word.slice(0, 5);
	var numRemainingChars = 5 - word.length;
	for (let i = 0; i < numRemainingChars; i += 1) {
		word += ' ';
	}
	return word;
}

export function evaluateLetterStatus(
	char: string,
	charPosn: number,
	solution: string
): 'correct' | 'present' | 'absent' {
	if (solution.includes(char)) {
		return solution[charPosn] == char ? 'correct' : 'present';
	} else {
		return 'absent';
	}
}
