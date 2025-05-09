export async function delay(duration: number): Promise<void> {
	return new Promise(function executor(resolve) {
		setTimeout(resolve, duration, 'delay complete');
	});
}

export function debounce(duration: number, cb: () => void): () => void {
	var timeoutId = null;
	return function debouncedFn() {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(cb, duration);
	};
}

export function generateRandomIdx(arrLength: number): number {
	return Math.floor(Math.random() * arrLength);
}
