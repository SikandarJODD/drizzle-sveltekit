<script lang="ts">
	export let data;
	$: ({ userRework } = data);
</script>

<div class="container">
	{#each userRework as item}
		<h1>{item.title} : {item.content}</h1>
	{/each}
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
