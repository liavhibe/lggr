// import { writable } from 'svelte/store';
import { localStore } from '$lib/stores/localStore.js';

// let Programs = writable([
// 	{
// 		id: '1',
// 		name: 'push pull',
// 		days: 4,
// 		current: false,
// 		date_created: '2023-07-17T06:50:08.086Z',
// 		workouts: []
// 	},
// 	{
// 		id: '2',
// 		name: 'fullbody',
// 		days: 3,
// 		current: true,
// 		date_created: '2023-05-17T06:50:08.086Z',
// 		workouts: [
// 			{
// 				id: '4sBf7ta4N-3kzNgq-Zvll',
// 				date_created: '2023-07-27T19:05:25.467Z',
// 				name: 'Test',
// 				exercises: []
// 			},
// 			{
// 				id: 'WDsbBqb4NKfqJhHGbu8XE',
// 				date_created: '2023-07-27T19:06:01.633Z',
// 				name: 'Test Copy',
// 				exercises: []
// 			}
// 		]
// 	}
// ]);

const Programs = localStore('Programs', []);

export { Programs };
