import { pgTable, text, serial, timestamp, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  serviceType: varchar("service_type", { length: 50 }),
  description: text("description"),
  status: varchar("status", { length: 20 }).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Enhanced schema with better validation and TypeScript support
export const insertContactRequestSchema = createInsertSchema(contactRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  serviceType: true,
  description: true,
}).extend({
  firstName: z.string().min(1, "First name is required").max(100, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(100, "Last name too long"),
  email: z.string().email("Please enter a valid email address").max(255, "Email too long"),
  phone: z.string().regex(/^[\d\s\-\(\)\+]*$/, "Please enter a valid phone number").optional(),
  serviceType: z.enum(["residential", "commercial", "foundation", "emergency"], {
    errorMap: () => ({ message: "Please select a valid service type" })
  }).optional(),
  description: z.string().max(1000, "Description too long").optional(),
});

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;

// Service types enum for better type safety
export const ServiceTypes = {
  RESIDENTIAL: "residential",
  COMMERCIAL: "commercial", 
  FOUNDATION: "foundation",
  EMERGENCY: "emergency"
} as const;

export type ServiceType = typeof ServiceTypes[keyof typeof ServiceTypes];

// Contact status enum
export const ContactStatus = {
  NEW: "new",
  CONTACTED: "contacted",
  QUOTED: "quoted",
  SCHEDULED: "scheduled",
  COMPLETED: "completed",
  CANCELLED: "cancelled"
} as const;

export type ContactStatusType = typeof ContactStatus[keyof typeof ContactStatus];

// API Response types for better type safety
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface ContactRequestStats {
  total: number;
  newThisWeek: number;
  pending: number;
  completed: number;
}
