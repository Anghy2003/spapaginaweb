import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile4Data = {
  imgSrc: string;
  srcSet: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className="flex flex-col justify-start items-center gap-[2.1875rem] text-center max-lg:gap-6">
      <div className="w-full block rounded-md overflow-hidden">
        <img className="w-full h-[22.9375rem] block max-w-full overflow-clip object-cover aspect-[auto_300/380] align-middle max-md:h-[27.3125rem] md:max-lg:h-112 2xl:h-[28.6875rem]" data-component="image" alt="Dermatologist image " height="380" sizes="300px" src={d.imgSrc} srcSet={d.srcSet} width="300" />
      </div>
      <div className="flex flex-col justify-start items-center gap-[1.025rem] max-md:gap-y-[initial]">
        <div className="block text-background text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
          {d.text}
        </div>
        <div className={cn("block text-background", styles.className)}>
          {d.text2}
        </div>
      </div>
    </div>
  );
}
