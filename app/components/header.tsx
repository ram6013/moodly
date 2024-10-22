import { ISession } from "@/@types/types";
import { auth } from "@/auth";
import Link from "next/link";
import { useTranslation } from "../i18n";
import SignInButton from "./singin-button";
import { Button } from "./ui/button";

export async function Header({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng);
    const session = (await auth()) as ISession;

    return (
        <header
            className={`sticky top-0 z-50 md:px-12 lg:px-48 flex items-center justify-between w-full h-16 px-4 shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl`}
        >
            <Link className="hover:opacity-75" href="/" title="Home">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <h1 className="hidden my-auto text-xl my-auto font-bold md:block">
                            Moodly
                        </h1>
                    </Link>
                </div>
            </Link>
            <div className="flex items-center justify-end space-x-2 md:mr-16">
                <Link href={"/about"}>
                    <Button variant={"ghost"}>About</Button>
                </Link>

                <Link href={"/contact"}>
                    <Button variant={"ghost"}>Contact</Button>
                </Link>

                <SignInButton user={session?.user} lng={lng}></SignInButton>
            </div>
        </header>
    );
}
