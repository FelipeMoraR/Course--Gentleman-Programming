import {z} from "zod";

export const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required")
}).refine((data) => data.password === data.confirmPassword, { //They've to be the same and if they aren't, the message below will appear
    message: "Passwords dont't match",
    path: ["confirmPassword"]
});

export type FormValues = z.infer<typeof schema>; //Type of the schema