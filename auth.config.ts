//@ts-ignore
import { NextAuthConfig } from "next-auth";

export const authConfig = {
    secret: process.env.AUTH_SECRET,
    //@ts-ignore
    skipCSRFCheck: true,
} satisfies NextAuthConfig;
