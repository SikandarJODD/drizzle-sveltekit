// src/routes/+page.server.ts
import type { Actions } from './$types';

import { conn } from '../lib/db/conn.server';
import { UserQui } from '../lib/db/schema';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const userQ = await conn.select().from(UserQui);
	return { userRework: userQ };
};
export const actions: Actions = {
	insertData: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData());
		console.log(title, content);

		try {
			await conn.insert(UserQui).values({
				title: String(title),
				content: String(content)
			});
		} catch (e) {
			console.log(e, 'Error');
		}
	},
	delete: async ({ url }) => {
		const urlInfo = url.searchParams.get('id');

		try {
			await conn.delete(UserQui).where(eq(UserQui.id, Number(urlInfo)));
		} catch (e) {
			console.log(e, 'Error');
		}
	},
	editData: async ({ request, url }) => {
		const urlInfo = url.searchParams.get('io');
		const { title, content } = Object.fromEntries(await request.formData());

		console.log(urlInfo, title, content, ' URL INFOOOOOO');
		try {
			console.log('inside try');
			await conn
				.update(UserQui)
				.set({
					title: String(title),
					content: String(content)
				})
				.where(eq(UserQui.id, Number(urlInfo))).returning();

			// await conn.delete(UserQui).where(eq(UserQui.id, Number(urlInfo)));
		} catch (e) {
			console.log(e, 'Error');
		}
	}
};


