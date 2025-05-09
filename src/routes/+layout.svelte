<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from 'svelte-french-toast';
	import LevelComplete from '$lib/features/menu/LevelComplete.svelte';
	import { game } from '$lib/features/game/game.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Wordle Infinite</title>
	<meta
		name="description"
		content="Play the popular word guessing game as long as you want!" />
	<link
		rel="manifest"
		href="/app.webmanifest" />
</svelte:head>

<div class="container mx-auto min-h-dvh max-w-2xl">
	<Header />
	<Toaster />
	<LevelComplete
		levelCompleted={game.levelCompleted}
		levelPassed={game.levelPassed}
		answer={game.answer}
		pointsGained={game.pointsGained}
		nextLevel={game.nextLevel.bind(game)} />
	<main class="mb-2 flex flex-col justify-evenly">
		{@render children()}
	</main>
</div>
