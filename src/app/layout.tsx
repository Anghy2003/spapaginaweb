import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Ixolyn - Webflow HTML Website Template",
  "description": "Experience premium salon services with Ixolyn. From skincare to hairstyling, enjoy expert care, modern treatments, and a relaxing beauty experience tailored for you.",
  "openGraph": {
    "title": "Ixolyn - Webflow HTML Website Template",
    "description": "Experience premium salon services with Ixolyn. From skincare to hairstyling, enjoy expert care, modern treatments, and a relaxing beauty experience tailored for you.",
    "type": "website",
    "images": [
      "https://cdn.prod.website-files.com/6969bb4c5469fbed4196a532/69dcaea4402fa950176884f2_graph-image.avif"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Ixolyn - Webflow HTML Website Template",
    "description": "Experience premium salon services with Ixolyn. From skincare to hairstyling, enjoy expert care, modern treatments, and a relaxing beauty experience tailored for you.",
    "images": [
      "https://cdn.prod.website-files.com/6969bb4c5469fbed4196a532/69dcaea4402fa950176884f2_graph-image.avif"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/c218560ee1a1.png",
        "type": "image/png",
        "sizes": "32x32",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/c218560ee1a1.png",
        "type": "image/png",
        "sizes": "32x32",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/2051afb036ba.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";

function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("block relative max-w-407.5 py-2.5 px-[2.1875rem] rounded-[30px] align-top leading-6 text-left cursor-pointer", styles.className)} aria-current={d.ariacurrent} href={d.href}>
      {d.label}
    </a>
  );
}

function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className="w-10 h-10 flex max-w-full rounded-[100%] flex-col justify-center items-center bg-primary cursor-pointer" href={d.href} target="_blank">
      <div className="flex max-w-[0.9375rem] justify-center items-center">
        <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_40/40] align-middle", styles.className)} alt={d.alt} height="40" src={d.imgSrc} width="40" />
      </div>
    </a>
  );
}

function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="block text-background cursor-pointer" aria-current={d.ariacurrent} href={d.href} target={d.target}>
      {d.label}
    </a>
  );
}

function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="block text-background cursor-pointer" href={d.href} target="_blank">
      {d.label}
    </a>
  );
}

