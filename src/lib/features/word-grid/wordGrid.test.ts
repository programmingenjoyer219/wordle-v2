import { generateWordToRender } from './utils';

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
