"use client";

import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

/**
 * The captured nav hard-coded the active pill (and aria-current) onto "Inicio", so every page
 * looked like the home page was selected. This derives the active item from the current route.
 */
export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
  { href: "/service", label: "Servicios" },
  { href: "/case-study", label: "Resultados" },
  { href: "/contact", label: "Contacto" },
];

export function isActive(pathname: string, href: string) {
  const p = pathname.replace(/\/+$/, "") || "/";
  return href === "/" ? p === "/" : p === href || p.startsWith(href + "/");
}

export default function HeaderNav() {
  const pathname = usePathname() || "/";
  return (
    <nav className="block relative float-right max-lg:hidden" role="navigation">
      <div className="flex justify-start items-center gap-[0.3125rem] max-lg:hidden">
        {NAV.map((l) => {
          const active = isActive(pathname, l.href);
          return (
            <a
              key={l.href}
              className={cn(
                "block relative max-w-407.5 py-2.5 px-[2.1875rem] max-2xl:px-6 rounded-[30px] align-top leading-6 text-left cursor-pointer",
                active ? "text-color-004 bg-color-011" : "text-background",
              )}
              aria-current={active ? "page" : undefined}
              href={l.href}
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
