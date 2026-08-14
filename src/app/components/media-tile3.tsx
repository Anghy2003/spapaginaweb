import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  height: string;
  imgSrc: string;
  width: string;
  text: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className="border-b border-solid border-b-muted-foreground flex pb-7.5 justify-start items-center gap-[0.9375rem] max-md:pb-5">
      <div className="w-[1.1875rem] block shrink-0">
        <img className={cn("w-full block max-w-full overflow-clip object-cover align-middle", styles.className)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
      </div>
      <div className="block text-background text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
        {d.text}
      </div>
    </div>
  );
}
