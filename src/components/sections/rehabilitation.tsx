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
      className="overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("rehabilitation.badge")}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                {t("rehabilitation.title")}
              </h2>
              <p className="mb-4 text-lg font-medium text-[#1E3A5F]/80">
                {t("rehabilitation.subtitle")}
              </p>
              <p className="mb-8 text-[#1E3A5F]/70">
                {t("rehabilitation.intro")}
              </p>
            </AnimateOnScroll>

            {/* Benefits grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <AnimateOnScroll
                    key={index}
                    animation="scale-up"
                    mobileAnimation="fade-in"
                    staggerIndex={index}
                    staggerDelay={100}
                    duration={500}
                    easing="spring"
                  >
                    <div className="group rounded-xl border border-[#38BDF8]/20 bg-white p-3 sm:p-4 transition-all duration-300 hover:border-[#38BDF8] hover:shadow-md">
                      <div className="mb-2 sm:mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h4 className="mb-1 font-semibold text-[#1E3A5F]">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[#1E3A5F]/70">
                        {benefit.description}
                      </p>
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
              <ButtonGroup className="mt-6 sm:mt-8 flex flex-col items-center text-center">
                <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
                  {t("rehabilitation.ctaPreText")}
                </p>
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
                <ButtonMicrocopy>{t("rehabilitation.ctaMicrocopy")}</ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>

          {/* Image placeholder */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#38BDF8]/5 shadow-lg">
                <Image
                  src="/images/services/terapiapulmonar.webp"
                  alt="Rehabilitación cardiopulmonar - Dra. Eimy Pinto"
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
