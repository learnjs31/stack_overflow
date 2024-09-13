import { z } from "zod";

export const QuestionsSchema = z.object({
    title: z.string().min(5, {
      message: "Question must be at least 5 characters.",
    }).max(130, {
        message: "Question must be less than 130 characters."
    }),
    explanation:z.string().min(100, {
        message: "Explanation must be at least 100 characters."
    }),
    tags: z.array(z.string().min(1).max(20)).min(1, { message: "Select at least one tag." }).max(3, { message: "Select at most 3 tags." }),
  });