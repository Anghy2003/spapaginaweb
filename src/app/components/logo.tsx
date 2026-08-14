import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  alt: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("h-full block rounded-[10px] overflow-hidden", styles.className)}>
      <div className="h-full block rounded-[10px]">
        <img className="w-full h-118.5 block max-w-full overflow-clip object-cover aspect-[auto_591/474] align-middle max-md:h-[17.3125rem]" data-component="image" alt={d.alt} height="474" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="591" />
      </div>
    </div>
  );
}
