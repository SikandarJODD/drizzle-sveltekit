import { integer, serial, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const UserQui = pgTable('rework', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull()
});
