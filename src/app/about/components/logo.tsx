export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="w-[166.7px] block flex-1 overflow-hidden max-md:w-[104.3px] md:max-lg:w-24.5 2xl:w-[14.0625rem]">
      <div className="block">
        <img className="w-full h-[12.0625rem] block max-w-full overflow-clip object-cover aspect-[auto_190/220] align-middle max-md:h-[7.5625rem] md:max-lg:h-[7.0625rem] 2xl:h-[16.3125rem]" data-component="image" alt={d.alt} height="220" src={d.imgSrc} width="190" />
      </div>
    </div>
  );
}
