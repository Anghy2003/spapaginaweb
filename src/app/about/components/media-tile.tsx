export type MediaTileData = {
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="flex relative py-[0.9375rem] justify-start items-center gap-2.5 max-md:pt-0">
      <div className="w-3 block shrink-0">
        <img className="w-full h-3 block max-w-full overflow-clip object-cover aspect-[auto_13/13] align-middle" data-component="image" alt="" height="13" src="/assets/cloned/svg/3b29a9ed1765.svg" width="13" />
      </div>
      <div className="block">
        {d.text}
      </div>
      <div className="h-px block absolute bottom-0 inset-x-0 min-w-0 bg-border">
        <div className="w-0 h-px block bg-foreground" />
      </div>
    </div>
  );
}
