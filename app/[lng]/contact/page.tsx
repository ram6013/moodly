import { ISession } from "@/@types/types";
import { auth } from "@/auth";

export default async function ContactPage({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const session = (await auth()) as ISession;
    console.log(session);

    return <div>Contact</div>;
}

export async function generateStaticParams() {
    return [{ lng: "he" }, { lng: "en" }, { lng: "ar" }];
}
