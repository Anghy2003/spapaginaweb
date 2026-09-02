"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "593979898964";

/**
 * The captured form is a Webflow form with no backend behind it — submitting did nothing.
 * Rather than rebuild the markup, this attaches to it and turns a submit into a pre-filled
 * WhatsApp message, which is how the clinic actually takes bookings.
 */
export default function WhatsAppForm() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const form = document.getElementById("wf-form-Contact-Form-One") as HTMLFormElement | null;
    if (!form) return;

    const val = (id: string) => {
      const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      return (el?.value || "").trim();
    };

    const onSubmit = (e: Event) => {
      e.preventDefault();

      const nombre = [val("Contact-first-name"), val("Contact-last-name")].filter(Boolean).join(" ");
      if (!nombre) {
        setError("Escribe tu nombre para poder atenderte.");
        (document.getElementById("Contact-first-name") as HTMLInputElement | null)?.focus();
        return;
      }
      setError(null);

      const lineas = [
        "Hola Medical Livesthetic Fisiospa 👋",
        "",
        `Soy ${nombre}.`,
        val("Custom-consultation-type") && `Me interesa: ${val("Custom-consultation-type")}.`,
        val("Choose-time-v2") && `Horario que me queda mejor: ${val("Choose-time-v2")}.`,
        val("Contact-phone") && `Mi teléfono: ${val("Contact-phone")}.`,
        val("Contact-email") && `Mi correo: ${val("Contact-email")}.`,
        val("field") && `\n${val("field")}`,
        "",
        "Quisiera agendar una valoración.",
      ].filter(Boolean);

      const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join("\n"))}`;
      window.open(url, "_blank", "noopener,noreferrer");
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  if (!error) return null;
  return (
    <div className="block mt-4 text-color-013" role="alert">
      {error}
    </div>
  );
}
