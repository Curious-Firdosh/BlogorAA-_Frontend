import z from "zod";
export declare const creatBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, z.core.$strip>;
export type CreateBlogInput = z.infer<typeof creatBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
