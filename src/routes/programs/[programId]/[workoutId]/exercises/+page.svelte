<script>
	import Search from '$lib/components/search.svelte';
	import { page } from '$app/stores';
	import { Programs } from '$lib/stores/programs.js';
	import { goto } from '$app/navigation';

	const program = $Programs.find((program) => program.id === $page.params.programId);
	const workout = program.workouts.find((workout) => workout.id === $page.params.workoutId);
	console.log(workout);

	let exercises;
	function changeWorkoutExercises() {
		exercises.forEach((exer) => workout.exercises.push(exer));
		$Programs = $Programs;
		goto(`/programs/${$page.params.programId}/${$page.params.workoutId}`);
	}
</script>

<Search forViewing={false} on:selectionChanged={(e) => (exercises = e.detail)}>
	{#if exercises && exercises.length > 0}
		<button on:click={changeWorkoutExercises}>Add to Workout</button>
	{/if}
</Search>
