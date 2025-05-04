export async function delay(duration: number): Promise<void> {
	return new Promise(function executor(resolve) {
		setTimeout(resolve, duration, 'delay complete');
	});
}
