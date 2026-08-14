export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block overflow-hidden">
      <div className="flex justify-start items-center gap-[0.8125rem] transform-[matrix(1,0,0,1,0,-0.0797119)] md:max-lg:transform-[none]">
        <div className="w-5 h-px block bg-background" />
        <div className="block justify-center items-center text-background text-lg font-medium leading-6 tracking-[-0.36px] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.4375rem]">
          {d.text}
        </div>
      </div>
    </div>
  );
}
