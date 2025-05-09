import type { LetterStatus } from '$lib/types';

export interface KbdKeyStatus {
	[k: string]: LetterStatus;
}

const KEY_STATUS: KbdKeyStatus = {
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

class Kbd {
	kbdKeyStatus: KbdKeyStatus = $state({ ...KEY_STATUS });
}

export const kbd = new Kbd();
