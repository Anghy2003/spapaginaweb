"use client";

import { useEffect, useRef } from "react";

/**
 * The clinic's own treatment clips, watermarked and re-encoded by scripts/build-spa-videos.js.
 *
 * They are not autoplayed: seven clips starting on their own is heavy on a phone's data plan,
 * and autoplay is blocked or unreliable in enough contexts that it can't be the only way in.
 * Each tile shows its poster with native controls, so one tap plays it anywhere. The observer
 * below is a nicety on top — it pauses a clip once it scrolls away — and the gallery works
 * exactly the same if it never fires.
 */
type Clip = { slug: string; title: string; caption: string; portrait?: boolean };

const CLIPS: Clip[] = [
  { slug: "limpieza-facial-profunda", title: "Limpieza facial profunda", caption: "Extracción y limpieza en cabina" },
  { slug: "mesoterapia-corporal", title: "Mesoterapia corporal", caption: "Aplicación en zona localizada" },
  { slug: "tratamiento-corporal", title: "Tratamiento corporal", caption: "Trabajo manual sobre la zona a tratar" },
  { slug: "mesoterapia", title: "Mesoterapia", caption: "Aplicación facial y corporal", portrait: true },
  { slug: "sueros-y-vitaminas", title: "Sueros y vitaminas", caption: "Preparación del tratamiento" },
  { slug: "resultado-facial", title: "Resultado facial", caption: "Después de la sesión", portrait: true },
  { slug: "tratamiento-localizado", title: "Tratamiento localizado", caption: "Procedimiento de precisión" },
];

function Video({ clip }: { clip: Clip }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting && !el.paused) el.pause();
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="flex flex-col items-stretch rounded-[10px] overflow-hidden bg-color-001">
      <video
        ref={ref}
        className={`w-full block object-cover align-middle bg-color-001 ${
          clip.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
        poster={`/assets/spa/${clip.slug}.jpg`}
        preload="metadata"
        muted
        loop
        playsInline
        controls
        aria-label={clip.title}
      >
        <source src={`/assets/spa/${clip.slug}.mp4`} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
      <figcaption className="block px-5 py-4">
        <div className="block text-background text-lg font-medium leading-6 tracking-[-0.36px]">
          {clip.title}
        </div>
        <div className="block mt-1 text-color-009">{clip.caption}</div>
      </figcaption>
    </figure>
  );
}

export default function VideoGallery() {
  // The CTA section that follows carries -mt-72, so the bottom padding here has to absorb
  // that overlap or the card lands on top of the last row of videos.
  return (
    <section className="block pt-30 pb-[25.5rem] bg-surface max-lg:pt-15 max-lg:pb-[22.5rem]">
      <div className="block max-w-407.5 px-[0.9375rem] mx-auto">
        <div className="flex mb-15 flex-col justify-start items-center text-center max-lg:mb-10">
          <div className="block mb-[1.5625rem] max-lg:mb-[0.9375rem]">
            <div className="flex justify-center items-center gap-[0.4rem]">
              <div className="w-[0.3125rem] h-[0.3125rem] block bg-color-004" />
              <div className="block text-color-001 text-lg leading-[1.75rem] tracking-[-0.54px] max-md:leading-[1.5625rem] max-md:[font-size:inherit]">
                En nuestra cabina
              </div>
            </div>
          </div>
          <h2 className="block max-w-240 text-color-001 text-[2.625rem] font-semibold leading-[3rem] tracking-[-0.84px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] md:max-lg:text-3xl md:max-lg:leading-[2.125rem]">
            Nuestros tratamientos en video
          </h2>
          <p className="block mt-[1.5625rem] max-w-160 max-lg:mt-[0.9375rem]">
            Grabaciones reales de sesiones en Medical Livesthetic Fisiospa.
          </p>
        </div>
        <div className="w-full grid gap-7.5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] items-start max-md:gap-5">
          {CLIPS.map((c) => (
            <Video key={c.slug} clip={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
