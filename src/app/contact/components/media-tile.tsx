import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  ariacontrols: string;
  id: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full border-b border-solid border-b-border flex relative z-900 pb-2.5 flex-col justify-between items-stretch text-left">
      <div className="w-full flex relative mb-[1.5625rem] justify-between items-center gap-2.5 align-top text-color-002 whitespace-nowrap text-nowrap cursor-pointer max-md:mb-4 max-md:gap-8 md:max-lg:mb-[1.0625rem]" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" aria-haspopup="menu" id={d.id} role="button">
        <div className="block text-color-001 text-xl font-medium leading-6.5 tracking-[-0.4px] whitespace-normal max-lg:text-lg max-lg:leading-[1.4375rem]">
          {d.text}
        </div>
        <div className="flex max-w-3">
          <img className={cn("w-full h-[0.4375rem] block max-w-full overflow-clip object-cover aspect-[auto_12/6] align-middle", styles.className)} data-component="image" alt="" height="6" src="/assets/cloned/svg/a446313568d7.svg" width="12" />
        </div>
      </div>
    </div>
  );
}
