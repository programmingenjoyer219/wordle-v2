export var solutionWord = $state({ value: 'APPLE' });
export var userInput = $state({ value: '' });
export var words = $state(['', '', '', '', '', '']);
export var currentGridRowNum = $state({ value: 1 });
var currentGridRowIdx = $derived(currentGridRowNum.value - 1);

export function getCurrentGridRowIdx() {
	return currentGridRowIdx;
}
