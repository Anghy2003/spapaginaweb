import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  srcSet: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="block" role="listitem">
      <div className={cn("block overflow-hidden", styles.className)}>
        <a className="flex relative max-w-full rounded-md flex-col gap-y-7 grid-cols-[1fr_1fr] grid-rows-[auto] [grid-auto-columns:1fr] overflow-hidden cursor-pointer" data-component="link" href="/blog-post/clinical-perspectives-on-preventive-and-corrective-skin-treatments">
          <img className={cn("w-full h-57 block max-w-full rounded-md overflow-clip object-cover align-middle max-md:h-[12.8125rem] md:max-lg:h-33.5", styles.className2)} data-component="image" alt="Blog card image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" src={d.imgSrc} srcSet={d.srcSet} />
        </a>
        <div className="flex flex-col gap-[1.6875rem]">
          <div className="flex pt-7 flex-col justify-between">
            <div className="flex pb-[1.4375rem] justify-between max-md:pb-[0.9375rem]">
              <div className="block pb-[1.5625rem] text-color-001">
                {d.text}
              </div>
              <div className={cn("w-20 block text-right", styles.className3)}>
                <div className="block text-color-001">
                  12 Apr
                </div>
              </div>
            </div>
            <div className="h-px block relative bg-border">
              <div className="w-20 h-full block absolute top-0 right-0 z-2 bg-color-001" />
            </div>
          </div>
          <div className="block text-color-001 text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
            {d.text2}
          </div>
        </div>
      </div>
    </div>
  );
}
