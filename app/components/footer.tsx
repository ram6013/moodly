import Image from "next/image";
import Link from "next/link";
import { IMenu, MenuColors, SocialMediaType } from "../../@types/types";

function Footer({
    colors,
    menu,
    lng,
}: {
    colors: MenuColors;
    menu: IMenu;
    lng: string;
}) {
    console.log(menu.socials);
    return (
        <div
            className="w-full flex flex-col items-center justify-center z-100 -mt-8"
            style={{ background: colors.primary, color: colors.text }}
        >
            {menu.socials && <SocialMediaCard menu={menu} colors={colors} />}

            <Link href={"/"}>
                <Image
                    src="/ar/logo.png"
                    alt="/favicon.ico"
                    className=" -mt-24"
                    width={350}
                    height={120}
                ></Image>
            </Link>
        </div>
    );
}

const SocialMediaCard = ({
    menu,
    colors,
}: {
    menu: IMenu;
    colors: MenuColors;
}) => {
    return (
        <>
            {menu.socials && (
                <div className="flex flex-row items-center justify-center gap-2">
                    {Object.entries(menu.socials).map(([key, value]) => {
                        if (value.display === "" && !value.url) return null;

                        let url = value.url;
                        if (SocialMediaType.Phone === key) {
                            url = `tel:${value.display}`;
                        } else if (SocialMediaType.Whatsapp === key) {
                            url = value.display;
                        }
                        if (!url) url = "/";
                        return (
                            <div
                                key={key}
                                className="text-2xl border-2 p-2 rounded-xl z-20 cursor-pointer"
                                style={{
                                    color: colors.text,
                                    borderColor: colors.text,
                                }}
                            >
                                <a
                                    href={url}
                                    target="_blank"
                                    style={{ color: colors.text }}
                                ></a>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Footer;
