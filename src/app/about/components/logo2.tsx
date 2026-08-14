import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("block max-w-20 max-lg:opacity-0", styles.className)}>
      <img className="w-full h-20 block max-w-full overflow-clip object-cover aspect-[auto_80/80] align-middle md:max-lg:h-[3.8125rem]" data-component="image" alt={d.alt} height="80" src={d.imgSrc} width="80" />
    </div>
  );
}
