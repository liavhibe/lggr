import Document from '$lib/flexsearch/document.js';

const index = new Document({
	document: {
		index: ['name', 'equipment', 'force'],
		store: ['name', 'equipment', 'force']
	},
	tokenize: 'forward'
});

async function buildIndex() {
	await fetch('src/lib/data/exercises.json')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			data.forEach(function (item) {
				index.add(item);
			});
		});
	// const result = await index.search('row');
	// console.log(result);
}

function showResults(items) {
	console.log(items);
	// const results = document.querySelector('.search-results ul');
	// results.textContent = '';
	// for (const id in items) {
	// 	const item = items[id];
	// 	const liElement = `
	//     <div>
	//       <h3>${item.name}</h3>
	//     </div>
	//     `;
	// 	results.insertAdjacentHTML('beforeend', liElement);
	// }
}

function doSearch() {
	const query = document.querySelector('#query').value.trim();
	console.log(query);
	const results = index.search({
		query: query,
		enrich: true
	});

	const items = {};
	results.forEach(function (result) {
		result.result.forEach(function (r) {
			items[r.id] = r.doc;
		});
	});
	showResults(items);
}

function enableUI() {
  console.log('enable');
	const searchInput = document.querySelector('#query');
	// searchform.addEventListener('submit', function (e) {
	// 	e.preventDefault();
	// 	doSearch(true);
	// });
	searchInput.addEventListener('input', function () {
		doSearch();
	});
}

buildIndex();
document.addEventListener('DOMContentLoaded', enableUI());
