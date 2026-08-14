import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="block">
      <img className={cn("w-full block max-w-full overflow-clip object-cover align-middle", styles.className)} data-component="image" alt="" height="40" src={d.imgSrc} width="Auto" />
    </div>
  );
}
