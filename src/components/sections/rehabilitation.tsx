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
      className="overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white py-12 sm:py-14 lg:py-16"
    >
      <Container>
        {/* LEVEL 1 - Introduction (centered, wider) */}
        <AnimateOnScroll
          animation="blur-in"
          mobileAnimation="fade-in"
          duration={600}
          easing="smooth"
        >
          <div className="mx-auto mb-8 max-w-[900px] text-center sm:mb-10 lg:mb-12 lg:text-left">
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:mb-3 sm:text-sm">
              {t("rehabilitation.badge")}
            </p>
            <h2 className="mb-4 text-[clamp(1.75rem,3.7vw,2.75rem)] font-bold leading-[1.1] text-[#1E3A5F] sm:mb-5">
              {t("rehabilitation.title")}
            </h2>
            <p className="mb-3 text-base leading-relaxed text-[#1E3A5F]/80 sm:text-lg lg:leading-[1.6]">
              {t("rehabilitation.subtitle")}
            </p>
            <p className="text-sm leading-relaxed text-[#1E3A5F]/70 sm:text-base lg:leading-[1.6]">
              {t("rehabilitation.intro")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* LEVEL 2 - Image + Benefits (2 columns on desktop) */}
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: Image */}
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

          {/* Right: Benefits grid + CTA */}
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
                    staggerDelay={60}
                    duration={400}
                    easing="spring"
                  >
                    <div className="group rounded-xl border border-[#38BDF8]/15 bg-white p-4 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md sm:rounded-[18px] sm:p-5 lg:p-[22px]">
                      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-white sm:mb-3 sm:h-10 sm:w-10">
                        <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.8} />
                      </div>
                      <h4 className="mb-1 text-[15px] font-semibold leading-tight text-[#1E3A5F] sm:text-base">
                        {benefit.title}
                      </h4>
                      <p className="text-[13px] leading-snug text-[#1E3A5F]/70 sm:text-sm sm:leading-relaxed">
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
              delay={200}
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
