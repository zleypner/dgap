"use client";

import Image from "next/image";
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
import { TrendingUp, CheckCircle } from "lucide-react";

export function Cardiometabolic() {
  const { t } = useTranslation();
  const process = t("cardiometabolic.process", { returnObjects: true }) as {
    title: string;
    steps: string[];
  };
  const services = t("cardiometabolic.services", { returnObjects: true }) as string[];

  return (
    <Section
      id="cardiometabolico"
      className="overflow-hidden bg-[#1E3A5F]"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image placeholder */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 shadow-lg">
                <Image
                  src="/images/services/cardiometabolico1.webp"
                  alt="Salud cardiometabólica - Dra. Eimy Pinto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Process steps - Mobile */}
              <div className="mt-4 rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 md:hidden">
                <p className="mb-2 text-xs font-semibold text-white">
                  {process.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {process.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#38BDF8] text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-xs font-medium text-white/90">
                        {step}
                      </span>
                      {index < process.steps.length - 1 && (
                        <Icons.arrowRight className="h-2.5 w-2.5 text-[#38BDF8]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Process steps - Desktop */}
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -right-4 -bottom-4 hidden rounded-2xl border-4 border-[#1E3A5F] bg-white px-6 py-4 shadow-xl md:block">
                  <p className="mb-2 text-sm font-semibold text-[#1E3A5F]">
                    {process.title}
                  </p>
                  <div className="flex gap-3">
                    {process.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#38BDF8] text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="text-xs font-medium text-[#1E3A5F]">
                          {step}
                        </span>
                        {index < process.steps.length - 1 && (
                          <Icons.arrowRight className="h-3 w-3 text-[#38BDF8]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Floating>
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
                {t("cardiometabolic.badge")}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                {t("cardiometabolic.title")}
              </h2>
              <p className="mb-4 text-lg text-white/80">
                {t("cardiometabolic.subtitle")}
              </p>
              <p className="mb-8 text-white/70">
                {t("cardiometabolic.intro")}
              </p>
            </AnimateOnScroll>

            {/* Credential */}
            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="spring"
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                <Icons.checkCircle className="h-5 w-5 text-[#38BDF8]" />
                <span className="text-sm font-medium text-white">
                  {t("cardiometabolic.credential")}
                </span>
              </div>
            </AnimateOnScroll>

            {/* Services list */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={300}
              duration={500}
              easing="smooth"
            >
              <div className="mb-8 grid gap-2 sm:gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                    <span className="text-sm text-white/80">{service}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="flex flex-col items-center text-center">
                <p className="mb-6 text-base font-medium text-white/80">
                  {t("cardiometabolic.ctaPreText")}
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("cardiometabolic.cta")}
                  </Button>
                </a>
                <ButtonMicrocopy className="text-white/60">
                  {t("cardiometabolic.ctaMicrocopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
