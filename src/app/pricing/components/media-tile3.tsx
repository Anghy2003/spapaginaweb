import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  imgSrc: string;
  srcSet: string;
  text: string;
  description: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className={cn("flex pt-[0.9375rem] pb-[2.3rem] px-[0.9375rem] rounded-[5px] flex-col justify-center items-center gap-15 text-center bg-background shadow-[var(--clr-30)_0px_0px_15px_0px] max-lg:gap-7.5", styles.className)}>
      <div className="w-full block">
        <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_380/250] align-middle max-md:h-[12.9375rem] md:max-lg:h-[8.0625rem] 2xl:h-[19.3125rem]", styles.className2)} data-component="image" alt="Dermatology clinic card image" height="250" sizes="(max-width: 479px) 100vw, 380px" src={d.imgSrc} srcSet={d.srcSet} width="380" />
      </div>
      <div className="flex max-w-[20.6rem] flex-col gap-5 max-md:max-w-none">
        <div className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]">
          {d.text}
        </div>
        <p className="block">
          {d.description}
        </p>
      </div>
    </div>
  );
}
