import z from "zod";

export const signupInput = z.object({
    username : z.string(),
    email : z.email("It Not Righ Email Format"),
    password : z.string().min(6 , "Atleast 6 Charecters In Password"),
});

export const loginInput = z.object({
    email : z.email("It Not Righ Email Format"),
    password : z.string().min(6 , "Atleast 6 Charecters In Password"),
});


export type SignupInput = z.infer<typeof signupInput>
export type LoginInput = z.infer<typeof loginInput>
