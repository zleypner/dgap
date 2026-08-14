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
import { HeartPulse, Shield, TrendingUp, UserCheck } from "lucide-react";

const benefitIcons = [HeartPulse, Shield, TrendingUp, UserCheck];

export function Rehabilitation() {
  const { t } = useTranslation();
  const benefits = t("rehabilitation.benefits", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Section
      id="rehabilitacion"
      className="overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white py-10 sm:py-12 lg:py-14"
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
              {t("rehabilitation.badge")}
            </p>

            {/* Headline - clamp typography */}
            <h2 className="mb-4 text-[clamp(1.625rem,3.7vw,2.5rem)] font-bold leading-[1.1] text-[#1E3A5F] sm:mb-5">
              {t("rehabilitation.title")}
            </h2>

            {/* Subtitle paragraph */}
            <p className="mb-3 text-base leading-[1.6] text-[#1E3A5F]/80 sm:text-lg">
              {t("rehabilitation.subtitle")}
            </p>

            {/* Intro paragraph */}
            <p className="text-sm leading-[1.6] text-[#1E3A5F]/70 sm:text-base">
              {t("rehabilitation.intro")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            LEVEL 2 — Image + Benefits (2 columns 50/50)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8">

          {/* LEFT: Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
            className="order-first"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[1.15/1] lg:rounded-[28px]">
              <Image
                src="/images/services/terapiapulmonar.webp"
                alt="Rehabilitación cardiopulmonar - Dra. Eimy Pinto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          {/* RIGHT: Benefits grid + CTA */}
          <div className="flex flex-col">
            {/* Benefits 2x2 grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
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
                    <div className="group rounded-[18px] border border-[#38BDF8]/15 bg-white p-5 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md lg:p-[22px]">
                      {/* Icon */}
                      <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-colors duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </div>
                      {/* Title */}
                      <h4 className="mb-1 text-[15px] font-semibold leading-tight text-[#1E3A5F]">
                        {benefit.title}
                      </h4>
                      {/* Description - max 2-3 lines */}
                      <p className="text-[13px] leading-snug text-[#1E3A5F]/70 line-clamp-3">
                        {benefit.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>

            {/* CTA below benefits grid */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={150}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-5 flex flex-col items-center text-center sm:mt-6 lg:items-start lg:text-left">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("rehabilitation.cta")}
                  </Button>
                </a>
                <ButtonMicrocopy className="lg:text-left">
                  {t("rehabilitation.ctaMicrocopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
