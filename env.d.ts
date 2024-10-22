declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test"; // Example for NODE_ENV
        NEXT_PUBLIC_FRONTEND_URL: string;
        AUTH_SECRET: string;
        NEXTAUTH_URL: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
    }
}
