import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block max-w-20 max-lg:opacity-0", styles.className)}>
      <img className="w-full h-20 block max-w-full overflow-clip object-cover aspect-[auto_80/80] align-middle" data-component="image" alt={d.alt} height="80" src={d.imgSrc} width="80" />
    </div>
  );
}
