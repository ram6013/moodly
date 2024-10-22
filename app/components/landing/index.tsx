"use client";

import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { Button } from "../ui/button";

export function LandingPage({ lng }: { lng: string }) {
    const { t } = useTranslation(lng);
    return (
        <div className="bg-gradient-to-b from-black to-gray-600 h-screen w-full p-4 gap-8 flex flex-col items-center justify-center">
            <h1 className="text-white text-8xl font-mochiy">Moodly</h1>

            <p className="text-white max-w-4xl text-lg">{t("description")}</p>
            <img
                src="/en/misc/class.png"
                className="aspect-square w-[15%] mx-auto"
                alt="Class"
            />
            <Link href="/ai">
                <Button>{t("tryIt")}</Button>
            </Link>
        </div>
    );
}
