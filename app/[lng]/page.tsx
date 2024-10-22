import { ISession } from "../../@types/types";
import { auth } from "../../auth";
import { LandingPage } from "../components/landing";

export default async function Page({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const session = (await auth()) as ISession;
    console.log(session);
    return (
        <>
            <LandingPage lng={lng}></LandingPage>
        </>
    );
}

export async function generateStaticParams() {
    return [{ lng: "he" }, { lng: "en" }, { lng: "ar" }];
}
