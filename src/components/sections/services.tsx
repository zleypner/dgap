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
import { Stethoscope, Shield, HeartPulse, FileText, Users } from "lucide-react";

const categoryIcons = [Stethoscope, Shield, HeartPulse, FileText, Users];

export function Services() {
  const { t } = useTranslation();
  const categories = t("services.categories", { returnObjects: true }) as Array<{
    title: string;
    items: string[];
  }>;

  return (
    <Section
      id="servicios"
      className="bg-gradient-to-b from-white to-[#F5F5F5]"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("services.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("services.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E3A5F]/70">
              {t("services.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
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
                <div className="group h-full rounded-2xl border border-[#38BDF8]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#38BDF8] hover:shadow-lg">
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E3A5F]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-[#1E3A5F]/70"
                      >
                        <Icons.check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              {t("services.ctaPreText")}
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <Icons.whatsapp />
                {t("services.cta")}
              </Button>
            </a>
          </ButtonGroup>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
