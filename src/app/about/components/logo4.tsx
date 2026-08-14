import type { Logo4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo4Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <div className="block min-w-0 max-w-82.5 px-[0.9375rem] shrink-0 max-lg:w-82.5">
      <div className={cn("block relative max-w-75 shrink-0 overflow-hidden max-md:max-w-none", styles.className)}>
        <img className="w-full h-full block max-w-full overflow-clip object-cover aspect-[auto_300/360] align-middle max-lg:h-90" alt={d.alt} height="360" sizes="300px" src={d.imgSrc} srcSet={d.srcSet} width="300" />
        <div className="flex absolute inset-0 opacity-0 rounded-md justify-center items-center bg-clr-16">
          <a className={cn("flex relative min-w-0 max-w-[2.3rem] justify-center items-center cursor-pointer", styles.className2)} href="https://www.instagram.com/" target="_blank" />
        </div>
      </div>
    </div>
  );
}
