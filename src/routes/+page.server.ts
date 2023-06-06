// src/routes/+page.server.ts

import { conn } from '../lib/db/conn.server';
import { UserQui } from '../lib/db/schema';

export const load = async () => {
	const userQ = await conn.select().from(UserQui);
	return { userRework: userQ };
};

// const fetchViews = async () => {
// 	const insights = await conn.select().from(PageInsights).where(eq(PageInsights.id, 1));

// 	const views = ++insights[0].views;

// 	await conn.update(PageInsights).set({ views }).where(eq(PageInsights.id, 1)).returning();

// 	return views;
// };
