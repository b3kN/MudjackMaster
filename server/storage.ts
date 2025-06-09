import { contactRequests, type ContactRequest, type InsertContactRequest } from "@shared/schema";
import { db } from "./db";
import { eq, desc, count, sql, gte } from "drizzle-orm";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  getContactRequestById(id: number): Promise<ContactRequest | undefined>;
  updateContactRequestStatus(id: number, status: string): Promise<ContactRequest | undefined>;
  getContactRequestStats(): Promise<{
    total: number;
    newThisWeek: number;
    pending: number;
    completed: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [contactRequest] = await db
      .insert(contactRequests)
      .values(request)
      .returning();
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return await db
      .select()
      .from(contactRequests)
      .orderBy(desc(contactRequests.createdAt));
  }

  async getContactRequestById(id: number): Promise<ContactRequest | undefined> {
    const [request] = await db
      .select()
      .from(contactRequests)
      .where(eq(contactRequests.id, id));
    return request;
  }

  async updateContactRequestStatus(id: number, status: string): Promise<ContactRequest | undefined> {
    const [updated] = await db
      .update(contactRequests)
      .set({ status, updatedAt: new Date() })
      .where(eq(contactRequests.id, id))
      .returning();
    return updated;
  }

  async getContactRequestStats(): Promise<{
    total: number;
    newThisWeek: number;
    pending: number;
    completed: number;
  }> {
    const total = await db.select({ count: count() }).from(contactRequests);
    
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const newThisWeek = await db
      .select({ count: count() })
      .from(contactRequests)
      .where(gte(contactRequests.createdAt, weekAgo));
    
    const pending = await db
      .select({ count: count() })
      .from(contactRequests)
      .where(eq(contactRequests.status, "pending"));
    
    const completed = await db
      .select({ count: count() })
      .from(contactRequests)
      .where(eq(contactRequests.status, "completed"));

    return {
      total: total[0]?.count || 0,
      newThisWeek: newThisWeek[0]?.count || 0,
      pending: pending[0]?.count || 0,
      completed: completed[0]?.count || 0,
    };
  }
}

export const storage = new DatabaseStorage();
