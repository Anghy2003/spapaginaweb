import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block">
      <img className={cn("w-full block max-w-full overflow-clip object-cover align-middle", styles.className)} data-component="image" alt={d.alt} height="Auto" src={d.imgSrc} width="Auto" />
    </div>
  );
}
