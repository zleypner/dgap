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
import { HeartHandshake, MessageCircle, Clock, UserCheck } from "lucide-react";

const featureIcons = [HeartHandshake, MessageCircle, Clock, UserCheck];

export function Trust() {
  const { t } = useTranslation();
  const features = t("trust.features", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Section id="por-que" className="overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image - appears below content on mobile */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
            className="order-last lg:order-first"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg transition-shadow duration-500 hover:shadow-xl sm:rounded-2xl">
              <Image
                src={siteConfig.images.consultation}
                alt="Dra. Eimy Pinto en consulta con paciente"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div>
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <p className="mb-2 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:mb-3 sm:text-sm">
                {t("trust.badge")}
              </p>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-[#1E3A5F] sm:mb-4 sm:text-3xl md:text-4xl">
                {t("trust.title")}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#1E3A5F]/70 sm:mb-8 sm:text-base md:text-lg">
                {t("trust.subtitle")}
              </p>
            </AnimateOnScroll>

            {/* Features grid - horizontal layout on mobile */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <AnimateOnScroll
                    key={index}
                    animation="scale-up"
                    mobileAnimation="fade-in"
                    staggerIndex={index}
                    staggerDelay={80}
                    duration={500}
                    easing="spring"
                  >
                    <div className="group flex items-start gap-3 rounded-lg bg-[#F9FAFB] p-3 transition-all duration-300 hover:bg-[#38BDF8]/5 active:scale-[0.98] sm:rounded-xl sm:p-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#38BDF8]/10 transition-all duration-300 group-hover:bg-[#38BDF8] sm:h-10 sm:w-10">
                        <Icon className="h-4 w-4 text-[#38BDF8] transition-colors group-hover:text-white sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold leading-tight text-[#1E3A5F] sm:text-base">
                          {feature.title}
                        </h3>
                        <p className="mt-0.5 text-xs leading-snug text-[#1E3A5F]/70 sm:mt-1 sm:text-sm">
                          {feature.description}
                        </p>
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
              delay={300}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-6 flex flex-col items-center text-center sm:mt-8">
                <p className="mb-4 text-sm font-medium text-[#1E3A5F]/80 sm:mb-5 sm:text-base">
                  {t("trust.ctaPreText")}
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("trust.cta")}
                  </Button>
                </a>
                <ButtonMicrocopy align="center">
                  {t("trust.ctaMicrocopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
