import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile4Data = {
  href: string;
  imgSrc: string;
  srcSet: string;
  href2: string;
  label: string;
  href3: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className={cn("h-[573.5px] border-b border-solid border-b-border block sticky top-68 overflow-hidden bg-background max-md:h-[224.9px] max-lg:relative max-lg:inset-0 md:max-lg:h-[376.3px] 2xl:h-[708.3px]", styles.className)}>
      <div className="h-full block" role="list">
        <div className="h-full block" role="listitem">
          <div className="h-full border-b border-solid border-b-border flex top-[15.025rem] flex-col items-start overflow-hidden bg-background max-md:top-[10.4rem] md:max-lg:top-auto">
            <a className="w-full block max-w-full max-h-155 rounded-[5px] overflow-hidden cursor-pointer" data-component="link" href={d.href}>
              <img className="w-full h-[30.0625rem] block max-w-full overflow-clip object-cover aspect-[auto_1290/600] align-middle max-md:h-[8.3125rem] md:max-lg:h-71 2xl:h-154" data-component="image" alt="" height="600" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src={d.imgSrc} srcSet={d.srcSet} width="1290" />
            </a>
            <div className="flex py-[1.5625rem] justify-between items-center self-stretch">
              <a className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] cursor-pointer max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]" data-component="link" href={d.href2}>
                {d.label}
              </a>
              <a className="w-10 h-10 border border-solid border-color-007 flex max-w-full rounded-[100%] justify-center items-center cursor-pointer" data-component="link" href={d.href3}>
                <div className="block shrink-0">
                  <img className="w-full h-3 block max-w-full overflow-clip object-cover aspect-[auto_12/12] align-middle" data-component="image" alt="" height="12" src="/assets/cloned/svg/c81dc04c407a.svg" width="12" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
