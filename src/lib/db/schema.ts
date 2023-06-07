import {  serial, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const UserQui = pgTable('rework', {
	id: serial('id').primaryKey(),
	title: varchar('title', { length: 40 }).notNull(),
	content: varchar('content', { length: 40 }).notNull()
});
