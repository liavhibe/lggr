<script>
	import { Programs } from '$lib/stores/programs.js';
	import { onMount } from 'svelte';

	$: hasCurrent = $Programs.some((program) => program.current === true);

	onMount(() => {
		const topNavbarHeight = document.getElementById('top-navbar').offsetHeight;
		document.getElementById('content').style.paddingTop = topNavbarHeight + 'px';
	});
</script>

<nav id="top-navbar">
	{#if hasCurrent}
		<a href="/programs/current">Current</a>
	{/if}
	<a href="/programs/all">All</a>
</nav>

<div id="content">
	<slot />
</div>