import "./globals.css";
import "./ditto-chrome.css";
import "./fx.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import ScrollFx from "./fx/ScrollFx";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import FooterNav from "./FooterNav";

const SITE_TITLE = "Medical Livesthetic Fisiospa | Fisioterapia y estética avanzada en Cuenca";
const SITE_DESCRIPTION = "Estética avanzada + fisioterapia profesional en un solo lugar. Masajes terapéuticos y relajantes, tratamientos faciales y corporales, y fisioterapia para dolor, tensión y rehabilitación. Agenda tu cita al +593 97 989 8964.";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": SITE_TITLE,
  "description": SITE_DESCRIPTION,
  "openGraph": {
    "title": SITE_TITLE,
    "description": SITE_DESCRIPTION,
    "type": "website",
    "locale": "es_EC",
    "siteName": "Medical Livesthetic Fisiospa",
    "images": ["/assets/brand/og.png"]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": SITE_TITLE,
    "description": SITE_DESCRIPTION,
    "images": ["/assets/brand/og.png"]
  },
  "icons": {
    "icon": [{ "url": "/assets/brand/icon.png", "type": "image/png", "sizes": "512x512" }],
    "apple": [{ "url": "/assets/brand/icon.png" }]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";

function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className="w-10 h-10 flex max-w-full rounded-[100%] flex-col justify-center items-center bg-primary cursor-pointer" href={d.href} target="_blank">
      <div className="flex max-w-[0.9375rem] justify-center items-center">
        <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_40/40] align-middle", styles.className)} alt={d.alt} height="40" src={d.imgSrc} width="40" />
      </div>
    </a>
  );
}


const Logo_data = [
    { href: "https://www.facebook.com/", alt: "Facebook", imgSrc: "/assets/cloned/svg/f1a96a7fc343.svg" },
    { href: "https://wa.me/593979898964", alt: "WhatsApp", imgSrc: "/assets/brand/whatsapp.svg" },
    { href: "https://www.instagram.com/", alt: "Instagram", imgSrc: "/assets/cloned/svg/fecd4b640113.svg" }
];




const Logo_meta: string[][] = [
    ["style-30", "Ln1018", "Ln1019"],
    ["style-31", "Ln1021", "Ln1022"],
    ["style-32", "Ln1024", "Ln1025"]
];




