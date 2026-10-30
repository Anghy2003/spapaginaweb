# Medical Livesthetic Fisiospa

Sitio web de **Medical Livesthetic Fisiospa** — fisioterapia y estética avanzada en Cuenca, Ecuador.

- 📍 Teresa de Ávila y Fray Luis de León (Parque Valladolid), Cuenca – Ecuador
- 📲 +593 97 989 8964
- ✉️ medicallivesthetic@gmail.com
- 🕘 Lunes a viernes · 8:30 – 12:00 y 14:00 – 17:30
- 🌐 https://www.medicalivesthetic.com (la dirección oficial; la vieja de `*.vercel.app` sigue respondiendo)

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
```

Para generar el sitio estático (queda en `out/`):

```bash
npm run build
```

## Páginas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/about` | Nosotros |
| `/service` | Servicios — incluye la lista completa de tratamientos |
| `/case-study` | Resultados — galería de videos de la cabina |
| `/contact` | Contacto — el formulario abre WhatsApp con el mensaje ya escrito |

## Dónde tocar cada cosa

| Qué | Archivo |
|---|---|
| Menú (afecta cabecera, pie y móvil a la vez) | `src/app/HeaderNav.tsx` |
| Preguntas frecuentes y sus respuestas | `src/app/components/Faq.tsx` |
| Videos de la galería (títulos y orden) | `src/app/case-study/VideoGallery.tsx` |
| Mensaje que arma el formulario | `src/app/contact/WhatsAppForm.tsx` |
| Colores de marca | `src/app/globals.css` |
| Lista de servicios en tarjetas (planes) | `src/app/service/page.tsx` (`PLANS`) |
| Banda de paquetes VIP y redes | `src/app/components/VipPackages.tsx` |
| Títulos y descripciones para Google | `src/lib/seo.ts` + el `metadata` de cada `page.tsx` |
| Datos del negocio para Google (dirección, horario) | `src/lib/seo.ts` (`BUSINESS`) |
| Políticas de privacidad | `src/app/politicas/page.tsx` |

## Verificación de Google

`public/google0dcea8ec98577c68.html` es el archivo de verificación de Search Console.
Vercel sirve el sitio con URLs limpias y le quita la extensión `.html`, así que la
dirección exacta que comprueba Google daba 404: por eso `vercel.json` tiene una regla
que la devuelve. La etiqueta `<meta name="google-site-verification">` está en
`src/app/layout.tsx` y vale como segundo método.

## Scripts de assets

El logo y los videos publicados se generan a partir de los originales:

```bash
node scripts/build-brand-assets.js   # src/logo.png -> public/assets/brand/
node scripts/build-spa-videos.js     # spa/*.mp4 -> public/assets/spa/ (marca de agua + compresión)
```

## Pendiente

Contenido de ejemplo que hay que reemplazar por datos reales:

- Los dos testimonios son de muestra
- Falta registrar **https://www.medicalivesthetic.com** en Google Search Console (el código va en la variable `NEXT_PUBLIC_GOOGLE_VERIFICATION` de Vercel) y crear el Perfil de Empresa de Google
- El formulario de correo del pie no envía a ningún lado todavía
- El inicio dice "6 días de atención a la semana" (corrección del cliente) pero el horario publicado es de lunes a viernes: falta confirmar el horario del sábado
