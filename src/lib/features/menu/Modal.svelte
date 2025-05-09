<script lang="ts">
	import { tabTrapping } from '$lib/tabTrapping.svelte';
	import type { Snippet } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	interface Props {
		children: Snippet;
		show: boolean;
		canBeClosed?: boolean;
		delayInOpening?: number;
	}

	var {
		children,
		show = $bindable(false),
		canBeClosed = $bindable(true),
		delayInOpening = 0
	}: Props = $props();

	function close() {
		if (canBeClosed) show = false;
	}

	function closeOnEsc(evt: KeyboardEvent) {
		if (evt.key == 'Escape' && show) {
			close();
		}
	}
</script>

<svelte:window onkeydown={closeOnEsc} />

{#key show}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		hidden={!show}
		id="modal-backdrop"
		class="absolute top-0 left-0 z-10 grid h-full w-full place-content-center bg-black/40"
		onclick={function handleBackdropClick(evt) {
			if (evt.target == evt.currentTarget) close();
		}}
		in:fade={{ duration: 150, delay: delayInOpening }}
		out:fade={{ duration: 150 }}>
		<section
			id="modal"
			class="flow w-[100vw] max-w-lg rounded bg-gray-50 px-8 py-4 dark:bg-gray-800"
			in:fly={{ y: -200, duration: 250, delay: delayInOpening }}
			out:fly={{ y: -200, duration: 250, delay: delayInOpening }}
			use:tabTrapping>
			{@render children()}
			{#if canBeClosed}
				<div class="flex items-center justify-center">
					{@render CloseModalButton()}
				</div>
			{/if}
		</section>
	</div>
{/key}

{#snippet CloseModalButton()}
	<button
		id="close-modal"
		onclick={close}
		class="rounded border-2 border-black/80 bg-black/80 px-3 py-2 text-sm text-gray-50 transition-all duration-200 hover:bg-gray-50 hover:text-black/80 sm:text-base dark:border-gray-50 dark:bg-gray-50 dark:text-black/80 dark:hover:bg-black/80 dark:hover:text-gray-50">
		Close
	</button>
{/snippet}
