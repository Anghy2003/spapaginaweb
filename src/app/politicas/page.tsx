import { pageMetadata, BUSINESS } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Políticas de privacidad y aviso legal",
  description:
    "Cómo tratamos los datos de quienes nos escriben: qué recogemos, para qué, con quién se comparte y cómo pedir que los eliminemos. Medical Livesthetic Fisiospa, Cuenca.",
  path: "/politicas",
});

const ACTUALIZADO = "30 de octubre de 2026";

// Cada bloque es un apartado de la política. El texto describe lo que el sitio hace de verdad:
// no hay servidor propio guardando formularios (el de citas abre WhatsApp), no hay cookies
// propias ni herramientas de publicidad o analítica.
const SECCIONES: { titulo: string; parrafos?: string[]; lista?: string[] }[] = [
  {
    titulo: "Quién es responsable de tus datos",
    parrafos: [
      `${BUSINESS.name}, con consultorio en ${BUSINESS.street}, ${BUSINESS.city} – Ecuador, es responsable del tratamiento de los datos personales que recibimos a través de este sitio, de WhatsApp y de la atención en consulta.`,
      `Para cualquier consulta sobre esta política escríbenos a ${BUSINESS.email} o al ${BUSINESS.phoneLabel}.`,
    ],
  },
  {
    titulo: "Qué datos recogemos",
    lista: [
      "Los que escribes tú al agendar: nombre, teléfono, correo electrónico, el tratamiento que te interesa, el horario que prefieres y el mensaje que nos envías.",
      "Los que nos das en la consulta: antecedentes de salud, motivo de la consulta y evolución del tratamiento. Son datos sensibles y los tratamos con reserva profesional.",
      "Datos técnicos de la visita al sitio (dirección IP, tipo de navegador, páginas que miras), que registran el servicio que aloja la página y la herramienta de medición de Google.",
    ],
  },
  {
    titulo: "Para qué los usamos",
    lista: [
      "Responder tu consulta y agendar, confirmar o reprogramar tu cita.",
      "Planificar y dar seguimiento a tu tratamiento.",
      "Avisarte de cambios en tu cita o en el horario de atención.",
    ],
    parrafos: [
      "No vendemos ni cedemos tus datos a terceros con fines comerciales, y no los usamos para publicidad de otras empresas.",
    ],
  },
  {
    titulo: "Cómo viajan los datos del formulario",
    parrafos: [
      "El formulario de citas de este sitio no envía la información a un servidor nuestro: arma un mensaje con lo que escribiste y lo abre en WhatsApp para que tú decidas enviarlo. Mientras no pulses enviar en WhatsApp, esa información no sale de tu teléfono o computadora.",
      "Cuando nos escribes por WhatsApp, Instagram, Facebook o TikTok, la conversación también se rige por las políticas de privacidad de esas plataformas, que no dependen de nosotros.",
    ],
  },
  {
    titulo: "Cookies y medición de visitas",
    parrafos: [
      "Usamos Google Tag Manager, la herramienta con la que Google mide cuántas personas visitan el sitio, desde qué ciudad llegan y qué páginas miran. Para eso instala cookies en tu navegador.",
      "Esa medición nos sirve para saber qué información buscas y mejorar la página. No la usamos para identificarte por tu nombre ni para cruzarla con tu historia clínica, y no compartimos esos datos con anunciantes.",
      "Puedes bloquear o borrar estas cookies desde la configuración de tu navegador, y la página seguirá funcionando igual.",
      "El mapa, los enlaces a redes sociales y WhatsApp llevan a servicios de terceros que también pueden usar sus propias cookies cuando los abres.",
    ],
  },
  {
    titulo: "Cuánto tiempo los conservamos",
    parrafos: [
      "Los datos de contacto y la historia de tu tratamiento se conservan mientras seas paciente y durante el tiempo que exija la normativa sanitaria aplicable. Pasado ese plazo, se eliminan o se anonimizan.",
    ],
  },
  {
    titulo: "Tus derechos",
    parrafos: [
      "Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador, puedes pedirnos en cualquier momento:",
    ],
    lista: [
      "Acceder a los datos que tenemos sobre ti.",
      "Corregirlos si están equivocados o incompletos.",
      "Eliminarlos cuando ya no sean necesarios.",
      "Oponerte a un uso concreto o retirar tu consentimiento.",
      "Recibir una copia de tus datos para llevarlos a otro profesional.",
    ],
  },
  {
    titulo: "Fotos y videos de tratamientos",
    parrafos: [
      "Publicamos fotos y videos de tratamientos únicamente con la autorización de la paciente. Si reconoces tu imagen en este sitio o en nuestras redes y quieres que la retiremos, escríbenos y la retiramos sin que tengas que explicar por qué.",
    ],
  },
  {
    titulo: "Menores de edad",
    parrafos: [
      "La atención a menores de edad se realiza siempre con el acompañamiento y la autorización de su madre, padre o representante legal, que es quien da el consentimiento para el tratamiento de sus datos.",
    ],
  },
  {
    titulo: "Aviso legal sobre el contenido",
    parrafos: [
      "La información de este sitio es orientativa y no reemplaza una valoración profesional. Todo tratamiento comienza con una valoración previa, y los resultados varían según cada persona, su estado de salud y el cumplimiento del plan indicado.",
      "Los textos, fotos, videos y el logotipo de este sitio son de Medical Livesthetic Fisiospa y no pueden reproducirse sin autorización.",
    ],
  },
  {
    titulo: "Cambios en esta política",
    parrafos: [
      `Si cambiamos la forma en que tratamos los datos, actualizaremos esta página y la fecha que aparece al inicio. Última actualización: ${ACTUALIZADO}.`,
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="block pt-45 pb-15 bg-color-004 max-lg:pt-33 max-lg:pb-10">
        <div className="block max-w-407.5 px-[0.9375rem] mx-auto">
          <div className="block max-w-240">
            <h1 className="block text-background text-6xl font-semibold leading-[4rem] tracking-[-1.2px] max-md:text-[2.1875rem] max-md:leading-[2.3125rem] md:max-lg:text-[2.5rem] md:max-lg:leading-[2.625rem]">
              Políticas de privacidad
            </h1>
            <p className="block pt-5 text-color-009">
              {`Cómo tratamos la información de quienes nos escriben y nos visitan. Última actualización: ${ACTUALIZADO}.`}
            </p>
          </div>
        </div>
      </section>
      <section className="block py-30 bg-background max-lg:py-15">
        <div className="block max-w-407.5 px-[0.9375rem] mx-auto">
          <div className="flex max-w-200 flex-col items-start gap-12.5 max-lg:gap-10">
            {SECCIONES.map((s) => (
              <div key={s.titulo} className="w-full flex border-t border-solid border-t-border pt-7.5 flex-col items-start gap-5 max-lg:pt-5 max-lg:gap-4">
                <h2 className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem]">
                  {s.titulo}
                </h2>
                {s.parrafos?.map((p) => (
                  <p key={p} className="block text-foreground">
                    {p}
                  </p>
                ))}
                {s.lista ? (
                  <ul className="w-full flex flex-col items-start gap-[0.6rem]">
                    {s.lista.map((item) => (
                      <li key={item} className="w-full flex justify-start items-start gap-2.5">
                        <div className="w-[0.3125rem] h-[0.3125rem] block mt-[0.6rem] shrink-0 rounded-[100%] bg-color-006" />
                        <div className="block text-foreground">{item}</div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <div className="w-full flex p-10 rounded-[20px] flex-col items-start gap-5 bg-surface max-lg:p-6">
              <div className="block text-color-001 text-2xl font-semibold leading-[1.75rem] tracking-[-0.48px] max-md:text-xl max-md:leading-[1.4375rem]">
                Ejercer tus derechos o resolver dudas
              </div>
              <p className="block text-foreground">
                Escríbenos y te respondemos dentro de los plazos que fija la ley.
              </p>
              <div className="flex flex-wrap items-center gap-5 max-md:gap-2.5">
                <a className="h-[2.7125rem] border border-solid border-color-003 flex pt-[0.5625rem] pb-2.5 px-5 rounded-[50px] justify-center items-center bg-color-003 cursor-pointer" href={`mailto:${BUSINESS.email}`}>
                  <div className="block text-background leading-6 whitespace-nowrap">
                    {BUSINESS.email}
                  </div>
                </a>
                <a className="h-[2.7125rem] border border-solid border-color-006 flex pt-[0.5625rem] pb-2.5 px-5 rounded-[50px] justify-center items-center bg-color-006 cursor-pointer" href={`https://wa.me/${BUSINESS.phone.replace("+", "")}`} target="_blank" rel="noopener noreferrer">
                  <div className="block text-background leading-6 whitespace-nowrap">
                    {BUSINESS.phoneLabel}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
