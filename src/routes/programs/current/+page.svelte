<script>
	import { Programs } from '$lib/stores/programs.js';
	import Card from '$lib/components/card.svelte';
	import Modal from '$lib/components/modal.svelte';
	import { nanoid } from 'nanoid/non-secure';
	import dayjs from 'dayjs';

	let program = $Programs.find((program) => program.current === true);

	let showCreateModal = false;
	let showEditModal = false;
	let showDeleteModal = false;
	let showCopyModal = false;
	let selectedWorkout;

	function handleModal(action, workout, state = true) {
		selectedWorkout = workout;
		if (action === 'create-workout') showCreateModal = state;
		if (action === 'edit-workout') showEditModal = state;
		if (action === 'delete-workout') showDeleteModal = state;
		if (action === 'copy-workout') showCopyModal = state;
	}

	function addWorkout(e) {
		const formData = new FormData(e.target);
		const workout = {
			id: nanoid(),
			date_created: dayjs().toISOString(),
			exercises: []
		};
		for (let field of formData) {
			let [key, value] = field;
			if (key === 'name' && value === '') value = 'Untitled Workout';
			workout[key] = value;
		}
		program.workouts.push(workout);
		program = program;
		$Programs = $Programs;
		e.target.reset();
		e.target.closest('dialog').close();
	}

	function editWorkout(e) {
		const formData = new FormData(e.target);
		const workout = program.workouts.find((workout) => selectedWorkout.id === workout.id);

		for (let field of formData) {
			let [key, value] = field;
			workout[key] = value;
		}

		program = program;
		$Programs = $Programs;
		e.target.reset();
		e.target.closest('dialog').close();
	}

	function deleteWorkout(e) {
		const index = program.workouts.findIndex((workout) => selectedWorkout.id === workout.id);
		program.workouts.splice(index, 1);
		program = program;
		$Programs = $Programs;
		e.target.closest('dialog').close();
	}

	function copyWorkout(e) {
		const workout = program.workouts.find((workout) => selectedWorkout.id === workout.id);
		const deepCopy = JSON.parse(JSON.stringify(workout));
		deepCopy.id = nanoid();
		deepCopy.date_created = dayjs().toISOString();
		deepCopy.name = workout.name + ' Copy';
		program.workouts = [...program.workouts, deepCopy];
		$Programs = $Programs;
		e.target.closest('dialog').close();
	}
</script>

<h1>{program.name}</h1>
{#if program.workouts.length > 0}
	<div class="card-list">
		{#each program.workouts as workout, i (workout.id)}
			<Card>
				<a href={`/programs/${program.id}/${workout.id}`} slot="info">
					<h2>{workout.name}</h2>
				</a>
				<div class="actions" slot="actions">
					<button on:click={() => handleModal('edit-workout', workout)}>Edit</button>
					<button on:click={() => handleModal('copy-workout', workout)}>Copy</button>
					<button on:click={() => handleModal('delete-workout', workout)}>Delete</button>
				</div>
			</Card>
		{/each}
	</div>
{/if}
<button id="add-btn" on:click={() => handleModal('create-workout', null)}>Create Workout</button>

{#if showCreateModal}
	<Modal bind:showModal={showCreateModal}>
		<h3 slot="title">Create Workout</h3>
		<div slot="body">
			<form on:submit|preventDefault={addWorkout}>
				<div>
					<label for="program_name">Name:</label>
					<input name="name" id="program_name" type="text" />
				</div>
				<div>
					<button>Create Workout</button>
					<button on:click|preventDefault={() => handleModal('create-workout', null, false)}
						>Cancel</button
					>
				</div>
			</form>
		</div>
	</Modal>
{/if}
{#if showEditModal}
	<Modal bind:showModal={showEditModal}>
		<h3 slot="title">Edit {selectedWorkout.name} Workout</h3>
		<div slot="body">
			<form on:submit|preventDefault={editWorkout}>
				<div>
					<label for="workout_name">Name:</label>
					<input name="name" id="workout_name" type="text" value={selectedWorkout.name} />
				</div>
				<div>
					<button>Save Changes</button>
					<button on:click|preventDefault={() => handleModal('edit-workout', null, false)}
						>Cancel</button
					>
				</div>
			</form>
		</div>
	</Modal>
{/if}
{#if showDeleteModal}
	<Modal bind:showModal={showDeleteModal}>
		<h3 slot="title">Delete {selectedWorkout.name} Program</h3>
		<div slot="actions">
			<button on:click={(e) => deleteWorkout(e)}>Confirm Delete</button>
			<button on:click={() => handleModal('delete-workout', null, false)}>Cancel</button>
		</div>
	</Modal>
{/if}
{#if showCopyModal}
	<Modal bind:showModal={showCopyModal}>
		<h3 slot="title">Copy Workout</h3>
		<div slot="actions">
			<button on:click={(e) => copyWorkout(e)}>Comfirm Copy</button>
			<button on:click={() => handleModal('copy-workout', null, false)}>Cancel</button>
		</div>
	</Modal>
{/if}
