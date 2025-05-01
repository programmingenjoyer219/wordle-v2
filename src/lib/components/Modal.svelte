<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	var { children, showModal = $bindable(false) } = $props();

	function closeModal() {
		showModal = false;
	}

	function closeModalOnEscape(evt: KeyboardEvent) {
		if (evt.key == 'Escape' && showModal) {
			closeModal();
		}
	}
</script>

<svelte:window onkeydown={closeModalOnEscape} />

{#key showModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		hidden={!showModal}
		id="modal-backdrop"
		class="absolute top-0 left-0 z-10 grid h-full w-full place-content-center bg-black/40"
		onclick={function handleBackdropClick(evt) {
			if (evt.target == evt.currentTarget) closeModal();
		}}
		transition:fade={{ duration: 150 }}
	>
		<section
			id="modal"
			class="flow w-[100vw] max-w-lg rounded bg-gray-50 px-8 py-4"
			transition:fly={{ y: -200, duration: 250 }}
		>
			{@render children()}
			<div class="flex items-center justify-center">
				<button
					id="close-modal"
					onclick={closeModal}
					class="rounded border-2 border-black/80 bg-black/80 px-3 py-2 text-sm text-gray-50 transition-all duration-200 hover:bg-gray-50 hover:text-black/80 sm:text-base"
					>Close</button
				>
			</div>
		</section>
	</div>
{/key}
