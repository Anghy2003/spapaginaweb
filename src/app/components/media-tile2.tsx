import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  kind?: string;
  alt: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="w-150 block max-w-[54.0625rem] px-[16.7px] shrink-0 max-md:w-[23.4375rem] max-md:px-[4.9px] md:max-lg:w-96 md:max-lg:px-2.5 2xl:w-[54.0625rem] 2xl:px-[1.5625rem]">
      <div className="block relative rounded-[5px] overflow-hidden">
        <div className="block">
          <img className="w-full h-110 block max-w-full overflow-clip object-cover aspect-[auto_850/660] align-middle max-md:h-71 md:max-lg:h-[17.6875rem] 2xl:h-[39.5625rem]" data-component={d.kind} alt={d.alt} height="660" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="850" />
        </div>
        <div className={cn("h-full block absolute top-0", styles.className)} style={{ backgroundImage: "linear-gradient(var(--clr-8) 36%, var(--clr-9) 91%)" }} />
        <div className={cn("h-full flex absolute top-0 pb-13 px-7.5 flex-col justify-end items-start gap-[1.0625rem]", styles.className2)}>
          <div className="block text-background text-3xl font-semibold leading-9 tracking-[-0.6px] max-md:text-[1.375rem] max-md:leading-[1.625rem] md:max-lg:text-[1.625rem] md:max-lg:leading-[1.9375rem]">
            {d.text}
          </div>
          <div className="block text-background">
            {d.text2}
          </div>
        </div>
      </div>
    </div>
  );
}
