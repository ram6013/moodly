import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import { Providers } from "../components/providers";
import { cn } from "../lib/utils";
import "./global.css";

import { Header } from "../components/header";

export function generateMetadata({
    params,
}: {
    params: { lng: string };
}): Metadata {
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL as string),
        alternates: {
            canonical: "/",
            languages: {
                en: "/en",
                he: "/he",
                ar: "/ar",
            },
        },
        title: {
            default: "Moodly",
            template: `%s - Moodly`,
        },
        description: "",
        icons: {
            icon: "/en/background.jpeg",
            shortcut: "/en/background.jpeg",
            apple: "/en/background.jpeg",
        },
        twitter: {
            description: "",
        },
        openGraph: {
            description: "",
            siteName: "Moodly",
            url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
            images: ["/en/background.jpeg"],
        },
        keywords: ["Moodly"],
        authors: [
            {
                name: "Moodly Inc.",
                url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
            },
        ],
    };
}

export default async function RootLayout({
    children,
    params: { lng, menuId },
}: {
    children: React.ReactNode;
    params: { lng: string; menuId?: string };
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head></head>
            <body className={cn("font-english font-english-bold font-hebrew")}>
                <Toaster />
                <Providers attribute="class" defaultTheme="dark" enableSystem>
                    <Header lng={lng}></Header>
                    <main>{children}</main>
                </Providers>
                <SpeedInsights />
            </body>
        </html>
    );
}
