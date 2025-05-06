export var onscreenKbdOnly = $state({ value: false });
export var darkMode = $state({ value: false });

export function getSettingsSnapshot() {
	return {
		onscreenKbdOnly: onscreenKbdOnly.value,
		darkMode: darkMode.value
	};
}

export function setSettingsSnapshot(snapshot: { onscreenKbdOnly: boolean; darkMode: boolean }) {
	onscreenKbdOnly.value = snapshot.onscreenKbdOnly;
	darkMode.value = snapshot.darkMode;
}
