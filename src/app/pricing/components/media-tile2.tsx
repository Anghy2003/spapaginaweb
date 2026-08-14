import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("border-solid border-b border-b-border flex py-[1.6875rem] px-7.5 justify-start items-center gap-5 max-md:px-[0.9375rem]", styles.className)}>
      <div className={cn("w-[1.0625rem] block max-md:shrink-0", styles.className2)}>
        <img className={cn("w-full h-[1.0625rem] block max-w-full overflow-clip object-cover aspect-[auto_17/17] align-middle", styles.className3)} data-component="image" alt="" height="17" src="/assets/cloned/svg/e3a473f9bd38.svg" width="17" />
      </div>
      <div className="block text-color-001 text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
        {d.text}
      </div>
    </div>
  );
}
