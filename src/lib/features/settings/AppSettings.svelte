<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';

	var darkMode = $state(false);
	var showModal = $state(false);

	function openModal() {
		showModal = true;
	}

	$effect(function updateHtmlElDataTheme() {
		document.querySelector('html')!.dataset.theme = darkMode ? 'dark' : 'light';
	});
</script>

<button
	title="settings"
	class="rounded px-3 py-1 transition-colors duration-200 hover:bg-gray-200 active:bg-gray-200/75 dark:hover:bg-gray-600/75 dark:active:bg-gray-600/50"
	onclick={openModal}
>
	<span class="sr-only">settings</span>
	<i class="ri-settings-4-fill ri-2x"></i>
</button>

<Modal bind:showModal>
	<h1 class="text-heading-sm sm:text-heading-base text-center font-semibold">Settings</h1>

	<div class="grid grid-cols-[auto_20%] items-center gap-2">
		<span class="sm:text-md" id="theme-toggle">Dark Theme</span>
		<input
			class="size-4 accent-sky-600 dark:accent-sky-400"
			type="checkbox"
			name="theme-toggle"
			aria-labelledby="theme-toggle"
			bind:checked={darkMode}
		/>

		<span class="sm:text-md" id="screen-keyboard-input">Onscreen Keyboard Input Only</span>
		<input
			class="size-4 accent-sky-600 dark:accent-sky-400"
			type="checkbox"
			name="screen-keyboard-input"
			aria-labelledby="screen-keyboard-input"
		/>
	</div>
</Modal>
