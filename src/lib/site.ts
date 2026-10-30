// El dominio público del sitio. Hasta ahora salía de una variable de entorno que nunca se
// configuró en Vercel, así que quedaba vacío: el sitemap publicaba direcciones relativas
// ("/service" en vez de "https://…/service") y Google las rechaza. El valor por defecto es el
// dominio propio del consultorio; si alguna vez cambia, basta con tocarlo aquí (o definir
// NEXT_PUBLIC_SITE_ORIGIN en Vercel).
export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://www.medicalivesthetic.com").replace(/\/$/, "");
