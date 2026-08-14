"use client";

import { useTranslation } from "react-i18next";
import {
  Section,
  Container,
  AnimateOnScroll,
  Icons,
} from "@/components/ui";
import { HeartPulse, TrendingUp, Activity } from "lucide-react";

const pillarIcons = [HeartPulse, TrendingUp, Activity];

export function Pillars() {
  const { t } = useTranslation();
  const pillars = t("pillars.items", { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
    cta: string;
  }>;

  const pillarLinks = ["#rehabilitacion", "#cardiometabolico", "#cardiologia"];

  return (
    <Section id="pilares" className="bg-gradient-to-b from-[#F5F5F5] to-white py-12 sm:py-16 md:py-20">
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-8 text-center sm:mb-12 md:mb-16">
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:mb-3 sm:text-sm">
              {t("pillars.badge")}
            </p>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#1E3A5F] sm:mb-4 sm:text-3xl md:text-4xl">
              {t("pillars.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#1E3A5F]/70 sm:text-base md:text-lg">
              {t("pillars.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <AnimateOnScroll
                key={index}
                animation="scale-up"
                mobileAnimation="fade-up"
                staggerIndex={index}
                staggerDelay={100}
                duration={600}
                easing="spring"
                className="h-full"
              >
                <a
                  href={pillarLinks[index]}
                  className="group relative flex h-full flex-col rounded-xl border-2 border-[#38BDF8] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] sm:rounded-2xl sm:p-6 md:p-8 md:hover:-translate-y-2"
                >
                  {/* Header: Number + Icon + Title inline on mobile */}
                  <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:flex-col sm:items-start sm:gap-0">
                    <div className="flex items-center gap-2 sm:mb-4 sm:gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#38BDF8] text-sm font-bold text-white shadow-sm transition-all duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-xl sm:text-base md:h-12 md:w-12">
                        {pillar.number}
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Title - inline on mobile */}
                    <h3 className="flex-1 text-base font-bold leading-tight text-[#1E3A5F] transition-colors duration-300 group-hover:text-[#38BDF8] sm:text-lg md:text-xl">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-3 flex-grow text-sm leading-relaxed text-[#1E3A5F]/70 sm:mb-5 sm:text-base">
                    {pillar.description}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] transition-all duration-300 group-hover:gap-3">
                    {pillar.cta}
                    <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
