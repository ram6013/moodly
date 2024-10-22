"use client";

import { IUser } from "@/@types/types";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExitIcon } from "@radix-ui/react-icons";

import { signIn, signOut } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../i18n/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function SignInButton({
    lng,
    user,
}: {
    lng: string;
    user?: IUser;
}) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") ?? "/";

    const newLang = lng === "en" ? "es" : "en";

    const { t, i18n } = useTranslation(lng);
    const router = useRouter();
    const pathname = usePathname();

    return user ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    {" "}
                    <Avatar>
                        <AvatarImage
                            src={user?.image ?? "/default.webp"}
                            alt="@shadcn"
                        />
                        <AvatarFallback>{user?.name}</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={() => {
                        i18n.changeLanguage(newLang);
                        const newPath = pathname.replace(
                            `/${lng}`,
                            `/${newLang}`
                        );
                        router.push(newPath, {
                            scroll: false,
                        });
                    }}
                >
                    <img
                        className="w-8 h-8"
                        src={`/en/flags/${newLang}.png`}
                    ></img>{" "}
                    {lng === "en" ? "es" : "en"}
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => signOut()}>
                    <ExitIcon className="mr-2 h-4 w-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <form>
            <Button variant={"secondary"} onClick={() => signIn()}>
                {" "}
                Login{" "}
            </Button>
        </form>
    );
}
