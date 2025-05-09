<script lang="ts">
	import type { LetterStatus } from '$lib/types';

	interface Props {
		name: string;
		status: LetterStatus;
		onclick: (...args: any[]) => void;
	}

	var { name, status, onclick }: Props = $props();
</script>

<button
	{onclick}
	data-key-status={status}
	class="rounded-sm p-[0.5em] shadow shadow-black/75 transition-all active:translate-y-1 min-[375px]:p-[0.65em] min-[425px]:p-[0.8em] sm:p-[1em]">
	<span
		class={[
			'text-md font-bold sm:text-lg',
			status != 'none' && 'text-white text-shadow-black/50 text-shadow-md'
		]}>
		{name}
	</span>
</button>
