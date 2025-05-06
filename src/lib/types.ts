export type LetterStatus = 'none' | 'correct' | 'present' | 'absent';
export type GameSaveState = {
	keyboardLetterStatus: {
		[x: string]: LetterStatus;
	};
	gameLevel: number;
	gamePoints: number;
	onscreenKbdOnly: boolean;
	darkMode: boolean;
	solutionWord: string;
	userInput: string;
	words: string[];
	currentGridRowNum: number;
	isLevelComplete: boolean;
};
