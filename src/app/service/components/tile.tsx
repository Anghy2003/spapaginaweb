export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="flex justify-center items-center grow shrink-0 gap-[0.9rem]">
      <div className="w-[0.2rem] h-[0.2rem] block bg-color-004" />
      <div className="block">
        {d.text}
      </div>
    </div>
  );
}
