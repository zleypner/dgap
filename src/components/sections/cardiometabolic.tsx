"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Button,
  ButtonMicrocopy,
  ButtonGroup,
} from "@/components/ui";
import { CheckCircle } from "lucide-react";

export function Cardiometabolic() {
  const { t } = useTranslation();
  const process = t("cardiometabolic.process", { returnObjects: true }) as {
    title: string;
    steps: string[];
  };
  const services = t("cardiometabolic.services", { returnObjects: true }) as string[];

  return (
    <Section
      id="cardiometabolico"
      className="overflow-hidden bg-[#1E3A5F] py-10 sm:py-12 lg:py-14"
    >
      <Container>
        {/* ═══════════════════════════════════════════════════════════════
            LEVEL 1 — Introduction (wider, horizontal layout)
        ═══════════════════════════════════════════════════════════════ */}
        <AnimateOnScroll
          animation="blur-in"
          mobileAnimation="fade-in"
          duration={600}
          easing="smooth"
        >
          <div className="mx-auto mb-8 max-w-[950px] sm:mb-10 lg:mb-12">
            {/* Eyebrow */}
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:text-sm lg:mb-3">
              {t("cardiometabolic.badge")}
            </p>

            {/* Headline - clamp typography */}
            <h2 className="mb-4 text-[clamp(1.625rem,3.7vw,2.5rem)] font-bold leading-[1.1] text-white sm:mb-5">
              {t("cardiometabolic.title")}
            </h2>

            {/* Subtitle paragraph */}
            <p className="mb-3 text-base leading-[1.6] text-white/85 sm:text-lg">
              {t("cardiometabolic.subtitle")}
            </p>

            {/* Intro paragraph */}
            <p className="text-sm leading-[1.6] text-white/70 sm:text-base">
              {t("cardiometabolic.intro")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            LEVEL 2 — Image + Services (2 columns 50/50)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8">

          {/* LEFT: Image with process steps */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
            className="order-first"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[1.15/1] lg:rounded-[28px]">
                <Image
                  src="/images/services/cardiometabolico1.webp"
                  alt="Salud cardiometabólica - Dra. Eimy Pinto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Process steps badge */}
              <div className="mt-4 rounded-[18px] border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm lg:absolute lg:-right-3 lg:-bottom-3 lg:mt-0 lg:border-2 lg:border-[#1E3A5F] lg:bg-white lg:px-5 lg:py-4 lg:shadow-xl">
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

          {/* RIGHT: Credential + Services grid + CTA */}
          <div className="flex flex-col">
            {/* Credential badge */}
            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={100}
              duration={500}
              easing="spring"
            >
              <div className="mb-5 inline-flex items-center gap-3 rounded-[18px] bg-white/10 px-4 py-3">
                <Icons.checkCircle className="h-5 w-5 text-[#38BDF8]" />
                <span className="text-sm font-medium text-white">
                  {t("cardiometabolic.credential")}
                </span>
              </div>
            </AnimateOnScroll>

            {/* Services 2-column grid */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={150}
              duration={500}
              easing="smooth"
            >
              <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2.5">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" strokeWidth={2.5} />
                    <span className="text-sm leading-snug text-white/80">{service}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* CTA below services */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-1 flex flex-col items-center text-center sm:mt-2 lg:items-start lg:text-left">
                <p className="mb-4 text-sm font-medium text-white/80 sm:text-base">
                  {t("cardiometabolic.ctaPreText")}
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
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
