<script>
	import { page } from '$app/stores';
	import { Programs } from '$lib/stores/programs.js';
	import Card from '$lib/components/card.svelte';

	const program = $Programs.find((program) => program.id === $page.params.programId);
	const workout = program.workouts.find((workout) => workout.id === $page.params.workoutId);
</script>

<h1>{workout.name}</h1>
{#if workout.exercises.length > 0}
	<div class="card-list">
		{#each workout.exercises as exercise (exercise.id)}
			<Card>
				<h2 slot="info">{exercise.name}</h2>
			</Card>
		{/each}
	</div>
{/if}
<a href={`/programs/${$page.params.programId}/${$page.params.workoutId}/exercises`}>
	<button id="add-btn">Add Exercise</button>
</a>
