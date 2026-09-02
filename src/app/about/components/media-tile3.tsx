import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  alt: string;
  height: string;
  imgSrc: string;
  text: string;
  text2: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className="w-full max-w-400 flex relative flex-col justify-start items-center max-md:p-[0.9375rem] max-md:bg-background">
      <div className="w-full border-b border-solid border-b-border flex relative z-1 justify-between items-center max-md:flex-col max-md:gap-[0.9375rem] max-md:border-b-[0] max-md:border-initial max-md:border-b-[initial]">
        <div className={cn("w-0 flex py-[0.9375rem] justify-center items-center gap-5 overflow-hidden max-lg:w-38.5 max-md:py-0", styles.className)}>
          <div className="block max-w-27.5 rounded-[3px] shrink-0 overflow-hidden">
            <img className={cn("w-full block max-w-full overflow-clip object-cover align-middle", styles.className2)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width="114" />
          </div>
        </div>
        <div className="flex relative pr-5 justify-between items-center self-stretch flex-1 gap-[0.9375rem] max-md:flex-col max-md:justify-start max-md:gap-2 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto] max-md:[grid-auto-columns:1fr] max-md:text-center max-md:pr-0 md:max-lg:px-[0.9375rem]">
          <div className="flex relative z-1 max-w-50.5 justify-start items-center self-stretch flex-1 max-md:justify-center max-md:items-start max-md:max-w-none 2xl:max-w-[13.7rem]">
            <div className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]">
              {d.text}
            </div>
          </div>
          <div className="flex relative z-1 max-w-[18.6875rem] items-start flex-1 gap-3.5 max-md:justify-start max-md:items-center max-md:gap-[0.3125rem]">
            <div className={cn("block mt-0.5 max-md:shrink-0 max-md:mt-0 md:max-lg:mt-[0.4375rem]", styles.className3)}>
              <div className="block">
                <img className={cn("w-full h-[1.4375rem] block max-w-full overflow-clip object-cover aspect-[auto_19/23] align-middle", styles.className4)} data-component="image" alt="" height="23" src="/assets/cloned/svg/c122d2c1b36e.svg" width="19" />
              </div>
            </div>
            <div className="block">
              {d.text2}
            </div>
          </div>
          <div className="flex relative z-1 max-w-[18.6875rem] items-start flex-1 gap-3.5 max-md:justify-start max-md:items-center max-md:gap-[0.3125rem]">
            <div className="w-[1.1875rem] block mt-0.5 max-md:w-[0.8rem] max-md:shrink-0 max-md:mt-0 md:max-lg:w-3.5 md:max-lg:mt-[0.4375rem]">
              <div className="block">
                <img className="w-full h-4.5 block max-w-full overflow-clip object-cover aspect-[auto_19/23] align-middle max-md:h-3 md:max-lg:h-3.5" data-component="image" alt="" height="23" src="/assets/cloned/svg/3e9b15ea3e29.svg" width="19" />
              </div>
            </div>
            <div className="block">
              {d.text3}
            </div>
          </div>
          <a className="w-12.5 h-12.5 border border-solid border-border flex relative z-1 max-w-full rounded-[100px] justify-center items-center shrink-0 transform-[matrix(0.5,-0.866025,0.866025,0.5,0,0)] origin-[25px_25px] cursor-pointer max-lg:w-10 max-lg:h-10 max-lg:transform-[none] max-lg:origin-[initial]" data-component="link" href="/contact">
            <div className="w-[37%] block max-lg:w-[29.5%]">
              <img className="w-full h-4.5 block max-w-full overflow-clip object-cover aspect-[auto_18/18] align-middle max-lg:h-[0.6875rem]" data-component="image" alt="" height="18" src="/assets/cloned/svg/8ab131507f44.svg" width="18" />
            </div>
            <div className="w-12 h-49 block absolute -top-18.5 left-0 opacity-0 min-w-0 pointer-events-none" aria-hidden="true" />
          </a>
          <div className="w-312.5 h-full block absolute top-0 left-0 opacity-0 min-w-0 rounded-[5px] bg-background max-md:hidden md:max-lg:w-146 md:max-lg:opacity-[initial]" />
        </div>
      </div>
    </div>
  );
}
