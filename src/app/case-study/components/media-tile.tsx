export type MediaTileData = {
  href: string;
  imgSrc: string;
  srcSet: string;
  text: string;
  href2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="block" role="listitem">
      <div className="h-full block">
        <a className="flex max-w-full rounded-[10px] flex-col items-stretch gap-[1.4375rem] overflow-hidden cursor-pointer" data-component="link" href={d.href}>
          <img className="w-full h-[30.9375rem] block max-w-full overflow-clip object-cover aspect-[auto_630/520] align-middle max-md:h-[17.8125rem] md:max-lg:h-73 2xl:h-[39.9375rem]" data-component="image" alt="" height="520" sizes="(max-width: 767px) 100vw, 630px" src={d.imgSrc} srcSet={d.srcSet} width="630" />
          <div className="w-[18.6375rem] h-7 block absolute top-0 left-0 opacity-0 min-w-0 pointer-events-none">
            This is some text inside of a div block.
          </div>
        </a>
        <div className="border-b border-solid border-b-border flex py-10 justify-between items-center max-md:py-5 md:max-lg:py-7.5">
          <div className="block text-color-001 text-lg font-medium leading-6 tracking-[-0.36px] max-lg:text-[1.0625rem] max-lg:leading-[1.4375rem]">
            {d.text}
          </div>
          <a className="w-12.5 h-12.5 border border-solid border-border flex relative max-w-full rounded-[100%] justify-center items-center cursor-pointer max-lg:w-10 max-lg:h-10" data-component="link" href={d.href2}>
            <div className="w-4.5 block max-lg:w-[0.8rem]">
              <img className="w-full h-4.5 block max-w-full overflow-clip object-cover aspect-[auto_18/18] align-middle max-lg:h-[0.8125rem]" data-component="image" alt="" height="18" src="/assets/cloned/svg/8ab131507f44.svg" width="18" />
            </div>
            <div className="w-12 h-49 block absolute -top-18.5 left-0 opacity-0 min-w-0 pointer-events-none">
              This is some text inside of a div block.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
