"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, isActive } from "./HeaderNav";
import { cn } from "../lib/utils";
import { SOCIAL } from "../lib/social";

/**
 * The capture kept the template's hamburger glyph but not Webflow's menu runtime, so on
 * phones and tablets the nav had no way to open. This replaces the inert glyph with a
 * working button plus a slide-down panel; it is only mounted below `lg`, where the
 * desktop nav is hidden.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  // A panel that outlives its trigger is a trap on a phone: close on Escape, and never
  // leave the page locked if the viewport grows past the breakpoint mid-session.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1025px)");
    const onWide = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="hidden max-lg:block">
      <button
        type="button"
        className="w-10 h-10 flex flex-col justify-center items-center gap-[0.35rem] rounded-[8px] cursor-pointer"
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className="w-6 h-[2px] block rounded-[2px] bg-color-001 transition-transform duration-200"
          style={open ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
        />
        <span
          className="w-6 h-[2px] block rounded-[2px] bg-color-001 transition-transform duration-200"
          style={open ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined}
        />
      </button>

      {open && (
        <div
          className="fixed inset-x-0 bottom-0 top-[3.9375rem] z-9999 bg-clr-5"
          onClick={() => setOpen(false)}
        >
          <nav
            id="menu-movil"
            className="block px-[0.9375rem] py-6 bg-color-001"
            role="navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-stretch gap-1">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  className={cn(
                    "block py-3 px-4 rounded-[12px] text-lg leading-6 cursor-pointer",
                    isActive(pathname, l.href) ? "text-color-004 bg-color-011" : "text-background",
                  )}
                  aria-current={isActive(pathname, l.href) ? "page" : undefined}
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              className="h-[2.9rem] flex mt-5 justify-center items-center gap-2.5 rounded-[50px] bg-color-011 text-color-004 leading-6 cursor-pointer"
              href="https://wa.me/593979898964"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Agenda tu cita por WhatsApp
            </a>
            <div className="flex mt-5 flex-col items-start gap-1 px-4">
              <a className="block text-background leading-6" href="tel:+593979898964">
                +593 97 989 8964
              </a>
              <a className="block text-color-009 leading-6" href="mailto:medicallivesthetic@gmail.com">
                medicallivesthetic@gmail.com
              </a>
              <div className="block text-color-009 leading-6">
                Lunes a viernes · 8:30 – 12:00 y 14:00 – 17:30
              </div>
            </div>
            <div className="flex mt-5 px-4 gap-3">
              {SOCIAL.map((s) => (
                <a key={s.href} className="w-10 h-10 flex rounded-[100%] justify-center items-center bg-color-006 cursor-pointer" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <img className="w-4 h-4 block object-contain" src={s.icon} alt="" width="16" height="16" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
