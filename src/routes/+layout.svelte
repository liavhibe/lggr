<script>
	// import '$lib/normalize.css';
	import '$lib/styles.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		let navbarHeight = document.getElementById('navbar').offsetHeight;
		document.querySelector('main').style.paddingBottom = navbarHeight + 'px';
	});
</script>

<main>
	<slot />
</main>

<Navbar />