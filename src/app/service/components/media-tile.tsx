import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  text: string;
  description: string;
  alt: string;
  imgSrc: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="flex py-[0.9375rem] pr-[0.9375rem] pl-7.5 rounded-[5px] justify-between items-stretch gap-5 bg-background max-md:grid max-md:pt-6 max-md:pb-[1.6rem] max-lg:pl-[0.9375rem] max-md:gap-y-[1.5625rem] max-md:gap-x-[0.9375rem] max-md:grid-cols-[150px_150px] max-md:[grid-auto-columns:1fr] md:max-lg:gap-[0.9375rem]">
      <div className="flex max-w-70 py-5 flex-col justify-center items-start flex-1 gap-[1.6875rem] max-lg:gap-[1.0625rem] max-md:max-w-none max-lg:py-0">
        <div className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]">
          {d.text}
        </div>
        <p className="block">
          {d.description}
        </p>
      </div>
      <div className="block max-w-[16.5625rem] rounded-[5px] flex-1 overflow-hidden max-md:max-w-none">
        <img className={cn("w-full h-58 block max-w-full overflow-clip object-cover aspect-[auto_285/250] align-middle", styles.className)} data-component="image" alt={d.alt} height="250" src={d.imgSrc} width="285" />
      </div>
    </div>
  );
}
