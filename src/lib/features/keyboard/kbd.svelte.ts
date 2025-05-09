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

export class Kbd {
	kbdKeyStatus: KbdKeyStatus = $state({ ...KEY_STATUS });

	syncKeyStatus(status: LetterStatus, name: string) {
		if (this.kbdKeyStatus[name] == 'correct') return;

		if (this.kbdKeyStatus[name] == 'present' && ['present', 'correct'].includes(status)) {
			this.kbdKeyStatus[name] = status;
		}

		if (this.kbdKeyStatus[name] == 'absent') return;

		if (this.kbdKeyStatus[name] == 'none') {
			this.kbdKeyStatus[name] = status;
		}
	}

	reset() {
		this.kbdKeyStatus = { ...KEY_STATUS };
	}

	snapshot(): KbdKeyStatus {
		return $state.snapshot(this.kbdKeyStatus);
	}

	init(kbdKeyStatus: KbdKeyStatus) {
		this.kbdKeyStatus = kbdKeyStatus;
	}
}

export const kbd = new Kbd();
