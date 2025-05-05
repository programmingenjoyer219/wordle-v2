import type { LetterStatus } from '$lib/types';

const keyStatusMap: { [k: string]: LetterStatus } = {
	Q: 'none',
	W: 'none',
	E: 'none',
	R: 'none',
	T: 'none',
	Y: 'none',
	U: 'none',
	I: 'none',
	O: 'none',
	P: 'none',
	A: 'none',
	S: 'none',
	D: 'none',
	F: 'none',
	G: 'none',
	H: 'none',
	J: 'none',
	K: 'none',
	L: 'none',
	Z: 'none',
	X: 'none',
	C: 'none',
	V: 'none',
	B: 'none',
	N: 'none',
	M: 'none'
};

export var keyboardLetterStatus = $state({
	value: { ...keyStatusMap }
});

export function resetKeyboard() {
	keyboardLetterStatus.value = { ...keyStatusMap };
}
