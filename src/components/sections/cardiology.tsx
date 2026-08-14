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
} from "@/components/ui";
import { Activity, HeartPulse, Timer, Home, Stethoscope } from "lucide-react";

const studyIcons = [Activity, HeartPulse, Timer, Home, Stethoscope];

export function Cardiology() {
  const { t } = useTranslation();
  const studies = t("cardiology.studies", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    cta: string;
  }>;

  return (
    <Section
      id="cardiologia"
      className="bg-gradient-to-b from-white to-[#F5F5F5]"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("cardiology.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("cardiology.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E3A5F]/70">
              {t("cardiology.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Cards container - 3+2 centered layout */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {studies.map((study, index) => {
            const Icon = studyIcons[index];

            return (
              <AnimateOnScroll
                key={study.id}
                animation="scale-up"
                mobileAnimation="fade-up"
                staggerIndex={index}
                staggerDelay={100}
                duration={600}
                easing="spring"
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[360px]"
              >
                <div className="group flex h-full flex-col rounded-2xl border-2 border-[#38BDF8]/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/60 hover:shadow-lg">
                  {/* Icon area */}
                  <div className="relative h-36 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#38BDF8]/8 to-[#38BDF8]/3">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                        <Icon className="h-8 w-8 text-[#38BDF8]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-lg font-bold text-[#1E3A5F] transition-colors duration-300 group-hover:text-[#38BDF8]">
                      {study.title}
                    </h3>
                    <p className="mb-5 flex-grow text-sm leading-relaxed text-[#1E3A5F]/70">
                      {study.description}
                    </p>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] transition-all duration-300 hover:gap-3"
                    >
                      {study.cta}
                      <Icons.arrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-up"
          delay={400}
          duration={500}
          easing="smooth"
        >
          <ButtonGroup className="mt-8 sm:mt-12 flex flex-col items-center text-center">
            <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
              {t("cardiology.ctaPreText")}
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <Icons.whatsapp />
                {t("cardiology.cta")}
              </Button>
            </a>
          </ButtonGroup>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
