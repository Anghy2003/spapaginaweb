import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  srcSet: string;
  text: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="block" role="listitem">
      <div className={cn("block overflow-hidden", styles.className)}>
        <a className="flex relative max-w-full rounded-md flex-col gap-y-7 grid-cols-[1fr_1fr] grid-rows-[auto] [grid-auto-columns:1fr] overflow-hidden cursor-pointer" data-component="link" href="/blog-post/clinical-perspectives-on-preventive-and-corrective-skin-treatments">
          <img className="w-full h-59 block max-w-full rounded-md overflow-clip object-cover align-middle max-md:h-[12.8125rem] md:max-lg:h-33.5 2xl:h-[19.0625rem]" data-component="image" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" src={d.imgSrc} srcSet={d.srcSet} />
        </a>
        <div className="flex flex-col gap-6 max-md:gap-4">
          <div className="flex pt-[1.4375rem] flex-col justify-between max-md:pt-[0.9375rem]">
            <div className="flex pb-[1.4375rem] justify-between max-md:pb-[0.9375rem]">
              <div className="block -mb-[0.4rem] text-color-001 max-lg:-mb-[0.1rem]">
                {d.text}
              </div>
              <div className="w-20 block text-right">
                <div className="block -mb-[0.4rem] text-color-001 max-lg:-mb-[0.1rem]">
                  12 Apr
                </div>
              </div>
            </div>
            <div className="h-px block relative bg-border" />
          </div>
          <a className="block text-color-001 text-xl font-medium leading-6.5 tracking-[-0.4px] cursor-pointer max-lg:text-lg max-lg:leading-[1.4375rem]" data-component="link" href="/blog-post/clinical-perspectives-on-preventive-and-corrective-skin-treatments">
            {d.label}
          </a>
        </div>
      </div>
    </div>
  );
}
