import {
	appendChar,
	createClickHandler,
	handleBackspaceClick,
	handleEnterClick,
	removeChar
} from './utils';

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

describe('handleEnterClick', () => {
	it('should not increment the gridRowNumber.value if it is equal to 6', () => {
		var testRowNumber = { value: 6 };
		var testUserInput = { value: 'apple' };
		handleEnterClick(testRowNumber)(testUserInput)();
		expect(testRowNumber.value).toBe(6);
	});

	it('should not increment the gridRowNumber.value if userInput.value.length is less than 5', () => {
		var testRowNumber = { value: 4 };
		var testUserInput = { value: 'app' };
		handleEnterClick(testRowNumber)(testUserInput)();
		expect(testRowNumber.value).toBe(4);
	});

	it('should not reset the userInput.value if its not 5 characters long', () => {
		var testRowNumber = { value: 4 };
		var testUserInput = { value: 'app' };
		handleEnterClick(testRowNumber)(testUserInput)();
		expect(testUserInput.value).toBe('app');
	});

	it('should increment the gridRowNumber.value', () => {
		var testRowNumber = { value: 3 };
		var testUserInput = { value: 'apple' };
		handleEnterClick(testRowNumber)(testUserInput)();
		expect(testRowNumber.value).toBe(4);
	});

	it('should reset the userInput.value when gridRowNumber.value is incremented', () => {
		var testRowNumber = { value: 3 };
		var testUserInput = { value: 'apple' };
		handleEnterClick(testRowNumber)(testUserInput)();
		expect(testRowNumber.value).toBe(4);
		expect(testUserInput.value).toBe('');
	});
});

describe('appendChar', () => {
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
