import type { Logo9Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo9Data = {
  kind?: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  kind2?: string;
};
/** A logo. */
export default function Logo9({ d, styles }: { d: Logo9Data; styles: Logo9Styles }) {
  return (
    <div className="w-82.5 block max-w-82.5 px-[0.9375rem] shrink-0">
      <div className={cn("block relative max-w-75 shrink-0 overflow-hidden max-md:max-w-none", styles.className)}>
        <img className="w-full h-90 block max-w-full overflow-clip object-cover aspect-[auto_300/360] align-middle" data-component={d.kind} alt={d.alt} height="360" sizes="(max-width: 479px) 100vw, 300px" src={d.imgSrc} srcSet={d.srcSet} width="300" />
        <div className="w-75 h-90 flex absolute top-0 left-0 opacity-0 rounded-md justify-center items-center bg-clr-16">
          <a className={cn("flex relative max-w-[2.3rem] justify-center items-center cursor-pointer", styles.className2)} data-component={d.kind2} href="https://www.instagram.com/" target="_blank" />
        </div>
      </div>
    </div>
  );
}
