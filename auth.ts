import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

import { authConfig } from "./auth.config";

//@ts-ignore
export const { auth, signIn, signOut, update, handlers } = NextAuth({
    ...authConfig,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, user, token }: any) {
            try {
                session.user = token.user;
            } catch (e) {
                console.log(e);
            }
            console.log("user", user);
            return session;
        },
    },
    //@ts-ignore
    skipCSRFCheck: true,
});
