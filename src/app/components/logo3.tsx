import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className={cn("w-10 block rounded-[100%] overflow-hidden", styles.className)}>
      <img className="w-full h-10 block max-w-full overflow-clip object-cover aspect-[auto_40/40] align-middle" data-component="image" alt={d.alt} height="40" src={d.imgSrc} width="40" />
    </div>
  );
}
