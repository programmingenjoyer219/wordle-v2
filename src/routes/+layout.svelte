<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<div class="space-y-2">
	<Header />
	<main class="mx-auto max-w-2xl outline-2 outline-green-200">
		{@render children()}
	</main>
</div>
