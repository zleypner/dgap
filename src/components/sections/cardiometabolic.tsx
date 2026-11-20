"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Button,
  ButtonMicrocopy,
  ButtonGroup,
} from "@/components/ui";
import { getWhatsAppLink } from "@/lib/utils";
import {
  CheckCircle,
  Stethoscope,
  Users,
  Heart,
  Activity,
  Award,
} from "lucide-react";

export function Cardiometabolic() {
  const { t } = useTranslation();

  const consultationIncludes = t("cardiometabolic.consultationIncludes", { returnObjects: true }) as {
    title: string;
    items: string[];
  };

  const targetAudience = t("cardiometabolic.targetAudience", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    items: string[];
  };

  const process = t("cardiometabolic.process", { returnObjects: true }) as {
    title: string;
    steps: string[];
  };

  const services = t("cardiometabolic.services", { returnObjects: true }) as string[];

  return (
    <Section
      id="cardiometabolico"
      className="overflow-hidden bg-[#1E3A5F] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        {/* ═══════════════════════════════════════════════════════════════
            HEADER - Título principal
        ═══════════════════════════════════════════════════════════════ */}
        <AnimateOnScroll
          animation="blur-in"
          mobileAnimation="fade-in"
          duration={600}
          easing="smooth"
        >
          <div className="mx-auto mb-10 max-w-[950px] text-center sm:mb-12 lg:mb-14">
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:text-sm">
              {t("cardiometabolic.badge")}
            </p>
            <h2 className="mb-4 text-[clamp(1.625rem,3.7vw,2.75rem)] font-bold leading-[1.1] text-white sm:mb-5">
              {t("cardiometabolic.title")}
            </h2>
            <p className="mb-4 text-base leading-[1.6] text-white/85 sm:text-lg">
              {t("cardiometabolic.subtitle")}
            </p>
            <p className="text-sm leading-[1.6] text-white/70 sm:text-base">
              {t("cardiometabolic.intro")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            SECCIÓN 1 - Qué incluye + Para quién (2 columnas)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-12 grid gap-6 sm:mb-14 lg:mb-16 lg:grid-cols-2 lg:gap-8">
          {/* Qué incluye la consulta */}
          <AnimateOnScroll
            animation="fade-up"
            mobileAnimation="fade-in"
            duration={500}
            easing="smooth"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/20">
                  <Stethoscope className="h-5 w-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {consultationIncludes.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {consultationIncludes.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                    <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Para quién es esta consulta */}
          <AnimateOnScroll
            animation="fade-up"
            mobileAnimation="fade-in"
            delay={100}
            duration={500}
            easing="smooth"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/20">
                  <Users className="h-5 w-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {targetAudience.title}
                </h3>
              </div>
              <p className="mb-3 text-sm font-medium text-white/70">
                {targetAudience.subtitle}
              </p>
              <ul className="space-y-2">
                {targetAudience.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                    <span className="text-sm leading-relaxed text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MENSAJE CLAVE
        ═══════════════════════════════════════════════════════════════ */}
        <AnimateOnScroll
          animation="scale-up"
          mobileAnimation="fade-in"
          duration={600}
          easing="spring"
        >
          <div className="mx-auto mb-12 max-w-3xl rounded-2xl border-2 border-[#38BDF8]/30 bg-[#38BDF8]/10 p-6 text-center sm:mb-14 sm:p-8 lg:mb-16">
            <Heart className="mx-auto mb-3 h-8 w-8 text-[#38BDF8]" />
            <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
              {t("cardiometabolic.keyMessage")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            SECCIÓN 2 - Imagen + Proceso y Servicios
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-12 grid items-center gap-8 sm:mb-14 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          {/* Imagen de consulta */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[1.2/1] lg:rounded-[28px]">
                <Image
                  src="/images/drapinto/WhatsApp Image 2026-11-18 at 21.07.53.jpeg"
                  alt="Dra. Eimy Pinto realizando consulta médica con medición de presión arterial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Process steps badge */}
              <div className="mt-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm lg:absolute lg:-right-3 lg:-bottom-3 lg:mt-0 lg:border-2 lg:border-[#1E3A5F] lg:bg-white lg:px-5 lg:py-4 lg:shadow-xl">
                <p className="mb-2 text-xs font-semibold text-white lg:text-sm lg:text-[#1E3A5F]">
                  {process.title}
                </p>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {process.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#38BDF8] text-[10px] font-bold text-white lg:h-6 lg:w-6 lg:text-xs">
                        {index + 1}
                      </span>
                      <span className="text-xs font-medium text-white/90 lg:text-[#1E3A5F]">
                        {step}
                      </span>
                      {index < process.steps.length - 1 && (
                        <Icons.arrowRight className="h-2.5 w-2.5 text-[#38BDF8] lg:h-3 lg:w-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Servicios y credenciales */}
          <div className="flex flex-col">
            {/* Credential badge */}
            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={100}
              duration={500}
              easing="spring"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                <Award className="h-5 w-5 text-[#38BDF8]" />
                <span className="text-sm font-medium text-white">
                  {t("cardiometabolic.credential")}
                </span>
              </div>
            </AnimateOnScroll>

            {/* Services list */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={150}
              duration={500}
              easing="smooth"
            >
              <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
                Servicios incluidos
              </h3>
              <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2.5">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Activity className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                    <span className="text-sm leading-snug text-white/80">{service}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-4 text-sm font-medium text-white/80 sm:text-base">
                  {t("cardiometabolic.ctaPreText")}
                </p>
                <a
                  href={getWhatsAppLink("cardiometabolic")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("cardiometabolic.cta")}
                  </Button>
                </a>
                <ButtonMicrocopy className="text-white/60 lg:text-left">
                  {t("cardiometabolic.ctaMicrocopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
