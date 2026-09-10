# Medical Livesthetic Fisiospa

Sitio web de **Medical Livesthetic Fisiospa** — fisioterapia y estética avanzada en Cuenca, Ecuador.

- 📍 Teresa de Ávila y Fray Luis de León (Parque Valladolid), Cuenca – Ecuador
- 📲 +593 97 989 8964
- ✉️ medicallivesthetic@gmail.com
- 🕘 Lunes a viernes · 8:30 – 12:00 y 14:00 – 17:30

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

## Scripts de assets

El logo y los videos publicados se generan a partir de los originales:

```bash
node scripts/build-brand-assets.js   # src/logo.png -> public/assets/brand/
node scripts/build-spa-videos.js     # spa/*.mp4 -> public/assets/spa/ (marca de agua + compresión)
```

## Pendiente

Contenido de ejemplo que hay que reemplazar por datos reales:

- Los dos testimonios son de muestra
- Los enlaces de Facebook e Instagram son genéricos
