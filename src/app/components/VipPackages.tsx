import { SOCIAL } from "../../lib/social";

// The clinic announces its VIP packages and monthly promotions only on social media, so the
// site points people there instead of listing prices (there is no pricing page by design).
const NETWORKS = SOCIAL.filter((s) => s.label !== "WhatsApp");

export default function VipPackages() {
  return (
    <div className="flex p-10 rounded-[20px] flex-col justify-between items-start gap-7.5 bg-color-003 max-lg:p-6 lg:flex-row lg:items-center">
      <div className="flex max-w-162.5 flex-col items-start gap-[0.9375rem]">
        <div className="flex justify-start items-center gap-[0.4rem]">
          <div className="w-[0.3125rem] h-[0.3125rem] block bg-clr-13" />
          <div className="block text-clr-13 text-lg leading-[1.75rem] tracking-[-0.54px]">
            Paquetes VIP
          </div>
        </div>
        <div className="block text-background text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem]">
          Paquetes VIP y promociones del mes
        </div>
        <p className="block text-color-009">
          Publicamos nuestros paquetes VIP y las promociones de cada mes en nuestras redes sociales. Síguenos para estar pendiente y aprovecharlos.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 max-md:gap-2.5">
        {NETWORKS.map((s) => (
          <a key={s.href} className="h-11 border border-solid border-surface-3 flex py-2.5 px-5 rounded-[50px] justify-center items-center gap-2.5 bg-surface-4 cursor-pointer" href={s.href} target="_blank" rel="noopener noreferrer">
            <img className="w-4 h-4 block object-contain" src={s.icon} alt="" width="16" height="16" />
            <div className="block text-background leading-6 whitespace-nowrap">
              {s.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
