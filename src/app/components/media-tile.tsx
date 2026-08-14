import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  alt: string;
  imgSrc: string;
  text: string;
  description: string;
  kind?: string;
  sizes?: string;
  srcSet?: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-96 flex px-[17.3px] flex-col items-start shrink-0 transform-[matrix(1,0,0,1,-768,0)] max-md:w-[23.4375rem] max-md:px-[0.9375rem] max-md:transform-[matrix(1,0,0,1,-437.475,0)] md:max-lg:px-[0.65rem] md:max-lg:transform-[matrix(1,0,0,1,-384,0)] 2xl:w-[30.8125rem] 2xl:px-[1.625rem] 2xl:transform-[matrix(1,0,0,1,-1692.51,0)]">
      <div className={cn("flex flex-col justify-start items-center gap-10 max-lg:gap-6", styles.className)}>
        <div className="block relative">
          <div className="block relative pt-5 pb-6.5 px-5 rounded-[5px] bg-background max-lg:pb-[1.3125rem]">
            <div className="block">
              <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_850/660] align-middle", styles.className2)} alt={d.alt} height="660" src={d.imgSrc} width="850" data-component={d.kind} sizes={d.sizes} srcSet={d.srcSet} />
            </div>
            <div className="flex pt-[2.1875rem] flex-col justify-start items-center gap-[1.0625rem] text-center max-lg:pt-[1.5625rem]">
              <div className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]">
                {d.text}
              </div>
            </div>
          </div>
          <div className={cn("h-full block absolute top-0 pt-5 pb-6.5 px-5 rounded-[5px] shadow-[var(--clr-4)_0px_0px_40px_0px]", styles.className3)} />
        </div>
        <div className={cn("block text-center", styles.className4)}>
          <p className="block">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
