<script lang="ts">
	import Modal from './Modal.svelte';

	interface Props {
		darkTheme: boolean;
		onscreenKbdOnly: boolean;
	}

	var { darkTheme = $bindable(false), onscreenKbdOnly = $bindable(false) }: Props = $props();
	var showModal = $state(false);

	function openModal() {
		showModal = true;
	}

	$effect(function updateThemeAttr() {
		document.querySelector('html')!.dataset.theme = darkTheme ? 'dark' : 'light';
	});
</script>

<button
	title="settings"
	class="rounded px-3 py-1 transition-colors duration-200 hover:bg-gray-200 active:bg-gray-200/75 dark:hover:bg-gray-600/75 dark:active:bg-gray-600/50"
	onclick={openModal}>
	<span class="sr-only">settings</span>
	<i class="ri-settings-4-fill ri-2x"></i>
</button>

<Modal bind:show={showModal}>
	<h1 class="text-heading-sm sm:text-heading-base text-center font-semibold">Settings</h1>

	<div class="grid grid-cols-[auto_20%] items-center gap-2">
		<label
			class="sm:text-md"
			for="theme-toggle">Dark Theme</label>
		<input
			class="size-4 accent-sky-600 dark:accent-sky-400"
			type="checkbox"
			name="theme-toggle"
			id="theme-toggle"
			bind:checked={darkTheme} />

		<label
			class="sm:text-md"
			for="screen-keyboard-input">Onscreen Keyboard Input Only</label>
		<input
			class="size-4 accent-sky-600 dark:accent-sky-400"
			type="checkbox"
			name="screen-keyboard-input"
			id="screen-keyboard-input"
			bind:checked={onscreenKbdOnly} />
	</div>
</Modal>
