<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<div class="container mx-auto min-h-dvh max-w-2xl">
	<Header />
	<main class="mb-2 flex flex-col justify-evenly">
		{@render children()}
	</main>
</div>

<style>
	@media (width <= 40rem) {
		@media (height >= 625px) {
			main {
				height: calc(100dvh - 4.5rem);
			}
		}
	}

	@media (width >= 40rem) {
		@media (height >= 705px) {
			main {
				height: calc(100dvh - 4.5rem);
			}
		}
	}
</style>
