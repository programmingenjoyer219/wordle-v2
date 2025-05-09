class AppSettings {
	darkTheme: boolean = $state(false);
	onscreenKbdOnly: boolean = $state(false);
}

export const appSettings = new AppSettings();
