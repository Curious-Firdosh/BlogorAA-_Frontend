    import z from "zod";

    export const creatBlogInput = z.object({
        title : z.string(),
        content : z.string()
    })


    export const updateBlogInput = z.object({
        title : z.string(),
        content : z.string(),
        id : z.number()
    })

    export type CreateBlogInput = z.infer<typeof creatBlogInput>
    export type UpdateBlogInput = z.infer<typeof updateBlogInput>


