import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="border border-solid border-border block pt-5 pb-2.5 px-5 rounded-[5px]">
      <div className={cn("h-45 block mb-2.5 rounded-[5px] shadow-[var(--clr-35)_0px_2px_40px_0px]", styles.className)} />
      <div className="flex justify-between items-center gap-5">
        <div className="block text-color-001 text-lg font-medium leading-6 tracking-[-0.36px] max-lg:text-[1.0625rem] max-lg:leading-[1.4375rem]">
          {d.text}
        </div>
        <div className="block py-[0.1875rem] px-[0.3125rem] rounded-sm text-color-001 text-xs leading-3 bg-border">
          {d.text2}
        </div>
      </div>
    </div>
  );
}