const Logo_styles = [
    { className: "h-4" },
    { className: "h-[0.9375rem]" },
    { className: "h-[0.9375rem]" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"es"}>
      <body className="cn0">
        <ScrollFx />
        <section className="h-[4.65rem] block fixed inset-x-0 z-9999 max-md:h-[3.9375rem] md:max-lg:h-[4.1875rem]">
          <div className="h-full block relative z-9999 bg-clr-0 max-lg:border-b max-lg:border-solid max-lg:border-b-border max-lg:bg-surface before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-7 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-7" role="banner">
            <div className="h-full block max-w-407.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-7 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-7">
              <div className="h-full flex py-[0.9375rem] rounded-[60px] justify-between items-center gap-2.5 max-lg:bg-surface">
                <a className="h-[31.7px] flex relative shrink-0 items-center text-color-005 cursor-pointer" aria-label="Medical Livesthetic Fisiospa, ir al inicio" href="/">
                  <img className="fx-logo-scrim w-auto h-7 block object-contain align-middle max-lg:hidden 2xl:h-8" alt="Medical Livesthetic Fisiospa" height="240" src="/assets/brand/logo.png" width="1256" />
                  <img className="w-auto h-8 hidden object-contain align-middle max-lg:block max-md:h-7" alt="Medical Livesthetic Fisiospa" height="240" src="/assets/brand/logo-dark.png" width="1256" />
                </a>
                <HeaderNav />
                <div className="w-[13.1875rem] h-full flex flex-col items-start overflow-visible max-md:w-10 max-lg:relative max-lg:justify-center max-lg:items-end md:max-lg:w-10">
                  <MobileNav />
                  <div className="block cursor-pointer max-lg:hidden">
                    <div className="block">
                      <a className="h-[2.775rem] border border-solid border-border flex relative z-0 max-w-full py-2.5 px-5 rounded-[50px] justify-between items-center gap-2.5 overflow-hidden bg-clr-2" href="https://wa.me/593979898964" target="_blank" rel="noopener noreferrer">
                        <div className="h-[1.4rem] block relative z-1 overflow-hidden">
                          <div className="block text-background leading-6 whitespace-nowrap">
                            Agenda tu cita
                          </div>
                          <div className="block text-background leading-6 whitespace-nowrap">
                            Agenda tu cita
                          </div>
                        </div>
                        <div className="w-[213.3px] h-[2.7rem] flex absolute top-0 left-0 min-w-0 rounded-[50px] justify-center items-center bg-color-006 transform-[matrix(1,0,0,1,0,43.2344)] pointer-events-none" />
                        <div className="w-[0.5875rem] h-[0.6rem] flex relative z-1 mt-0.5 justify-center items-center">
                          <img className="w-full h-2.5 block max-w-full overflow-clip object-cover aspect-[auto_9/9] align-middle" alt="flecha" height="9" src="/assets/cloned/svg/97bfaa7e2654.svg" width="9" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {children}
        <section className="block pt-30 bg-color-001 max-lg:pt-15">
          <div className="block max-w-407.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-7 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-7">
            <div className="border-b border-solid border-b-accent flex pb-30 justify-between items-start max-md:grid max-lg:pb-15 max-md:items-center max-md:gap-y-[1.5625rem] max-md:gap-x-5 max-md:grid-cols-[345px] max-md:[grid-auto-columns:1fr] md:max-lg:gap-7.5">
              <div className="flex max-w-89 flex-col items-start flex-1 gap-12 max-md:justify-between max-md:items-stretch max-md:gap-5 max-md:col-start-[span_1] max-md:col-end-[span_1] max-md:row-start-[span_1] max-md:row-end-[span_1] max-md:max-w-none" id="w-node-_937d82fc-97ac-1f4a-bf89-93128e7cf594-8e7cf591">
                <div className="block max-w-[21.4375rem] max-md:flex-1 max-md:max-w-none">
                  <div className="block text-background text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]">
                    Recibe asesoría profesional en fisioterapia y estética
                  </div>
                </div>
                <div className="w-full block max-w-[17.6875rem] max-md:flex-1 max-md:max-w-none">
                  <div className="block">
                    <form className="block" aria-label="Formulario de correo" id="wf-form-Email-Form" name="wf-form-Email-Form">
                      <div className="flex relative items-center overflow-hidden">
                        <input className="w-auto h-11 block py-2 px-5 rounded-[60px] overflow-clip align-middle text-color-001 leading-[1.4375rem] bg-background cursor-text" data-ditto-id="style-email" id="email" name="email" placeholder="Tu correo electrónico" type="email" />
                        <div className="w-2.5 h-full block absolute top-0 right-0 min-w-0 mr-5">
                          <div className="h-full flex relative flex-col justify-center items-center">
                            <input className="w-7.5 h-11 block absolute top-0 left-0 min-w-0 pt-[0.5625rem] px-[0.9375rem] overflow-clip text-background text-center whitespace-pre text-nowrap cursor-pointer" type="submit" value="" />
                            <div className="w-2.5 h-2.5 block inset-0">
                              <img className="w-full h-2.5 block max-w-full overflow-clip object-cover aspect-[auto_10/10] align-middle" alt="" height="10" src="/assets/cloned/svg/4bd3c1246840.svg" width="10" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[15.3125rem] flex-col justify-start items-center flex-1 gap-7.5 max-md:flex-wrap max-md:justify-between max-md:items-start max-md:gap-4 max-md:max-w-none max-md:[flex-direction:initial]">
                <div className="flex flex-col justify-start items-center gap-7.5 max-md:items-start max-md:gap-4 md:max-lg:gap-5">
                  <div className="block text-background text-xl font-medium leading-6.5 tracking-[-0.4px] whitespace-nowrap max-lg:text-lg max-lg:leading-[1.4375rem]">
                    Habla con nosotros
                  </div>
                  <a className="block text-background text-3xl font-semibold leading-9 tracking-[-0.6px] cursor-pointer max-md:text-[1.375rem] max-md:leading-[1.625rem] md:max-lg:text-[1.625rem] md:max-lg:leading-[1.9375rem]" data-ditto-id="style-a" href="tel:+593979898964">
                    +593 97 989 8964
                  </a>
                  <a className="block text-background cursor-pointer" data-ditto-id="style-a-2" href="mailto:medicallivesthetic@gmail.com">
                    medicallivesthetic@gmail.com
                  </a>
                  <a className="block text-color-009 underline cursor-pointer max-md:text-left" href="https://www.google.com/maps/search/?api=1&query=-2.9118699,-79.020164" target="_blank" rel="noopener noreferrer">
                    Teresa de Ávila y Fray Luis de León (Parque Valladolid), Cuenca – Ecuador
                  </a>
                  <div className="block text-color-009">
                    Lunes a sábado · 09:00 – 19:00
                  </div>
                </div>
                <div className="flex gap-5 max-md:gap-[0.9375rem]">
                  {Logo_data.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                </div>
              </div>
              <div className="flex max-w-[19.6875rem] flex-col items-start flex-1 max-md:max-w-none">
                <div className="block text-background text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
                  Enlaces útiles
                </div>
                <div className="w-full flex pt-10.5 justify-between gap-[6.5625rem] max-md:pt-3 max-lg:self-stretch max-lg:gap-7.5 md:max-lg:pt-[0.8rem]">
                  <FooterNav from={0} to={3} />
                  <FooterNav from={3} to={5} />
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-t-surface-3 flex py-5 justify-center items-center gap-5 max-md:py-4 max-md:flex-col-reverse max-md:gap-4 max-md:text-center">
              <p className="block text-color-009">
                {"© 2026 Medical Livesthetic Fisiospa · Todos los derechos reservados · "}
                <a className="inline text-background underline cursor-pointer" data-ditto-id="style-a-5" href="https://wa.me/593979898964" target="_blank" rel="noopener noreferrer">
                  Agenda tu cita por WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
