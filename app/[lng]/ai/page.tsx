import { ISession } from "@/@types/types";
import { auth } from "@/auth";
import CameraComponent from "../../components/camera-component";

export default async function Ai({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    const session = (await auth()) as ISession;
    return (
        <div>
            <CameraComponent></CameraComponent>
        </div>
    );
}
