<script>
	import { Programs } from '$lib/stores/programs.js';

	$: hasCurrent = $Programs.some((program) => program.current === true);
</script>

<nav id="navbar">
	<a href="/">Dashboard</a>
	{#if hasCurrent}
		<a href="/programs/current">Programs</a>
	{:else}
		<a href="/programs/all">Programs</a>
	{/if}
	<a href="/exercises">Exercises</a>
	<a href="/analytics">Analytics</a>
	<a href="/settings">Settings</a>
</nav>
