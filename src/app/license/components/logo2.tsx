export type Logo2Data = {
  alt: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="block">
      <img className="w-full h-[23.9375rem] block max-w-full rounded-[10px] overflow-clip object-cover aspect-square align-middle max-md:h-[21.5625rem] md:max-lg:h-56.5 2xl:h-125" data-component="image" alt={d.alt} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
    </div>
  );
}
