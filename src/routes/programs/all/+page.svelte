<script>
	import { Programs } from '$lib/stores/programs.js';
	import Card from '$lib/components/card.svelte';
	import Modal from '$lib/components/modal.svelte';
	import { nanoid } from 'nanoid/non-secure';
	import dayjs from 'dayjs';

	let showCreateModal = false;
	let showEditModal = false;
	let showDeleteModal = false;
	let selectedProgram;

	function handleModal(action, program, state = true) {
		selectedProgram = program;
		if (action === 'create-program') showCreateModal = state;
		if (action === 'edit-program') showEditModal = state;
		if (action === 'delete-program') showDeleteModal = state;
	}

	function removeOtherCurrent(newCurrent) {
		const oldCurrent = $Programs.find(
			(program) => program.id !== newCurrent.id && program.current === true
		);
		if (oldCurrent) oldCurrent.current = false;
	}

	function addProgram(e) {
		const formData = new FormData(e.target);
		const program = {
			id: nanoid(),
			date_created: dayjs().toISOString(),
			current: false,
			workouts: []
		};
		for (let field of formData) {
			let [key, value] = field;
			if (key === 'current') value = true;
			if (key === 'name' && value === '') value = 'Untitled Program';
			program[key] = value;
		}
		if (program.current) removeOtherCurrent(program);
		$Programs = [...$Programs, program];
		e.target.reset();
		e.target.closest('dialog').close();
	}

	function editProgram(e) {
		const formData = new FormData(e.target);
		const program = $Programs.find((program) => selectedProgram.id === program.id);

		program.current = false;

		for (let field of formData) {
			let [key, value] = field;
			if (key === 'current') value = true;
			program[key] = value;
		}
		if (program.current) removeOtherCurrent(program);
		$Programs = $Programs;
		e.target.reset();
		e.target.closest('dialog').close();
	}

	function deleteProgram(e) {
		const index = $Programs.findIndex((program) => selectedProgram.id === program.id);
		$Programs.splice(index, 1);
		$Programs = $Programs;
		e.target.closest('dialog').close();
	}
</script>

<button id="add-btn" on:click={() => handleModal('create-program', null)}>Create Program</button>
{#if $Programs.length > 0}
	<div class="card-list">
		{#each $Programs as program (program.id)}
			<Card>
				<a href={`/programs/${program.id}`} slot="info">
					<h2>{program.name}</h2>
					{#if program.current}
						<span class="tag">Current</span>
					{/if}
				</a>
				<div class="actions" slot="actions">
					<button on:click={() => handleModal('edit-program', program)}>Edit</button>
					<button on:click={() => handleModal('delete-program', program)}>Delete</button>
				</div>
			</Card>
		{/each}
	</div>
{/if}

{#if showCreateModal}
	<Modal bind:showModal={showCreateModal}>
		<h3 slot="title">Create Program</h3>
		<div slot="body">
			<form on:submit|preventDefault={addProgram}>
				<div>
					<label for="program_name">Name:</label>
					<input name="name" id="program_name" type="text" />
				</div>
				<div>
					<label for="days">Days:</label>
					<select name="days" id="days">
						{#each Array(7) as _, i}
							<option value={i + 1}>{i + 1}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="current">Current:</label>
					<input type="checkbox" name="current" id="current" />
				</div>
				<div>
					<button>Create Program</button>
					<button on:click|preventDefault={() => handleModal('create-program', null, false)}
						>Cancel</button
					>
				</div>
			</form>
		</div>
	</Modal>
{/if}
{#if showEditModal}
	<Modal bind:showModal={showEditModal}>
		<h3 slot="title">Edit Program {selectedProgram.name}</h3>
		<div slot="body">
			<form on:submit|preventDefault={editProgram}>
				<div>
					<label for="program_name">Name:</label>
					<input name="name" id="program_name" type="text" value={selectedProgram.name} />
				</div>
				<div>
					<label for="days">Days:</label>
					<select name="days" id="days" value={parseInt(selectedProgram.days)}>
						{#each Array(7) as _, i}
							<option value={i + 1}>{i + 1}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="current">Current:</label>
					<input
						type="checkbox"
						name="current"
						id="current"
						checked={selectedProgram.current ? true : false}
					/>
				</div>
				<div>
					<button>Save Changes</button>
					<button on:click|preventDefault={() => handleModal('edit-program', null, false)}
						>Cancel</button
					>
				</div>
			</form>
		</div>
	</Modal>
{/if}
{#if showDeleteModal}
	<Modal bind:showModal={showDeleteModal}>
		<h3 slot="title">Delete {selectedProgram.name} Program</h3>
		<div slot="actions">
			<button on:click={(e) => deleteProgram(e)}>Confirm Delete</button>
			<button on:click={() => handleModal('delete-program', null, false)}>Cancel</button>
		</div>
	</Modal>
{/if}