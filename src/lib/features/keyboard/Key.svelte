<script lang="ts">
	import type { LetterStatus } from '$lib/types';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		letterStatus: LetterStatus;
	};

	var { children, letterStatus }: Props = $props();
</script>

<button
	data-key-status={letterStatus}
	class="rounded-sm p-[0.5em] shadow shadow-black/75 transition-all active:translate-y-1 min-[375px]:p-[0.65em] min-[425px]:p-[0.8em] sm:p-[1em]"
>
	<span
		class={[
			'text-md font-bold sm:text-lg',
			letterStatus != 'none' && 'text-white text-shadow-black/50 text-shadow-md'
		]}
	>
		{@render children()}
	</span>
</button>
