import { z } from "zod";
import { Database } from "./supabase";

export const desireSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  manifestation_scene: z
    .string()
    .min(10, "Scene description should be at least 10 characters")
    .max(300, "Scene description is too long")
    .optional(),
  category: z.enum(["career", "relationships", "health", "wealth", "personal_growth", "other"]),
  send_notifications: z.boolean(),
});

export type DesireFormData = z.infer<typeof desireSchema>;

export type AddDesireResult = {
  success: boolean;
  message: string;
};

export type FeedEvent = Database["public"]["Tables"]["feed_events"]["Row"] & {
  user: Database["public"]["Tables"]["profiles"]["Row"];
  desire?: Database["public"]["Tables"]["desires"]["Row"];
  realization?: Database["public"]["Tables"]["realizations"]["Row"];
  testimonial?: Database["public"]["Tables"]["testimonials"]["Row"];
};
