export type LogoData = {
  alt: string;
  imgSrc: string;
  sizes?: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="block">
      <img className="w-full h-[23.9375rem] block max-w-full rounded-[10px] overflow-clip object-cover aspect-square align-middle max-md:h-[21.5625rem] md:max-lg:h-56.5 2xl:h-125" data-component="image" alt={d.alt} src={d.imgSrc} sizes={d.sizes} srcSet={d.srcSet} />
    </div>
  );
}
