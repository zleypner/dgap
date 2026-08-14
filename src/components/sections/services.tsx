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
import { Stethoscope, Shield, HeartPulse, FileText, Users, Check } from "lucide-react";

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
      className="bg-gradient-to-b from-white to-[#F5F5F5] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-10 text-center sm:mb-12 lg:mb-14">
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:mb-3 sm:text-sm">
              {t("services.badge")}
            </p>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#1E3A5F] sm:mb-4 sm:text-3xl md:text-4xl">
              {t("services.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#1E3A5F]/70 sm:text-base lg:text-lg">
              {t("services.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid: 2 columns on desktop, first row has 2 larger cards, second row has 2, third row has 1 centered */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
            // Last item (Other Services) - spans full width on large screens
            const isLastItem = index === categories.length - 1;

            return (
              <AnimateOnScroll
                key={index}
                animation="scale-up"
                mobileAnimation="fade-up"
                staggerIndex={index}
                staggerDelay={80}
                duration={500}
                easing="spring"
                className={isLastItem ? "lg:col-span-2 lg:max-w-[50%] lg:mx-auto" : ""}
              >
                <div className="group h-full rounded-2xl border border-[#38BDF8]/20 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#38BDF8]/50 hover:shadow-lg sm:rounded-[24px] sm:p-6 lg:p-7">
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3 sm:mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#38BDF8] text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E3A5F] sm:text-xl">
                      {category.title}
                    </h3>
                  </div>

                  {/* Items list */}
                  <ul className="space-y-2 sm:space-y-2.5">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2.5 text-[#1E3A5F]/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" strokeWidth={2.5} />
                        <span className="text-sm leading-snug sm:text-[15px]">{item}</span>
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
          delay={300}
          duration={500}
          easing="smooth"
        >
          <ButtonGroup className="mt-8 flex flex-col items-center text-center sm:mt-10 lg:mt-12">
            <p className="mb-4 text-sm font-medium text-[#1E3A5F]/80 sm:mb-5 sm:text-base">
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
