import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("block max-w-15 rounded-[3px] flex-1 overflow-hidden", styles.className)}>
      <img className="w-full h-[3.4375rem] block max-w-full overflow-clip object-cover aspect-[auto_60/60] align-middle max-md:h-[3.3125rem] md:max-lg:h-12 2xl:h-15" data-component="image" alt={d.alt} height="60" src={d.imgSrc} width="60" />
    </div>
  );
}
