import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-55 h-67.5 block absolute origin-[110px_135px] max-md:w-44 max-md:h-60 max-md:origin-[88px_120px]", styles.className)}>
      <img className="w-full h-67.5 block max-w-full overflow-clip object-cover aspect-[auto_220/270] align-middle max-md:h-60" data-component="image" alt="pricing rotate card image" height="270" src={d.imgSrc} width="220" />
    </div>
  );
}
