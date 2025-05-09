interface AppSettingsState {
	darkTheme: boolean;
	onscreenKbdOnly: boolean;
}

class AppSettings {
	darkTheme: boolean = $state(false);
	onscreenKbdOnly: boolean = $state(false);

	snapshot(): AppSettingsState {
		return {
			darkTheme: $state.snapshot(this.darkTheme),
			onscreenKbdOnly: $state.snapshot(this.onscreenKbdOnly)
		};
	}

	init({ darkTheme, onscreenKbdOnly }: AppSettingsState) {
		this.darkTheme = darkTheme;
		this.onscreenKbdOnly = onscreenKbdOnly;
	}
}

export const appSettings = new AppSettings();
