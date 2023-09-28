<script>
	import Document from '$lib/flexsearch/document.js';
	import { Exercises } from '$lib/stores/exercises.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let foundExercises;
	export let selectedExercises = [];
	export let forViewing;

	const index = new Document({
		document: {
			index: ['name', 'equipment', 'muscles:category', 'muscles:target', 'muscles:synergists'],
			store: [
				'name',
				'equipment',
				'muscles:category',
				'muscles:target',
				'muscles:synergists',
				'url'
			]
		},
		tokenize: 'forward'
	});

	function buildIndex() {
		$Exercises.forEach((item) => index.add(item));
	}

	// function selectionChanged() {
	// 	dispatch('selectionChanged', selectedExercises);
	// }

	function doSearch() {
		const query = document.querySelector('#query').value.trim();

		if (query.length < 2) {
			foundExercises = [];
			return;
		}

		const results = index.search({
			query: query,
			enrich: true
		});

		const items = [];

		if (results[0]) {
			let prevResultName = '';
			for (let i = 0; i < results[0].result.length; i++) {
				if (results[0].result[i].doc.name === prevResultName) continue;
				items.push(results[0].result[i]);
				prevResultName = results[0].result[i].doc.name;
			}
		}
		foundExercises = items;
	}

	function modifySelected(exercise, e) {
		if (e.target.checked) {
			selectedExercises.push({ id: exercise.id, name: exercise.doc.name });
		} else {
			const unchecked = selectedExercises.findIndex((item) => item.id === exercise.id);
			if (unchecked !== -1) selectedExercises.splice(unchecked, 1);
		}
		selectedExercises = selectedExercises;
		dispatch('selectionChanged', selectedExercises);
	}

	buildIndex();
</script>

<input on:input={doSearch} type="search" id="query" name="query" maxlength="128" />

<slot />

{#if forViewing}
	{#if foundExercises}
		<ul>
			{#each foundExercises as item (item.id)}
				<li>
					<a href="/#">{item.doc.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
{:else if foundExercises}
	<ul>
		{#each foundExercises as item (item.id)}
			<li>
				<input
					on:change={(e) => modifySelected(item, e)}
					type="checkbox"
					id={item.id}
					name={item.doc.name}
				/>
				<label for={item.id}>{item.doc.name}</label>
			</li>
		{/each}
	</ul>
{/if}
