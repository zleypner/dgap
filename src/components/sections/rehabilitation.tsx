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
  Heart,
  Activity,
  Shield,
  Clock,
  CheckCircle,
  Dumbbell,
  Brain,
  TrendingUp,
} from "lucide-react";

const benefitIcons = [TrendingUp, Dumbbell, Shield, Activity, Brain, Heart];

export function Rehabilitation() {
  const { t } = useTranslation();

  const programDetails = t("rehabilitation.programDetails", { returnObjects: true }) as {
    title: string;
    items: string[];
  };

  const indications = t("rehabilitation.indications", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    items: string[];
  };

  const benefits = t("rehabilitation.benefits", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const process = t("rehabilitation.process", { returnObjects: true }) as {
    title: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };

  return (
    <Section
      id="rehabilitacion"
      className="overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white py-12 sm:py-16 lg:py-20"
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
              {t("rehabilitation.badge")}
            </p>
            <h2 className="mb-4 text-[clamp(1.625rem,3.7vw,2.75rem)] font-bold leading-[1.1] text-[#1E3A5F] sm:mb-5">
              {t("rehabilitation.title")}
            </h2>
            <p className="mb-4 text-base leading-[1.6] text-[#1E3A5F]/80 sm:text-lg">
              {t("rehabilitation.subtitle")}
            </p>
            <p className="text-sm leading-[1.6] text-[#1E3A5F]/70 sm:text-base">
              {t("rehabilitation.intro")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            SECCIÓN 1 - En qué consiste + Para quién (2 columnas)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-12 grid gap-6 sm:mb-14 lg:mb-16 lg:grid-cols-2 lg:gap-8">
          {/* En qué consiste */}
          <AnimateOnScroll
            animation="fade-up"
            mobileAnimation="fade-in"
            duration={500}
            easing="smooth"
          >
            <div className="h-full rounded-2xl border border-[#38BDF8]/20 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10">
                  <Clock className="h-5 w-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] sm:text-xl">
                  {programDetails.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {programDetails.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                    <span className="text-sm leading-relaxed text-[#1E3A5F]/80 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Para quién está indicado */}
          <AnimateOnScroll
            animation="fade-up"
            mobileAnimation="fade-in"
            delay={100}
            duration={500}
            easing="smooth"
          >
            <div className="h-full rounded-2xl border border-[#38BDF8]/20 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10">
                  <Heart className="h-5 w-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] sm:text-xl">
                  {indications.title}
                </h3>
              </div>
              <p className="mb-3 text-sm font-medium text-[#1E3A5F]/70">
                {indications.subtitle}
              </p>
              <ul className="space-y-2">
                {indications.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                    <span className="text-sm leading-relaxed text-[#1E3A5F]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SECCIÓN 2 - Imagen + Beneficios
        ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-12 grid items-center gap-8 sm:mb-14 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          {/* Imagen de ejercicio */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[1.1/1] lg:rounded-[28px]">
                <Image
                  src="/images/drapinto/exercise-elder.jpeg"
                  alt="Paciente realizando ejercicio de rehabilitación cardiopulmonar en bicicleta estática"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 hidden rounded-xl bg-[#1E3A5F] px-4 py-3 shadow-lg lg:block">
                <p className="text-xs font-semibold text-white">36 sesiones</p>
                <p className="text-[10px] text-white/70">Programa completo</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Beneficios potenciales */}
          <div>
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              duration={500}
              easing="smooth"
            >
              <h3 className="mb-6 text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                Beneficios potenciales
              </h3>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <AnimateOnScroll
                    key={index}
                    animation="scale-up"
                    mobileAnimation="fade-in"
                    staggerIndex={index}
                    staggerDelay={50}
                    duration={400}
                    easing="spring"
                  >
                    <div className="group rounded-xl border border-[#38BDF8]/15 bg-white p-4 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md">
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-colors duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </div>
                      <h4 className="mb-1 text-sm font-semibold text-[#1E3A5F]">
                        {benefit.title}
                      </h4>
                      <p className="text-xs leading-snug text-[#1E3A5F]/70">
                        {benefit.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>

            <AnimateOnScroll
              animation="fade-in"
              delay={300}
              duration={400}
            >
              <p className="mt-4 text-xs italic text-[#1E3A5F]/60">
                {t("rehabilitation.benefitsNote")}
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            SECCIÓN 3 - Proceso de 4 pasos
        ═══════════════════════════════════════════════════════════════ */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-in"
          duration={600}
          easing="smooth"
        >
          <div className="mb-12 rounded-2xl bg-[#1E3A5F] p-6 sm:mb-14 sm:p-8 lg:mb-16 lg:p-10">
            <h3 className="mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl">
              {process.title}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {process.steps.map((step, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="scale-up"
                  mobileAnimation="fade-in"
                  staggerIndex={index}
                  staggerDelay={80}
                  duration={400}
                  easing="spring"
                >
                  <div className="relative flex flex-col items-center text-center">
                    {/* Number badge */}
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#38BDF8] text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
                      {step.number}
                    </div>
                    <h4 className="mb-1 text-sm font-semibold text-white sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-xs text-white/70 sm:text-sm">
                      {step.description}
                    </p>
                    {/* Connector line (hidden on mobile and last item) */}
                    {index < process.steps.length - 1 && (
                      <div className="absolute right-0 top-6 hidden h-0.5 w-full -translate-x-1/2 bg-[#38BDF8]/30 lg:block" style={{ width: '100%', left: '75%' }} />
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            SECCIÓN 4 - Imagen consulta + CTA
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* CTA content */}
          <AnimateOnScroll
            animation="fade-up"
            mobileAnimation="fade-up"
            duration={500}
            easing="smooth"
            className="order-2 lg:order-1"
          >
            <div className="text-center lg:text-left">
              <p className="mb-6 text-base font-medium text-[#1E3A5F]/80 sm:text-lg">
                {t("rehabilitation.ctaPreText")}
              </p>
              <ButtonGroup className="flex flex-col items-center lg:items-start">
                <a
                  href={getWhatsAppLink("rehabilitation")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="default">
                    <Icons.whatsapp />
                    {t("rehabilitation.cta")}
                  </Button>
                </a>
                <ButtonMicrocopy className="lg:text-left">
                  {t("rehabilitation.ctaMicrocopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </div>
          </AnimateOnScroll>

          {/* Imagen de consulta */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[1.2/1] lg:rounded-[28px]">
              <Image
                src="/images/drapinto/elder-consultation.jpeg"
                alt="Dra. Eimy Pinto supervisando paciente durante sesión de rehabilitación cardiopulmonar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
