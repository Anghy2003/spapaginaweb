export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="flex pr-36 items-start shrink-0 gap-[0.5625rem] max-md:pr-8 md:max-lg:pr-16">
      <div className="block mt-[0.3125rem]">
        <div className="block justify-center items-center text-background text-lg font-medium leading-6 tracking-[-0.36px] max-lg:text-[1.0625rem] max-lg:leading-[1.4375rem]">
          *
        </div>
      </div>
      <div className="block justify-center items-center text-background text-lg font-medium leading-6 tracking-[-0.36px] max-lg:text-[1.0625rem] max-lg:leading-[1.4375rem]">
        {d.text}
      </div>
    </div>
  );
}
