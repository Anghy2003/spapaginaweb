"use client";

import { NAV, isActive } from "./HeaderNav";
import { usePathname } from "next/navigation";

/**
 * Footer link columns. Like the header, the capture pinned aria-current to "Inicio" on every
 * page; this derives it from the route and keeps both columns in sync with NAV.
 */
export default function FooterNav({ from, to }: { from: number; to: number }) {
  const pathname = usePathname() || "/";
  return (
    <div className="flex flex-col justify-start items-start gap-[0.8rem] max-md:flex-1 max-lg:gap-[0.4rem]">
      {NAV.slice(from, to).map((l) => {
        const active = isActive(pathname, l.href);
        return (
          <a
            key={l.href}
            className="block text-background cursor-pointer"
            aria-current={active ? "page" : undefined}
            href={l.href}
          >
            {l.label}
          </a>
        );
      })}
    </div>
  );
}
