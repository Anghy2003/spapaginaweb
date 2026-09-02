import { SITE_ORIGIN } from "../../lib/site";

export const dynamic = "force-static";

const ORIGIN = SITE_ORIGIN || "https://medicallivesthetic.com";

const BODY = `# Medical Livesthetic Fisiospa

Estética avanzada + fisioterapia profesional en un solo lugar. Cuidamos tu cuerpo de forma integral, combinando tratamientos estéticos con técnicas fisioterapéuticas para que te veas mejor y te sientas mejor.

## Contacto

- Teléfono / WhatsApp: +593 97 989 8964
- Correo: medicallivesthetic@gmail.com
- Dirección: Teresa de Ávila y Fray Luis de León (Parque Valladolid), Cuenca – Ecuador
- Horario: lunes a sábado, 09:00 – 19:00

## Servicios

### Fisioterapia
Tratamientos personalizados para aliviar el dolor, recuperar la movilidad y mejorar la función física.
- Evaluación fisioterapéutica
- Terapia para dolor muscular y articular
- Rehabilitación de lesiones
- Terapia postoperatoria
- Masoterapia terapéutica
- Electroterapia
- Ultrasonido terapéutico
- Ejercicios terapéuticos
- Rehabilitación funcional

### Estética: tratamientos faciales y corporales
- Limpieza facial profunda
- Tratamientos faciales: acné, deshidratación, manchas, arrugas, flacidez
- Extracción de lunares y verrugas
- Reducción de papada
- Tratamiento para ojeras
- Tratamiento para alopecia
- Reducción de medidas
- Tonificación (flacidez)
- Moldeamiento
- Maderoterapia
- Mesoterapia

### Otros
- Administración de sueros y vitaminas: antiedad, deshidratación, vitaminas, energía
- Masajes relajantes, deportivos y terapéuticos

## Páginas

- [Inicio](${ORIGIN}/) - Estética avanzada y fisioterapia profesional en Cuenca.
- [Nosotros](${ORIGIN}/about) - Quiénes somos y cómo trabajamos.
- [Servicios](${ORIGIN}/service) - Fisioterapia, estética facial y corporal, masajes.
- [Resultados](${ORIGIN}/case-study) - Casos y tratamientos destacados.
- [Contacto](${ORIGIN}/contact) - Agenda tu cita.
`;

export function GET() {
  return new Response(BODY, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
