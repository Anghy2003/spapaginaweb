export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href} target="_blank">
      {d.label}
    </a>
  );
}
