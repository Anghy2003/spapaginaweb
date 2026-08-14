import type { Logo6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo6Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <div className={cn("block max-w-20 max-md:opacity-0 md:max-lg:max-w-16", styles.className)}>
      <img className="w-full h-20 block max-w-full overflow-clip object-cover aspect-[auto_80/80] align-middle md:max-lg:h-16" data-component="image" alt={d.alt} height="80" src={d.imgSrc} width="80" />
    </div>
  );
}
