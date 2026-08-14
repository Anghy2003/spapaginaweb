import type { Logo5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo5Data = {
  imgSrc: string;
};
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <div className="w-[16.6875rem] block px-[1.5625rem] shrink-0 max-lg:px-[0.9375rem]">
      <div className="h-28 border border-solid border-border flex rounded-[3px] justify-center items-center">
        <div className="block max-w-31.5">
          <img className={cn("w-full block max-w-full overflow-clip object-cover align-middle", styles.className)} alt="" src={d.imgSrc} />
        </div>
      </div>
    </div>
  );
}
