import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className="w-full flex relative flex-col overflow-hidden cursor-pointer">
      <div className="flex pb-[0.9375rem] flex-col items-start max-lg:pb-[0.3125rem]">
        <div className="block mb-5">
          <div className={cn("block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]", styles.className)}>
            {d.text}
          </div>
        </div>
        <div className={cn("w-full max-w-[36.9375rem] block overflow-hidden", styles.className2)}>
          <div className="block mb-[0.8125rem] max-md:mb-[1.4375rem] md:max-lg:mb-[1.0625rem]">
            <div className="block">
              {d.text2}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px block absolute bottom-0 inset-x-0 min-w-0 bg-border" />
    </div>
  );
}
