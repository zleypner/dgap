"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Button,
  ButtonGroup,
  StarRating,
} from "@/components/ui";
import { Quote } from "lucide-react";

// Real testimonials data
const testimonials = [
  {
    name: "Victor Eduardo Montero Dien",
    date: "19/07/26",
    text: "Considerada y atenta. Se enfoca realmente en la razón de la consulta y brinda un enfoque amplio y profesional en la atención.",
  },
  {
    name: "Teresita María de la Trinidad León Pereira",
    date: "07/06/26",
    text: "La Dra. siempre tiene muchísima paciencia, es demasiado detallista, cuida cada palabra que uno le dice y es demasiado profesional. La recomendaría muchísimo.",
  },
  {
    name: "Anónimo",
    date: "30/05/26",
    text: "La doctora Pinto es muy atenta, explica sin correr el procedimiento que va a hacer, muy profesional y calmada.",
  },
  {
    name: "Anónimo",
    date: "29/05/26",
    text: "La doctora Pinto es excelente y tiene un manejo exquisito con los pacientes. Amable, atenta y explica todos los pormenores del procedimiento. Altamente recomendada como profesional médico.",
  },
  {
    name: "Anónimo",
    date: "15/03/26",
    text: "Me gustó mucho su trato y su puntualidad. La recomendaría.",
  },
  {
    name: "María Marta Vargas Arias",
    date: "05/12/25",
    text: "La Dra. Pinto es excelente profesional. Su trato es muy amable y considerado. La recomiendo sin reservas.",
  },
  {
    name: "Rochelle Kimball",
    date: "22/11/25",
    text: "Excelente. Me gusta mucho esta doctora. Es inteligente y me ayudó con mi enfermedad. Hablo solamente un poquito de español y ella habla inglés perfectamente. La recomiendo a todos.",
  },
  {
    name: "Anónimo",
    date: "29/10/25",
    text: "Excelente doctora, muy buen trato y acertada en su diagnóstico.",
  },
  {
    name: "Joshua Jiménez Díaz",
    date: "03/10/25",
    text: "Excelente servicio, muy amable y dulce. Súper recomendada.",
  },
  {
    name: "Katherine Arias Hurtado",
    date: "29/09/25",
    text: "Feliz de que me hayan referido con ella. Por mucho, una de las mejores doctoras con las que he tenido la dicha de tener consulta.",
  },
  {
    name: "Luisa Fernanda Castro Artavia",
    date: "19/09/25",
    text: "La atención es excelente y el trato humano maravilloso. En especial, la doctora Pinto tiene un trato muy cálido y se preocupa por mejorar la condición de salud del paciente.",
  },
  {
    name: "Anónimo",
    date: "13/08/25",
    text: "Muy profesional, excelente comunicación y calidad humana. La recomiendo un 100%.",
  },
  {
    name: "Alexander de Jesús Rojas Argüello",
    date: "26/07/25",
    text: "Definitivamente el trato, lo concisa y la forma acertada en los diagnósticos de la Dra. Pinto me hacen sentirme sano después de visitarla. Gracias.",
  },
  {
    name: "Anónimo",
    date: "24/07/25",
    text: "¡La doctora más empática y linda que he conocido! Un trato súper amigable, siempre dispuesta a aclarar cualquier duda. A ojos cerrados la recomiendo.",
  },
  {
    name: "Anónimo",
    date: "26/06/25",
    text: "La doctora Pinto es una persona muy profesional, empática, muy clara a la hora de explicar y muy acertada en sus diagnósticos.",
  },
  {
    name: "Anabelle Vargas Porras",
    date: "20/06/25",
    text: "Trato muy amable, instrucciones muy claras, excelente profesionalismo. Es considerada, se expresa con claridad y está dispuesta a aclarar cualquier duda o pregunta que el paciente tenga. Excelente médico.",
  },
  {
    name: "Anónimo",
    date: "10/06/25",
    text: "La Dra. Pinto es muy profesional, paciente y con amplio conocimiento de los síntomas de mi dolencia. Me informó de aspectos que desconocía de mi enfermedad y ajustó el tratamiento a mis restricciones. Tiene un trato humano y empático con los adultos mayores.",
  },
  {
    name: "Sandra Elena León Pereira",
    date: "22/05/25",
    text: "La Dra. Pinto es una excelente profesional y una persona muy atenta y servicial. La recomiendo mucho.",
  },
  {
    name: "Carolina Batalla Chacón",
    date: "11/04/25",
    text: "Muy buena, muy profesional y atenta la doctora. La recomiendo.",
  },
  {
    name: "Gisella Victoria Murillo Soto",
    date: "28/02/25",
    text: "Siempre que la visito recibo un trato maravilloso. Es una persona muy humana, profesional y ética, con mucho conocimiento y compromiso. La recomiendo a ciegas.",
  },
  {
    name: "Anónimo",
    date: "06/07/26",
    text: "Como siempre, excelente. A cualquier persona que necesite atención médica profesional le recomiendo a la doctora Eimy Pinto.",
  },
  {
    name: "Beverly Farrish",
    date: "10/07/26",
    text: "Fue una experiencia maravillosa. La recomiendo encarecidamente.",
  },
  {
    name: "Anónimo",
    date: "16/07/26",
    text: "La atención fue excelente. Me explicó los detalles.",
  },
  {
    name: "Anónimo",
    date: "01/04/26",
    text: "La experiencia fue significativa, superando mis expectativas. Gracias.",
  },
  {
    name: "Anónimo",
    date: "31/03/26",
    text: "Agradecemos que atendiera con urgencia a mi mamá de 90 años para poder contar con los resultados de sus exámenes lo antes posible y ajustar sus medicamentos después de un evento isquémico transitorio.",
  },
  {
    name: "Anónimo",
    date: "23/10/25",
    text: "Excelente profesional y, por ende, excelente el servicio recibido.",
  },
  {
    name: "Anónimo",
    date: "03/05/25",
    text: "Trato muy amable y cordial por parte de la Dra. Muchas gracias.",
  },
  {
    name: "Anónimo",
    date: "22/05/26",
    text: "Siempre es la mejor. Muy atenta, cuidadosa y profesional.",
  },
  {
    name: "Anónimo",
    date: "14/05/26",
    text: "Excelente atención.",
  },
  {
    name: "Anónimo",
    date: "22/11/25",
    text: "La doctora fue atenta, me examinó tomando en cuenta mis síntomas y respondió a mis preguntas.",
  },
];

