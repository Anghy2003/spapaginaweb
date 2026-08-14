import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-full block max-w-30 max-md:max-w-none">
      <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_120/120] align-middle md:max-lg:h-24.5", styles.className)} data-component="image" alt={d.alt} height="120" src={d.imgSrc} width="120" />
    </div>
  );
}
