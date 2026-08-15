"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Button,
  Icons,
  AnimateOnScroll,
  Container,
} from "@/components/ui";
import { Building2, BadgeCheck, UserRound } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-[#F8FAFC] pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#38BDF8]/[0.03] blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-[#1E3A5F]/[0.02] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 pb-8 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          {/* Content - Left side */}
          <div className="order-1 lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <AnimateOnScroll
              animation="fade-in"
              mobileAnimation="fade-in"
              delay={0}
              duration={500}
              easing="smooth"
            >
              <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#38BDF8] uppercase sm:mb-5 sm:text-xs">
                {t("hero.badge")}
              </p>
            </AnimateOnScroll>

            {/* Headline */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={100}
              duration={700}
              easing="smooth"
            >
              <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#1E3A5F]">
                {t("hero.title")}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#1E3A5F]/70 sm:mt-5 sm:text-lg">
                {t("hero.subtitle")}
              </p>
            </AnimateOnScroll>

            {/* Pre-CTA text */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={250}
              duration={600}
              easing="smooth"
            >
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#1E3A5F]/60 sm:mt-5 sm:text-base">
                {t("hero.ctaPreText")}
              </p>
            </AnimateOnScroll>

            {/* CTAs */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={600}
              easing="smooth"
            >
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" className="w-full sm:w-auto">
                    <Icons.whatsapp />
                    {t("hero.primaryCta")}
                  </Button>
                </a>
                <a href="#servicios">
                  <Button variant="ghost" className="group w-full sm:w-auto">
                    {t("hero.secondaryCta")}
                    <Icons.arrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image - Right side */}
          <div className="relative order-2 lg:col-span-6 xl:col-span-7">
            <AnimateOnScroll
              animation="fade-in"
              mobileAnimation="scale"
              delay={200}
              duration={800}
              easing="smooth"
            >
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:mr-0 lg:ml-auto lg:max-w-none">
                {/* Decorative celeste element behind */}
                <div className="absolute -right-4 top-8 h-[85%] w-[85%] rounded-[2rem] bg-gradient-to-br from-[#38BDF8]/10 to-[#38BDF8]/5 sm:-right-6 sm:top-10 lg:-right-8 lg:rounded-[2.5rem]" />

                {/* Main image container */}
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                  <Image
                    src="/images/services/breath1.webp"
                    alt="Rehabilitación cardiopulmonar - Dra. Eimy Pinto"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Trust bar */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-in"
          delay={600}
          duration={500}
          easing="smooth"
        >
          <div className="mt-8 border-t border-[#E5E7EB]/60 pt-6 sm:mt-12 sm:pt-8 lg:mt-0 lg:border-t-0 lg:pt-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#1E3A5F]/60 sm:gap-x-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <UserRound className="h-4 w-4 text-[#38BDF8]" />
                <span>{t("hero.trustBadge1")}</span>
              </div>
              <div className="hidden h-4 w-px bg-[#E5E7EB] sm:block" />
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#38BDF8]" />
                <span>{t("hero.trustBadge2")}</span>
              </div>
              <div className="hidden h-4 w-px bg-[#E5E7EB] sm:block" />
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#38BDF8]" />
                <span>{t("hero.trustBadge3")}</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
