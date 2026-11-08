import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(2000),
});

export const intakeSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  projectType: z.string().trim().min(1, "Choose a project type").max(80),
  features: z.array(z.string().max(80)).max(20).default([]),
  budget: z.string().trim().min(1, "Choose a budget").max(40),
  timeline: z.string().trim().min(1, "Choose a timeline").max(40),
  details: z.string().trim().max(3000).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type IntakeInput = z.infer<typeof intakeSchema>;
