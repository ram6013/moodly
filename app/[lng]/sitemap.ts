import { MetadataRoute } from "next";

type Route = {
    url: string;
    lastModified: string;
};

let baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routesMap = ["/"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routesMap];
}
