"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function Params() {
    const searchParams = useSearchParams()!;

    return searchParams.toString().length !== 0 ? (
        <div className="px-2 text-gray-500">
            {Array.from(searchParams.entries()).map(([key, value], index) => {
                if (key === "verifyData") {
                    return null;
                }
                return (
                    <React.Fragment key={key}>
                        {index !== 0 ? <span>&</span> : null}
                        <span className="px-1">
                            <span
                                key={key}
                                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
                            >
                                {key}
                            </span>
                            <span>=</span>
                            <span
                                key={value}
                                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
                            >
                                {value}
                            </span>
                        </span>
                    </React.Fragment>
                );
            })}
        </div>
    ) : null;
}

export function AddressBar() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").splice(2);

    let displayParts = pathParts;

    return (
        <div className="flex bg-neutral-800 rounded-lg items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
            <div className="flex gap-x-1 md:text-sm text-xs md:font-medium">
                {displayParts.map((part, index) => {
                    const href = "/" + pathParts.slice(0, index + 1).join("/");
                    const isLast = index === pathParts.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <Link
                                aria-label="adress bar"
                                className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5  "
                                href={href}
                            >
                                {part}
                            </Link>
                            {!isLast && <span className="">/</span>}
                        </React.Fragment>
                    );
                })}
                <Suspense>
                    <Params />
                </Suspense>
            </div>
        </div>
    );
}
