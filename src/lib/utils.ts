export function appendChar(baseStr: string, char: string): string {
	return baseStr.length == 5 ? baseStr : baseStr + char;
}

export function removeChar(baseStr: string): string {
	if (baseStr.length <= 1) return '';
	return baseStr.slice(0, baseStr.length - 1);
}
