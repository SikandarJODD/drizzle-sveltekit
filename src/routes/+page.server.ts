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
		console.log(urlInfo, typeof urlInfo);

		try {
			await conn.delete(UserQui).where(eq(UserQui.id, Number(urlInfo)));
		} catch (e) {
			console.log(e, 'Error');
		}
	}
};

// const fetchViews = async () => {
// 	const insights = await conn.select().from(PageInsights).where(eq(PageInsights.id, 1));

// 	const views = ++insights[0].views;

// 	await conn.update(PageInsights).set({ views }).where(eq(PageInsights.id, 1)).returning();

// 	return views;
// };
