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
import { Activity, HeartPulse, Timer, Home } from "lucide-react";

const studyIcons = [Activity, HeartPulse, Timer, Home];

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {studies.map((study, index) => {
            const Icon = studyIcons[index];
            const imagePlaceholders = [
              "ECG_IMAGE",
              "HOLTER_IMAGE",
              "MAPA_IMAGE",
              "CARDIOLOGIA_NO_INVASIVA_IMAGE",
            ];

            return (
              <AnimateOnScroll
                key={study.id}
                animation="scale-up"
                mobileAnimation="fade-up"
                staggerIndex={index}
                staggerDelay={100}
                duration={600}
                easing="spring"
                className="h-full"
              >
                <div className="group flex h-full flex-col rounded-2xl border border-[#38BDF8]/30 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8] hover:shadow-xl">
                  {/* Image placeholder */}
                  <div className="relative h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#F5F5F5] to-[#E5E7EB]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <Icon className="h-12 w-12 text-[#38BDF8]/30 mb-2" />
                      <p className="text-xs text-[#1E3A5F]/40">
                        {imagePlaceholders[index]}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-lg font-bold text-[#1E3A5F] transition-colors duration-300 group-hover:text-[#38BDF8]">
                      {study.title}
                    </h3>
                    <p className="mb-4 flex-grow text-sm text-[#1E3A5F]/70">
                      {study.description}
                    </p>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] transition-all duration-300 group-hover:gap-3"
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
          <ButtonGroup className="mt-12 flex flex-col items-center text-center">
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
