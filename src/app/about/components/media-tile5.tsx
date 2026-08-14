import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile5Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className={cn("block flex-1", styles.className)}>
      <div className={cn("block relative shrink-0 overflow-hidden", styles.className2)}>
        <img className="w-full h-82.5 block max-w-full overflow-clip object-cover aspect-[auto_300/360] align-middle 2xl:h-[27.1875rem]" data-component="image" alt={d.alt} height="360" sizes="300px" src={d.imgSrc} srcSet={d.srcSet} width="300" />
        <div className="w-[17.1875rem] h-82.5 flex absolute top-0 left-0 opacity-0 rounded-md justify-center items-center bg-clr-16">
          <a className="h-[2.3rem] flex relative max-w-[2.3rem] justify-center items-center cursor-pointer" data-component="link" href="https://www.instagram.com/" target="_blank">
            <div className="w-12 h-49 block absolute -top-[4.975rem] -left-[0.35rem] opacity-0 min-w-0 pointer-events-none">
              This is some text inside of a div block.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