const TextLink_data = [
    { ariacurrent: "page", href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" }
];

const Logo_data = [
    { href: "https://www.facebook.com/", alt: "", imgSrc: "/assets/cloned/svg/f1a96a7fc343.svg" },
    { href: "https://www.linkedin.com/", alt: "icon LinkedIn", imgSrc: "/assets/cloned/svg/29d03bae6e11.svg" },
    { href: "https://www.instagram.com/", alt: "icon instagram", imgSrc: "/assets/cloned/svg/fecd4b640113.svg" }
];

const TextLink2_data = [
    { ariacurrent: "page", href: "/", label: "Home" },
    { href: "/about", target: "_blank", label: "About" },
    { href: "/service", target: "_blank", label: "Service" },
    { href: "/pricing", target: "_blank", label: "Pricing" }
];

const TextLink3_data = [
    { href: "/case-study", label: "Case study" },
    { href: "/dermatologist", label: "Dermatologist" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
];

const TextLink_meta: string[][] = [
    ["Ln13"],
    ["style-26"],
    ["style-27"]
];

const Logo_meta: string[][] = [
    ["style-30", "Ln1018", "Ln1019"],
    ["style-31", "Ln1021", "Ln1022"],
    ["style-32", "Ln1024", "Ln1025"]
];

const TextLink2_meta: string[][] = [
    ["style-18"],
    ["style-19"],
    ["style-20"],
    ["style-21"]
];

const TextLink3_meta: string[][] = [
    ["style-22"],
    ["style-23"],
    ["style-24"],
    ["style-25"]
];

const TextLink_styles = [
    { className: "text-color-004 bg-color-011" },
    { className: "text-background" },
    { className: "w-[8.025rem] text-background" }
];

const Logo_styles = [
    { className: "h-4" },
    { className: "h-[0.9375rem]" },
    { className: "h-[0.9375rem]" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="cn0">
        <section className="h-[4.65rem] block fixed inset-x-0 z-9999 max-md:h-[3.9375rem] md:max-lg:h-[4.1875rem]">
          <div className="h-full block relative z-9999 bg-clr-0 max-lg:border-b max-lg:border-solid max-lg:border-b-border max-lg:bg-surface before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-7 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-7" role="banner">
            <div className="h-full block max-w-407.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-7 after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-7">
              <div className="h-full flex py-[0.9375rem] rounded-[60px] justify-between items-center gap-2.5 max-lg:bg-surface">
                <a className="h-[31.7px] block relative float-left max-w-[6.6875rem] shrink-0 text-color-005 cursor-pointer" aria-current="page" aria-label="home" href="/">
                  <div className="block max-lg:hidden">
                    <img className="w-full h-8 block max-w-full overflow-clip object-cover aspect-[auto_108/32] align-middle" alt="" height="32" src="/assets/cloned/svg/aac82e29caf4.svg" width="108" />
                  </div>
                  <div className="hidden max-lg:block">
                    <img className="w-full h-full block max-w-full overflow-clip object-cover aspect-[auto_108/32] align-middle max-lg:h-8" alt="" height="32" src="/assets/cloned/svg/06c57c8fa650.svg" width="108" />
                  </div>
                  <div className="w-[6.6875rem] h-21 block absolute top-[31.7px] left-0 opacity-0 pointer-events-none">
                    This is some text inside of a div block.
                  </div>
                </a>
                <nav className="block relative float-right max-lg:hidden" role="navigation">
                  <div className="flex justify-start items-center gap-[0.3125rem] max-lg:hidden">
                    {TextLink_data.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                    <div className="block relative z-900 max-w-407.5 text-left">
                      <div className="flex relative py-2.5 px-[2.1875rem] justify-start items-center gap-[0.3125rem] align-top text-color-002 whitespace-nowrap text-nowrap cursor-pointer" aria-controls="w-dropdown-list-0" aria-expanded="false" aria-haspopup="menu" id="w-dropdown-toggle-0" role="button">
                        <div className="block relative z-1">
                          <div className="block text-background leading-6">
                            Pages
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="block relative max-w-407.5 py-2.5 px-[2.1875rem] rounded-[30px] align-top text-background leading-6 text-left cursor-pointer" data-ditto-id="style-a-3" href="/blog">
                      Blog
                    </a>
                    <a className="w-[135.5px] block relative max-w-407.5 py-2.5 px-[2.1875rem] rounded-[30px] align-top text-background leading-6 text-left cursor-pointer" data-ditto-id="style-a-4" href="/contact">
                      Contact
                    </a>
                  </div>
                </nav>
                <div className="w-[13.1875rem] h-full flex flex-col items-start overflow-hidden max-md:w-8 max-lg:relative max-lg:justify-center max-lg:items-center md:max-lg:w-9">
                  <div className="hidden min-w-0 flex-col items-start max-lg:flex max-lg:justify-center max-lg:items-center max-lg:bg-clr-1">
                    <div className="h-full block max-md:w-8 max-lg:relative max-lg:mb-[0.3rem] max-lg:bg-color-001 md:max-lg:w-9.5" />
                    <div className="h-full block transform-[none] max-md:w-8 max-lg:relative max-lg:bg-color-001 max-lg:transform-[matrix(1,0,0,1,-1,0)] md:max-lg:w-9.5" />
                  </div>
                  <div className="block cursor-pointer max-lg:hidden">
                    <div className="block pointer-events-none">
                      <a className="h-[2.775rem] border border-solid border-border flex relative z-0 max-w-full py-2.5 px-5 rounded-[50px] justify-between items-center gap-2.5 overflow-hidden bg-clr-2 pointer-events-none" href="/contact">
                        <div className="h-[1.4rem] block relative z-1 overflow-hidden pointer-events-none">
                          <div className="block text-background leading-6 pointer-events-none whitespace-nowrap">
                            Book appointment
                          </div>
                          <div className="block text-background leading-6 pointer-events-none whitespace-nowrap">
                            Book appointment
                          </div>
                        </div>
                        <div className="w-[213.3px] h-[2.7rem] flex absolute top-0 left-0 min-w-0 rounded-[50px] justify-center items-center bg-color-006 transform-[matrix(1,0,0,1,0,43.2344)] pointer-events-none" />
                        <div className="w-[0.5875rem] h-[0.6rem] flex relative z-1 mt-0.5 justify-center items-center pointer-events-none">
                          <img className="w-full h-2.5 block max-w-full overflow-clip object-cover aspect-[auto_9/9] align-middle pointer-events-none" alt="button white arrow" height="9" src="/assets/cloned/svg/97bfaa7e2654.svg" width="9" />
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
                    Get professional advice from our dermatology experts
                  </div>
                </div>
                <div className="w-full block max-w-[17.6875rem] max-md:flex-1 max-md:max-w-none">
                  <div className="block">
                    <form className="block" aria-label="Email Form" id="wf-form-Email-Form" name="wf-form-Email-Form">
                      <div className="flex relative items-center overflow-hidden">
                        <input className="w-auto h-11 block py-2 px-5 rounded-[60px] overflow-clip align-middle text-color-001 leading-[1.4375rem] bg-background cursor-text" data-ditto-id="style-email" id="email" name="email" placeholder="Enter email" type="email" />
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
                    Speak with our experts
                  </div>
                  <a className="block text-background text-3xl font-semibold leading-9 tracking-[-0.6px] cursor-pointer max-md:text-[1.375rem] max-md:leading-[1.625rem] md:max-lg:text-[1.625rem] md:max-lg:leading-[1.9375rem]" data-ditto-id="style-a" href="tel:8881234567">
                    (888)1234-567
                  </a>
                  <a className="block text-background cursor-pointer" data-ditto-id="style-a-2" href="mailto:info@exampl.com">
                    info@example.com
                  </a>
                </div>
                <div className="flex gap-5 max-md:gap-[0.9375rem]">
                  {Logo_data.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                </div>
              </div>
              <div className="flex max-w-[19.6875rem] flex-col items-start flex-1 max-md:max-w-none">
                <div className="block text-background text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
                  Useful links
                </div>
                <div className="w-full flex pt-10.5 justify-between gap-[6.5625rem] max-md:pt-3 max-lg:self-stretch max-lg:gap-7.5 md:max-lg:pt-[0.8rem]">
                  <div className="flex flex-col justify-start items-start gap-[0.8rem] max-md:flex-1 max-lg:gap-[0.4rem]">
                    {TextLink2_data.map((d, i) => <TextLink2 key={i} d={d} />)}
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[0.8rem] max-md:flex-1 max-lg:gap-[0.4rem]">
                    {TextLink3_data.map((d, i) => <TextLink3 key={i} d={d} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-t-surface-3 flex py-5 justify-center items-center gap-5 max-md:py-4 max-md:flex-col-reverse max-md:gap-4 max-md:text-center">
              <p className="block text-color-009">
                {"Designed by "}
                <a className="inline text-background underline cursor-pointer" data-ditto-id="style-a-5" href="https://www.flowdesignagency.com/">
                  Flow Design Agency
                </a>
                <span className="inline text-background">
                  ,
                </span>
                {" Powered by "}
                <a className="inline text-background underline cursor-pointer" data-ditto-id="style-a-6" href="https://webflow.com/">
                  Webflow
                </a>
              </p>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
