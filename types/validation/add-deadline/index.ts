import z from "zod";

export const AddDeadlineSchema = z.object({
  color: z.string(),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(100, "Description must be at most 100 characters long"),
  due: z.date().min(new Date(), "Due date must be in the future"),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(30, "Title must be at most 30 characters long"),
});

export type AddDeadlineSchemaType = z.infer<typeof AddDeadlineSchema>;
