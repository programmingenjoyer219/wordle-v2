import { createClickHandler, handleBackspaceClick } from './utils';

describe('createClickHandler', () => {
	it('should not append keyName to userInput.value if userInput.value is longer than 4 characters', () => {
		var testUserInput = { value: 'hello' };
		createClickHandler('a')(testUserInput)();
		expect(testUserInput.value).toBe('hello');
	});

	it('should append keyName to userInput.value if userInput.value is atmost 4 characters long', () => {
		{
			let testUserInput = { value: 'hell' };
			createClickHandler('a')(testUserInput)();
			expect(testUserInput.value).toBe('hella');
		}
		{
			let testUserInput = { value: 'hel' };
			createClickHandler('p')(testUserInput)();
			expect(testUserInput.value).toBe('help');
		}
		{
			let testUserInput = { value: '' };
			createClickHandler('a')(testUserInput)();
			expect(testUserInput.value).toBe('a');
		}
	});
});

describe('handleBackspaceClick', () => {
	it('should not modify userInput.value if it is an empty string', () => {
		var testUserInput = { value: '' };
		handleBackspaceClick(testUserInput)();
		expect(testUserInput.value).toBe('');
	});

	it('should remove the last character from userInput.value', () => {
		{
			let testUserInput = { value: 'apple' };
			handleBackspaceClick(testUserInput)();
			expect(testUserInput.value).toBe('appl');
		}
		{
			let testUserInput = { value: 'appl' };
			handleBackspaceClick(testUserInput)();
			expect(testUserInput.value).toBe('app');
		}
		{
			let testUserInput = { value: 'a' };
			handleBackspaceClick(testUserInput)();
			expect(testUserInput.value).toBe('');
		}
	});
});
