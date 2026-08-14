import type { Logo7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo7Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo7({ d, styles }: { d: Logo7Data; styles: Logo7Styles }) {
  return (
    <div className="block rounded-md overflow-hidden">
      <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_190/200] align-middle max-md:h-[6.9375rem] md:max-lg:h-27.5 2xl:h-[13.8125rem]", styles.className)} data-component="image" alt={d.alt} height="200" src={d.imgSrc} width="190" />
    </div>
  );
}
