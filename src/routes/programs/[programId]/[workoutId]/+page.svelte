<script>
	import { page } from '$app/stores';
	import { Programs } from '$lib/stores/programs.js';

	const program = $Programs.find((program) => program.id === $page.params.programId);
	const workout = program.workouts.find((workout) => workout.id === $page.params.workoutId);
</script>

<h1>{workout.name}</h1>
