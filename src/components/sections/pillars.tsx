"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  AnimateOnScroll,
  Button,
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
    <Section id="pilares" className="bg-gradient-to-b from-[#F5F5F5] to-white">
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("pillars.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("pillars.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E3A5F]/70">
              {t("pillars.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <AnimateOnScroll
                key={index}
                animation="scale-up"
                mobileAnimation="fade-up"
                staggerIndex={index}
                staggerDelay={150}
                duration={600}
                easing="spring"
                className="h-full"
              >
                <div className="group relative flex h-full flex-col rounded-2xl border-2 border-[#38BDF8] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Number badge */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8] text-lg font-bold text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    {pillar.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold text-[#1E3A5F] transition-colors duration-300 group-hover:text-[#38BDF8]">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-grow text-[#1E3A5F]/70">
                    {pillar.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={pillarLinks[index]}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] transition-all duration-300 group-hover:gap-3"
                  >
                    {pillar.cta}
                    <Icons.arrowRight className="h-4 w-4" />
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
