import { appendChar, generateWordToRender, removeChar, updateWord } from './utils';

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

describe('generateWordToRender', () => {
	it('should return first five characters if provided word is longer than 5 characters', () => {
		expect(generateWordToRender('hellow')).toBe('hello');
	});

	it('should return a padded word if the provided word is less than 5 characters long', () => {
		expect(generateWordToRender('hell')).toBe('hell ');
		expect(generateWordToRender('app')).toBe('app  ');
		expect(generateWordToRender('')).toBe('     ');
	});
});
