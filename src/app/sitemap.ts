import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

const ROUTES: [string, number][] = [
  ["/", 1],
  ["/service", 0.9],
  ["/about", 0.8],
  ["/case-study", 0.7],
  ["/contact", 0.9],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(([path, priority]) => ({
    url: SITE_ORIGIN + path,
    changeFrequency: "weekly",
    priority,
  }));
}
