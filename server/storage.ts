import { 
  contactRequests, 
  type ContactRequest, 
  type InsertContactRequest,
  type ContactRequestStats,
  type ContactStatusType,
  ContactStatus 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, count, sql, gte, like, and, between } from "drizzle-orm";

// Enhanced storage interface with better TypeScript support
export interface IStorage {
  // Core CRUD operations
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  getContactRequestById(id: number): Promise<ContactRequest | undefined>;
  updateContactRequestStatus(id: number, status: ContactStatusType): Promise<ContactRequest | undefined>;
  deleteContactRequest(id: number): Promise<boolean>;
  
  // Analytics and reporting
  getContactRequestStats(): Promise<ContactRequestStats>;
  getContactRequestsByStatus(status: ContactStatusType): Promise<ContactRequest[]>;
  getRecentContactRequests(limit?: number): Promise<ContactRequest[]>;
  
  // Search and filtering
  searchContactRequests(query: string): Promise<ContactRequest[]>;
  getContactRequestsByDateRange(startDate: Date, endDate: Date): Promise<ContactRequest[]>;
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

  async updateContactRequestStatus(id: number, status: ContactStatusType): Promise<ContactRequest | undefined> {
    const [updated] = await db
      .update(contactRequests)
      .set({ status, updatedAt: new Date() })
      .where(eq(contactRequests.id, id))
      .returning();
    return updated;
  }

  async deleteContactRequest(id: number): Promise<boolean> {
    const result = await db
      .delete(contactRequests)
      .where(eq(contactRequests.id, id));
    return result.rowCount > 0;
  }

  async getContactRequestStats(): Promise<ContactRequestStats> {
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
      .where(eq(contactRequests.status, ContactStatus.NEW));
    
    const completed = await db
      .select({ count: count() })
      .from(contactRequests)
      .where(eq(contactRequests.status, ContactStatus.COMPLETED));

    return {
      total: total[0]?.count || 0,
      newThisWeek: newThisWeek[0]?.count || 0,
      pending: pending[0]?.count || 0,
      completed: completed[0]?.count || 0,
    };
  }

  async getContactRequestsByStatus(status: ContactStatusType): Promise<ContactRequest[]> {
    return await db
      .select()
      .from(contactRequests)
      .where(eq(contactRequests.status, status))
      .orderBy(desc(contactRequests.createdAt));
  }

  async getRecentContactRequests(limit: number = 10): Promise<ContactRequest[]> {
    return await db
      .select()
      .from(contactRequests)
      .orderBy(desc(contactRequests.createdAt))
      .limit(limit);
  }

  async searchContactRequests(query: string): Promise<ContactRequest[]> {
    const searchTerm = `%${query}%`;
    return await db
      .select()
      .from(contactRequests)
      .where(
        sql`${contactRequests.firstName} ILIKE ${searchTerm} 
            OR ${contactRequests.lastName} ILIKE ${searchTerm}
            OR ${contactRequests.email} ILIKE ${searchTerm}
            OR ${contactRequests.description} ILIKE ${searchTerm}`
      )
      .orderBy(desc(contactRequests.createdAt));
  }

  async getContactRequestsByDateRange(startDate: Date, endDate: Date): Promise<ContactRequest[]> {
    return await db
      .select()
      .from(contactRequests)
      .where(
        and(
          gte(contactRequests.createdAt, startDate),
          gte(endDate, contactRequests.createdAt)
        )
      )
      .orderBy(desc(contactRequests.createdAt));
  }
}

export const storage = new DatabaseStorage();
