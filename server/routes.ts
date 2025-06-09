import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Here you would integrate with an email service like Nodemailer
      // For now, we'll log the email that would be sent
      console.log("Email would be sent to:", process.env.CONTACT_EMAIL || "info@solidfoundation.com");
      console.log("New contact request:", contactRequest);
      
      res.json({ 
        success: true, 
        message: "Your request has been submitted successfully. We'll contact you within 24 hours.",
        id: contactRequest.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact request:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again." 
        });
      }
    }
  });

  // Get all contact requests (for admin dashboard)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ message: "Failed to fetch contact requests" });
    }
  });

  // Get contact request stats
  app.get("/api/admin/stats", async (req, res) => {
    try {
      const stats = await storage.getContactRequestStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });

  // Update contact request status
  app.patch("/api/admin/contacts/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || !["new", "pending", "completed"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      
      const updated = await storage.updateContactRequestStatus(id, status);
      if (!updated) {
        return res.status(404).json({ message: "Contact request not found" });
      }
      
      res.json(updated);
    } catch (error) {
      console.error("Error updating contact request:", error);
      res.status(500).json({ message: "Failed to update contact request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
