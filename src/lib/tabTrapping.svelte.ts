// https://svelte.dev/tutorial/svelte/actions
export function tabTrapping(node: HTMLElement) {
	var previous = document.activeElement;

	$effect(function tabTrappingSideEffect() {
		getFocusableElements(node)[0]?.focus();
		var handleKeydown = createKeydownHandler(node);
		node.addEventListener('keydown', handleKeydown);

		return function cleanup() {
			node.removeEventListener('keydown', handleKeydown);
			// @ts-ignore
			previous?.focus();
		};
	});
}

function getFocusableElements(node: HTMLElement): HTMLElement[] {
	return Array.from(
		node.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		)
	);
}

function createKeydownHandler(node: HTMLElement) {
	return function keydownHandler(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		var current = document.activeElement;
		var elements = getFocusableElements(node);
		var first = elements.at(0)!;
		var last = elements.at(-1)!;

		if (event.shiftKey && current === first) {
			last.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last) {
			first.focus();
			event.preventDefault();
		}
	};
}
