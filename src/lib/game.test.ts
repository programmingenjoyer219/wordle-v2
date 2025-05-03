import { appendChar, removeChar } from './utils';

describe('addChar', () => {
	it('should return the base string if it is 5 characters long', () => {
		expect(appendChar('hello', 'w')).toBe('hello');
	});

	it('should attach the provided character to the end of the base string', () => {
		expect(appendChar('hell', 'o')).toBe('hello');
		expect(appendChar('', 'o')).toBe('o');
	});
});

describe('removeChar', () => {
	it('should return an empty string if an empty string is provided', () => {
		expect(removeChar('')).toBe('');
	});

	it('should remove the last character from the base string', () => {
		expect(removeChar('hello')).toBe('hell');
		expect(removeChar('hell')).toBe('hel');
		expect(removeChar('h')).toBe('');
	});
});
