<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flow">
	<h1 class="text-heading-sm sm:text-heading-lg text-center">{page.status}</h1>
	<p class="text-md text-center font-bold sm:text-lg">{page.error.message}</p>
</div>
