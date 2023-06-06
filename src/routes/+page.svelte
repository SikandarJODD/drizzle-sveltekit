<script lang="ts">
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';

	export let data;
	$: ({ userRework } = data);
</script>

<main>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-5">
		Drizzle ORM + <span class="text-orange-400">SvelteKit</span>
	</h1>
	<div class="container border-2 w-fit my-3 mx-0 py-2 border-gray-700 bg-gray-50">
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
	<div class="container border-2 border-gray-900 bg-gray-100 shadow-md flex flex-wrap">
		{#each userRework as item}
			<div
				class="flex bg-sky-300 border-2 border-gray-900 m-3 p-2 rounded-md w-fit items-center shadow_normal relative hover:-translate-x-1 hover:-translate-y-1"
			>
				<h3 class="text-xl font-semibold tracking-tight capitalize">
					{item.title} : {item.content}
				</h3>
				<div class="mx-3">
					<form action="?/delete&id={item.id}" method="POST">
						<Button type="submit">Delete</Button>
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
