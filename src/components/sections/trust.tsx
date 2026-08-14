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
    <Section id="por-que" className="overflow-hidden bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image placeholder collage */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F5F5] to-[#E5E7EB] shadow-lg transition-shadow duration-500 hover:shadow-xl">
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
              <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("trust.badge")}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                {t("trust.title")}
              </h2>
              <p className="mb-10 text-lg text-[#1E3A5F]/70">
                {t("trust.subtitle")}
              </p>
            </AnimateOnScroll>

            {/* Features grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <AnimateOnScroll
                    key={index}
                    animation="scale-up"
                    mobileAnimation="fade-in"
                    staggerIndex={index}
                    staggerDelay={120}
                    duration={500}
                    easing="spring"
                  >
                    <div className="group -m-3 flex cursor-pointer gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-[#F5F5F5] active:scale-[0.98]">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#38BDF8]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#38BDF8]">
                        <Icon className="h-5 w-5 text-[#38BDF8] transition-colors group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-[#1E3A5F]">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[#1E3A5F]/70">
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
              <ButtonGroup className="mt-8 text-center">
                <p className="mb-6 text-center text-base font-medium text-[#1E3A5F]/80">
                  {t("trust.ctaPreText")}
                </p>
                <div className="flex justify-center">
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
                </div>
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
