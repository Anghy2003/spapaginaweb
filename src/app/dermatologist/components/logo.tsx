import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block flex-1", styles.className)}>
      <div className={cn("block relative shrink-0 overflow-hidden", styles.className2)}>
        <img className="w-full h-82.5 block max-w-full overflow-clip object-cover aspect-[auto_300/360] align-middle 2xl:h-[27.1875rem]" data-component="image" alt={d.alt} height="360" sizes="(max-width: 479px) 100vw, 300px" src={d.imgSrc} srcSet={d.srcSet} width="300" />
        <div className="w-[17.1875rem] h-82.5 flex absolute top-0 left-0 opacity-0 rounded-md justify-center items-center bg-clr-16">
          <a className="h-[2.3rem] flex relative max-w-[2.3rem] justify-center items-center cursor-pointer" data-component="link" href="https://www.instagram.com/" target="_blank" />
        </div>
      </div>
    </div>
  );
}
