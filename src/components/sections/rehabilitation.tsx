"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Floating,
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
                    <div className="group rounded-xl border border-[#38BDF8]/20 bg-white p-4 transition-all duration-300 hover:border-[#38BDF8] hover:shadow-md">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                        <Icon className="h-5 w-5" />
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
              <ButtonGroup className="mt-8">
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
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#38BDF8]/5 shadow-lg">
                {/* REHABILITACION_CARDIOPULMONAR_IMAGE placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Icons.heartPulse className="h-20 w-20 text-[#38BDF8]/30 mb-4" />
                  <p className="text-sm font-medium text-[#1E3A5F]/40">
                    REHABILITACION_CARDIOPULMONAR_IMAGE
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <Floating amplitude={8} duration={5} delay={0}>
                <div className="absolute -top-4 -left-4 hidden h-20 w-20 rounded-2xl bg-[#38BDF8]/10 lg:block" />
              </Floating>
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -bottom-4 -right-4 hidden h-16 w-16 rounded-xl bg-[#1E3A5F] lg:block" />
              </Floating>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
