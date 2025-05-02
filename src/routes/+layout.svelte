<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />
<main class="mx-auto flex max-w-2xl flex-col items-center justify-center">
	{@render children()}
</main>

<style>
	main {
		min-height: calc(100dvh - 4rem);
	}
</style>
