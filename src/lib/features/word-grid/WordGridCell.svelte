<script lang="ts">
	import type { LetterStatus } from '$lib/types';
	import { onMount } from 'svelte';

	interface Props {
		status: LetterStatus;
		size: 'sm' | 'md' | 'lg';
		name: string;
		syncKeyStatus?: (status: LetterStatus, name: string) => void;
	}

	var { status = 'none', size = 'sm', name = ' ', syncKeyStatus }: Props = $props();

	onMount(function onMount() {
		syncKeyStatus?.(status, name);
	});
</script>

<div
	data-cell-size={size}
	data-cell-status={status}
	class="grid place-content-center border-2 p-2">
	<span
		class={[
			'text-md leading-0 font-bold sm:text-lg',
			status != 'none' && 'text-white text-shadow-black/50 text-shadow-md'
		]}>
		{name}
	</span>
</div>
