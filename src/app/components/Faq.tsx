"use client";

import { useState } from "react";

/**
 * The captured FAQ was a Webflow dropdown: the clone kept the question rows and the chevrons
 * but not the runtime, and every row except the first had no answer markup at all — the list
 * simply could not be opened. This replaces all four per-route copies with one real accordion.
 */
const ITEMS: { q: string; a: string }[] = [
  {
    q: "¿Necesito cita previa?",
    a: "Sí. Agendar tu cita nos permite dedicarte el tiempo necesario, evitar esperas y darte atención personalizada. Escríbenos al +593 97 989 8964.",
  },
  {
    q: "¿Qué tratamientos ofrecen?",
    a: "Dos áreas que se complementan. En fisioterapia: evaluación fisioterapéutica, terapia para dolor muscular y articular, rehabilitación de lesiones, terapia postoperatoria, masoterapia, electroterapia, ultrasonido terapéutico, ejercicios terapéuticos y rehabilitación funcional. En estética facial y corporal: limpieza facial profunda, tratamientos para acné, deshidratación, manchas, arrugas y flacidez, extracción de lunares y verrugas, reducción de papada, tratamiento para ojeras, tratamiento para alopecia, reducción de medidas, tonificación, moldeamiento, maderoterapia y mesoterapia. Además aplicamos sueros y vitaminas, y masajes relajantes, deportivos y terapéuticos.",
  },
  {
    q: "¿Los tratamientos son seguros?",
    a: "Sí. Toda sesión empieza con una valoración para revisar tu caso y descartar contraindicaciones antes de definir el protocolo. Trabajamos con material estéril de un solo uso y con equipos en buen estado, siguiendo las normas de bioseguridad.",
  },
  {
    q: "¿Cuántas sesiones necesito para ver resultados?",
    a: "Depende del tratamiento y de tu punto de partida. En fisioterapia el alivio del dolor suele notarse desde las primeras sesiones, mientras que una recuperación completa lleva más tiempo. En estética facial y corporal se trabaja por ciclos de varias sesiones. El número exacto te lo indicamos en la valoración inicial, no antes.",
  },
  {
    q: "¿Los planes son personalizados?",
    a: "Sí. No aplicamos protocolos genéricos. Después de la valoración diseñamos el plan según tu objetivo, tu estado físico y tu disponibilidad, y lo vamos ajustando según cómo respondas al tratamiento.",
  },
];

function Row({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = q.replace(/[^\w]+/g, "-").toLowerCase();
  return (
    <div className="border-b border-solid border-b-border flex relative flex-col justify-between items-stretch text-left">
      <button
        type="button"
        className="w-full flex relative pb-2.5 justify-between items-center gap-2.5 text-left text-color-001 cursor-pointer"
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        onClick={onToggle}
      >
        <span className="block text-color-001 text-xl font-medium leading-6.5 tracking-[-0.4px] max-lg:text-lg max-lg:leading-[1.4375rem]">
          {q}
        </span>
        {/* The chevron is drawn rather than rotated: a CSS transform on the captured arrow
            asset did not reliably apply, and swapping the path leaves no doubt which way
            it points. */}
        <span className="flex w-3 shrink-0 justify-center items-center" aria-hidden="true">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="block">
            <path
              d={open ? "M11 6L6 1L1 6" : "M1 1L6 6L11 1"}
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {/* The `hidden` attribute alone is not enough here: Tailwind's `block` utility beats the
          UA stylesheet's [hidden]{display:none}, so the answer stayed on screen. Toggle the
          display utility itself. */}
      <div id={`faq-${id}`} className={open ? "block overflow-hidden" : "hidden"}>
        <div className="w-full max-w-157.5 block pb-5.5 max-lg:pb-3.5">
          <p className="block">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  // Each row opens and closes on its own — opening one does not slam another shut.
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) =>
    setOpen((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  return (
    <div className="w-full flex rounded-[15px] flex-col items-stretch gap-8.5 max-lg:gap-6">
      {ITEMS.map((it, i) => (
        <Row key={it.q} q={it.q} a={it.a} open={open.includes(i)} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}
