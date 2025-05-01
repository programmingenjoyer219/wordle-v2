<script>
	import HowToPlay from '$lib/features/how-to-play/HowToPlay.svelte';
	import AppSettings from '$lib/features/settings/AppSettings.svelte';
</script>

<header class="border-b-2 border-gray-200/75">
	<div class="flex max-w-4xl items-center justify-end gap-2">
		<HowToPlay />
		<AppSettings />
	</div>
</header>
