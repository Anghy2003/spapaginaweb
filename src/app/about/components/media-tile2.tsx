import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  text: string;
  text2: string;
  alt: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="flex rounded-md flex-col items-start">
      <div className={cn("fx-flip h-full block relative rounded-md", styles.className)}>
        <div className="h-full flex relative z-9 pt-8.5 pb-7.5 px-10 rounded-[5px] flex-col justify-between items-stretch gap-44 overflow-hidden bg-background max-lg:pt-[1.9rem] max-lg:px-5 max-md:gap-[6.7rem]">
          <div className="flex flex-col items-start gap-7 max-md:pb-4">
            <div className="block max-w-32.5">
              <div className="block text-color-001 text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
                {d.text}
                <span className="inline text-foreground">
                  {d.text2}
                </span>
              </div>
            </div>
            <p className="block mb-2.5 max-md:mb-0 md:max-lg:mb-[0.3125rem]">
              Estética avanzada y fisioterapia profesional en un solo lugar.
            </p>
          </div>
          <div className="block relative">
            <a className="flex relative max-w-full justify-between cursor-pointer" data-component="link" href="/service">
              <div className="block -mb-[0.4rem] text-color-001 font-medium max-lg:-mb-[0.1rem]">
                Explorar
              </div>
              <div className="w-2.5 h-2.5 block z-2">
                <img className="w-full h-2.5 block max-w-full overflow-clip object-cover aspect-[auto_10/10] align-middle" data-component="image" alt="" height="10" src="/assets/cloned/svg/c81dc04c407a.svg" width="10" />
              </div>
            </a>
          </div>
        </div>
        <div className={cn("fx-flip-back h-full block absolute top-0 inset-x-0 z-2 rounded-[5px] gap-15 overflow-hidden transform-[matrix3d(-1,0,0,0,0,1,0,0,0,0,-1,0,0,0,-1,1)] max-lg:gap-7.5 max-md:origin-[172.5px_170.398px] md:max-lg:origin-[113px_213.305px] 2xl:origin-[250px_203.805px]", styles.className2)}>
          <div className="h-full block overflow-hidden">
            <img className="w-full h-102 block max-w-full overflow-clip object-cover aspect-[auto_410/420] align-middle max-md:h-[21.3125rem] md:max-lg:h-[26.6875rem]" data-component="image" alt={d.alt} height="420" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="410" />
          </div>
          <div className="h-full flex absolute top-0 inset-x-0 pb-[2.1875rem] pl-10 flex-col justify-end items-start max-lg:pl-5" style={{ backgroundImage: "linear-gradient(var(--clr-8) 55%, var(--clr-21))" }}>
            <div className="block text-background text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
              {d.text3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
