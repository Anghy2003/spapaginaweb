import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  kind?: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("flex pr-2.5 shrink-0", styles.className)}>
      <h1 className="basis-full shrink-0 flex pr-2.5 text-color-012 text-6xl font-semibold leading-[4rem] tracking-[-1.2px] whitespace-nowrap md:max-lg:text-[2.5rem] md:max-lg:leading-[2.625rem]" data-component={d.kind}>
        {d.title}
      </h1>
    </div>
  );
}
