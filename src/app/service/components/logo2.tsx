import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  imgSrc: string;
  kind?: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="w-[16.6875rem] block px-[1.5625rem] shrink-0 max-lg:px-[0.9375rem]">
      <div className="h-28 border border-solid border-border flex rounded-[3px] justify-center items-center 2xl:bg-background">
        <div className="block max-w-31.5">
          <img className={cn("w-full block max-w-full overflow-clip object-cover align-middle", styles.className)} alt="" src={d.imgSrc} data-component={d.kind} />
        </div>
      </div>
    </div>
  );
}
