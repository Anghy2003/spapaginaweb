import type { Metadata } from "next";
import { SITE_ORIGIN } from "./site";
import { SOCIAL } from "./social";

// Datos reales del consultorio. Se usan para las etiquetas de cada página y para la ficha
// que lee Google (el bloque JSON-LD del layout), así que se escriben una sola vez aquí.
export const BUSINESS = {
  name: "Medical Livesthetic Fisiospa",
  phone: "+593979898964",
  phoneLabel: "+593 97 989 8964",
  email: "medicallivesthetic@gmail.com",
  street: "Teresa de Ávila y Fray Luis de León (Parque Valladolid)",
  city: "Cuenca",
  region: "Azuay",
  country: "EC",
  lat: -2.9118699,
  lng: -79.020164,
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], morning: ["08:30", "12:00"], afternoon: ["14:00", "17:30"] },
};

// Frases cortas con las que la gente busca en Cuenca. Van en las etiquetas de cada página y
// en la línea de servicios del pie, que es texto visible y por eso cuenta más que una etiqueta.
export const KEYWORDS = [
  "fisiospa",
  "fisiospa Cuenca",
  "Medical Livesthetic Fisiospa",
  "fisioterapia en Cuenca",
  "fisioterapeuta en Cuenca",
  "rehabilitación física Cuenca",
  "masajes terapéuticos Cuenca",
  "masajes relajantes Cuenca",
  "centro de estética en Cuenca",
  "limpieza facial profunda Cuenca",
  "tratamientos faciales Cuenca",
  "maderoterapia Cuenca",
  "mesoterapia Cuenca",
  "reducción de medidas Cuenca",
  "sueros y vitaminas Cuenca",
];

type PageSeo = { title: string; description: string; path: string };

/** Arma las etiquetas de una página: título, descripción, dirección canónica y vista previa. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = SITE_ORIGIN + path;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "es_EC",
      siteName: BUSINESS.name,
      images: [SITE_ORIGIN + "/assets/brand/og.png"],
    },
    twitter: { card: "summary_large_image", title, description, images: [SITE_ORIGIN + "/assets/brand/og.png"] },
  };
}

/**
 * Ficha del negocio en el formato que entiende Google (JSON-LD). Es lo que permite que el
 * buscador sepa que esto es un consultorio de Cuenca, con esta dirección, este teléfono y
 * este horario, en vez de una página cualquiera.
 */
export function businessJsonLd() {
  const { name, phone, email, street, city, region, country, lat, lng, hours } = BUSINESS;
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "HealthAndBeautyBusiness"],
    "@id": SITE_ORIGIN + "/#clinica",
    name,
    description:
      "Consultorio de fisioterapia y estética en Cuenca: rehabilitación, masajes terapéuticos, tratamientos faciales y corporales.",
    url: SITE_ORIGIN,
    logo: SITE_ORIGIN + "/assets/brand/logo-dark.png",
    image: SITE_ORIGIN + "/assets/brand/local.jpg",
    telephone: phone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city,
      addressRegion: region,
      addressCountry: country,
    },
    geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
    areaServed: { "@type": "City", name: city },
    availableLanguage: "es",
    openingHoursSpecification: [hours.morning, hours.afternoon].map(([opens, closes]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens,
      closes,
    })),
    sameAs: SOCIAL.filter((s) => s.label !== "WhatsApp").map((s) => s.href),
    medicalSpecialty: "PhysicalTherapy",
    makesOffer: [
      "Evaluación fisioterapéutica",
      "Rehabilitación de lesiones y terapia postoperatoria",
      "Masajes terapéuticos, relajantes y deportivos",
      "Electroterapia y ultrasonido terapéutico",
      "Limpieza Facial Profunda y Tratamientos Faciales",
      "Maderoterapia, moldeamiento y reducción de medidas",
      "Mesoterapia Facial y Corporal",
      "Sueros y vitaminas",
    ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
  };
}
