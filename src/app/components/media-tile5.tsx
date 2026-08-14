import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile5Data = {
  text: string;
  description: string;
  text2: string;
  imgSrc: string;
  text3: string;
  imgSrc2: string;
  text4: string;
  imgSrc3: string;
  text5: string;
  imgSrc4: string;
  text6: string;
  style?: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className={cn("block pt-[3.4375rem] pb-12.5 px-10 rounded-[5px] max-lg:py-7.5 max-lg:px-5", styles.className)} style={d.style}>
      <div className="flex flex-col gap-4">
        <div className={cn("block text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]", styles.className2)}>
          {d.text}
        </div>
        <p className={cn("block", styles.className3)}>
          {d.description}
        </p>
      </div>
      <div className="flex pt-5 pb-12 items-end gap-[0.3125rem] max-md:py-4 md:max-lg:pb-5">
        <div className={cn("block text-3xl font-semibold leading-9 tracking-[-0.6px] max-md:text-[1.375rem] max-md:leading-[1.625rem] md:max-lg:text-[1.625rem] md:max-lg:leading-[1.9375rem]", styles.className4)}>
          {d.text2}
        </div>
        <p className={cn("block", styles.className5)}>
          / month
        </p>
      </div>
      <a className={cn("h-[2.7125rem] border border-solid flex relative z-0 max-w-full pt-[0.5625rem] pb-2.5 px-5 rounded-[50px] justify-between items-center gap-2.5 overflow-hidden cursor-pointer", styles.className6)} data-component="link" href="/contact">
        <div className="h-[1.4rem] block relative z-1 overflow-hidden max-md:shrink-0">
          <div className="block text-background leading-6 whitespace-nowrap">
            Choose plan now
          </div>
          <div className="block text-background leading-6 whitespace-nowrap">
            Choose plan now
          </div>
        </div>
        <div className={cn("h-[2.6375rem] flex absolute top-0 left-0 min-w-0 rounded-[50px] justify-center items-center transform-[matrix(1,0,0,1,0,42.2031)] pointer-events-none max-md:w-[19.3125rem] md:max-lg:w-[19.8875rem] 2xl:w-[26.65rem]", styles.className7)} />
        <div className="w-[0.5875rem] h-[0.6rem] flex relative z-1 mt-0.5 justify-center items-center max-md:shrink-0">
          <img className="w-full h-2.5 block max-w-full overflow-clip object-cover aspect-[auto_9/9] align-middle" data-component="image" alt="button white arrow" height="9" src="/assets/cloned/svg/97bfaa7e2654.svg" width="9" />
        </div>
      </a>
      <div className="flex pt-9 flex-col items-stretch gap-[1.1rem] max-lg:pt-5 max-lg:gap-[0.475rem]">
        <div className={cn("block text-lg font-medium leading-6 tracking-[-0.36px] max-lg:text-[1.0625rem] max-lg:leading-[1.4375rem]", styles.className8)}>
          What’s included
        </div>
        <div className="flex justify-start items-center gap-3 max-lg:items-start">
          <div className="block max-w-[0.8rem] max-md:mt-[0.45rem] max-lg:shrink-0 md:max-lg:mt-[0.5625rem]">
            <img className="w-full h-[0.6875rem] block max-w-full overflow-clip object-cover aspect-[auto_10/10] align-middle" data-component="image" alt="" height="10" src={d.imgSrc} width="10" />
          </div>
          <div className={cn("block", styles.className9)}>
            {d.text3}
          </div>
        </div>
        <div className="flex justify-start items-center gap-3 max-lg:items-start">
          <div className="block max-w-[0.8rem] max-md:mt-[0.45rem] max-lg:shrink-0 md:max-lg:mt-[0.5625rem]">
            <img className="w-full h-[0.6875rem] block max-w-full overflow-clip object-cover aspect-[auto_10/10] align-middle" data-component="image" alt="" height="10" src={d.imgSrc2} width="10" />
          </div>
          <div className={cn("block", styles.className10)}>
            {d.text4}
          </div>
        </div>
        <div className="flex justify-start items-center gap-3 max-lg:items-start">
          <div className="block max-w-[0.8rem] max-md:mt-[0.45rem] max-lg:shrink-0 md:max-lg:mt-[0.5625rem]">
            <img className="w-full h-[0.6875rem] block max-w-full overflow-clip object-cover aspect-[auto_10/10] align-middle" data-component="image" alt="" height="10" src={d.imgSrc3} width="10" />
          </div>
          <div className={cn("block", styles.className11)}>
            {d.text5}
          </div>
        </div>
        <div className="flex justify-start items-center gap-3 max-lg:items-start">
          <div className="block max-w-[0.8rem] max-md:mt-[0.45rem] max-lg:shrink-0 md:max-lg:mt-[0.5625rem]">
            <img className="w-full h-[0.6875rem] block max-w-full overflow-clip object-cover aspect-[auto_10/10] align-middle" data-component="image" alt="" height="10" src={d.imgSrc4} width="10" />
          </div>
          <div className={cn("block", styles.className12)}>
            {d.text6}
          </div>
        </div>
      </div>
    </div>
  );
}
