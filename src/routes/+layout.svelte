<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import Header from '$lib/components/Header.svelte';
	import LevelCompleteScreen from '$lib/features/level-complete/LevelCompleteScreen.svelte';
	import { Toaster } from 'svelte-french-toast';

	let { children } = $props();
</script>

<svelte:head>
	<title>Wordle Infinite</title>
	<meta name="description" content="Play the popular word guessing game as long as you want!" />
</svelte:head>

<div class="container mx-auto min-h-dvh max-w-2xl">
	<Header />
	<Toaster />
	<LevelCompleteScreen />
	<main class="mb-2 flex flex-col justify-evenly">
		{@render children()}
	</main>
</div>
