<script lang="ts">
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { fly, fade, scale } from 'svelte/transition';

	export let data;
	$: ({ userRework } = data);
	let i = 1;
	$: fi = userRework.filter((u) => u.id === i);

	$: titleEdited = fi[0].title;
	$: contentEdited = fi[0].content;
	$: t = titleEdited;
	$: c = contentEdited;
	let visible = false;
	$: {
		console.log(userRework, titleEdited, contentEdited, fi);
	}
</script>

<main>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-5">
		Drizzle ORM + <span class="text-orange-400">SvelteKit</span> +
		<span class="text-pink-500">Shadcn-Svelte</span>
	</h1>
	<div class="flex">
		<div class="container border-2 w-fit my-3 mx-3 py-2 border-gray-700 bg-gray-50">
			<form action="?/insertData" method="POST">
				<div class="flex items-center my-2">
					<Label for="title" class="mr-2">Title of Card :</Label>
					<Input type="text" name="title" id="title" placeholder="Title" class="w-fit" />
				</div>
				<div class="flex items-center my-2">
					<Label for="content" class="mr-2">Conent : Short & Sweet :</Label>
					<Input type="text" name="content" id="content" placeholder="Content" class="w-fit" />
				</div>
				<div>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
		{#if visible}
			{#key visible}
				<div class="container border-2 w-fit my-3 mx-3 py-2 border-gray-700 bg-sky-100" in:scale>
					<form action="?/editData&io={i}" method="POST">
						<div class="flex items-center my-2">
							<Label for="title" class="mr-2">Title of Card :</Label>
							<Input
								type="text"
								name="title"
								id="title"
								placeholder="Title"
								class="w-fit"
								bind:value={t}
							/>
						</div>
						<div class="flex items-center my-2">
							<Label for="content" class="mr-2">Conent : Short & Sweet :</Label>
							<Input
								type="text"
								name="content"
								id="content"
								placeholder="Content"
								class="w-fit"
								bind:value={c}
							/>
						</div>
						<div>
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</div>
			{/key}
		{/if}
	</div>
	<div class="container border-2 border-gray-900 bg-gray-100 shadow-md flex flex-wrap">
		{#each userRework as item, index}
			<div
				class="flex bg-sky-300 border-2 border-gray-900 m-3 p-2 rounded-md w-fit items-center shadow_normal relative hover:-translate-x-1 hover:-translate-y-1"
			>
				<h3 class="text-xl font-semibold tracking-tight capitalize">
					{item.title} : {item.content}
				</h3>
				<div class="mx-3">
					<form action="?/delete&id={item.id}" method="POST">
						<Button type="submit" class="my-2 md:my-0">Delete</Button>
						<Button
							type="button"
							on:click={() => {
								console.log(item.id, ' :Id', index, ' :Index');
								i = item.id;
								visible = true;
							}}>Edit</Button
						>
					</form>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	.shadow_normal {
		transition: all 0.3s ease;
	}
	.shadow_normal:hover {
		transform: translate(3px 3px) !important;
		box-shadow: 3px 3px #00082e;
		transition: all 0.3s ease;
	}
</style>
