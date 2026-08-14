import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className={cn("w-full block max-w-30", styles.className)}>
      <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_120/120] align-middle md:max-lg:h-24.5", styles.className2)} data-component="image" alt={d.alt} height="120" src={d.imgSrc} width="120" />
    </div>
  );
}
