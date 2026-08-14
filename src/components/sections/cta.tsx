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

export function CTA() {
  const { t } = useTranslation();

  return (
    <Section
      id="cta"
      className="overflow-hidden bg-[#1E3A5F]"
    >
      <Container>
        <div className="relative py-8 md:py-12">
          {/* Decorative elements */}
          <Floating amplitude={10} duration={6} delay={0}>
            <div className="absolute -left-20 -top-20 hidden h-40 w-40 rounded-full bg-[#38BDF8]/10 blur-3xl lg:block" />
          </Floating>
          <Floating amplitude={8} duration={5} delay={0.5}>
            <div className="absolute -right-20 -bottom-20 hidden h-48 w-48 rounded-full bg-[#38BDF8]/10 blur-3xl lg:block" />
          </Floating>

          {/* Content */}
          <div className="relative mx-auto max-w-2xl text-center">
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mb-10 text-lg text-white/80">
                {t("cta.description")}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="spring"
            >
              <ButtonGroup className="flex flex-col items-center">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp">
                      <Icons.whatsapp />
                      {t("cta.primaryCta")}
                    </Button>
                  </a>
                  <a href="#servicios">
                    <Button
                      variant="outline"
                      className="bg-white text-[#1E3A5F] border-white hover:bg-white/90"
                    >
                      {t("cta.secondaryCta")}
                    </Button>
                  </a>
                </div>
                <ButtonMicrocopy className="text-white/60">
                  {t("cta.microcopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
