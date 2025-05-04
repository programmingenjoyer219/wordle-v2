import { evaluateLetterStatus, generateWordToRender } from './utils';

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
describe('evaluateLetterStatus', () => {
	it('should return absent if provided char is nowhere in the solution', () => {
		expect(evaluateLetterStatus('B', 2, 'APPLE')).toBe('absent');
	});

	it('should return present if provide char is in the solution but not at the correct position', () => {
		expect(evaluateLetterStatus('L', 0, 'APPLE')).toBe('present');
	});

	it('should return correct if the char is in the solution at the correct position', () => {
		expect(evaluateLetterStatus('A', 0, 'APPLE')).toBe('correct');
	});
});