// Split testimonials into 3 rows
const row1 = testimonials.slice(0, 10);
const row2 = testimonials.slice(10, 20);
const row3 = testimonials.slice(20, 30);

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="mx-2 w-[300px] flex-shrink-0 sm:w-[350px]">
      <div className="flex h-full flex-col rounded-xl border border-[#38BDF8]/20 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5">
        {/* Quote icon and rating */}
        <div className="mb-3 flex items-center justify-between">
          <Quote className="h-6 w-6 text-[#38BDF8]/40" />
          <StarRating rating={5} />
        </div>

        {/* Text */}
        <p className="mb-4 flex-grow text-sm leading-relaxed text-[#1E3A5F]/80">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 border-t border-[#E5E7EB] pt-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#38BDF8]/10">
            <Icons.user className="h-4 w-4 text-[#38BDF8]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-[#1E3A5F]">
              {testimonial.name}
            </p>
            <p className="text-xs text-[#1E3A5F]/50">
              {testimonial.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselRow({
  testimonials,
  direction = "left",
  duration = 60,
}: {
  testimonials: typeof row1;
  direction?: "left" | "right";
  duration?: number;
}) {
  // Duplicate testimonials for seamless loop
  const duplicated = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className={`flex ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {duplicated.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <Section
      id="testimonios"
      className="overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("testimonials.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("testimonials.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E3A5F]/70">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>
      </Container>

      {/* Carousel rows - full width */}
      <div className="space-y-4">
        <CarouselRow testimonials={row1} direction="left" duration={80} />
        <CarouselRow testimonials={row2} direction="right" duration={90} />
        <CarouselRow testimonials={row3} direction="left" duration={85} />
      </div>

      <Container>
        {/* CTA */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-up"
          delay={400}
          duration={500}
          easing="smooth"
        >
          <ButtonGroup className="mt-10 flex flex-col items-center text-center sm:mt-12">
            <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
              {t("testimonials.ctaPreText")}
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <Icons.whatsapp />
                {t("testimonials.cta")}
              </Button>
            </a>
          </ButtonGroup>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
