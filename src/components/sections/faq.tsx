"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Button,
  ButtonGroup,
} from "@/components/ui";
import { getWhatsAppLink } from "@/lib/utils";
import { ChevronDown, Heart, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
  cta: string;
}

function FAQAccordion({
  items,
  openIndex,
  setOpenIndex,
  startIndex = 0,
}: {
  items: FAQItem[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
  startIndex?: number;
}) {
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const actualIndex = startIndex + index;
        return (
          <AnimateOnScroll
            key={actualIndex}
            animation="fade-up"
            mobileAnimation="fade-in"
            staggerIndex={index}
            staggerDelay={30}
            duration={400}
            easing="smooth"
          >
            <div
              className={cn(
                "rounded-xl border transition-all duration-300",
                openIndex === actualIndex
                  ? "border-[#38BDF8] bg-[#38BDF8]/5 shadow-md"
                  : "border-[#38BDF8]/20 bg-white hover:border-[#38BDF8]/40"
              )}
            >
              <button
                onClick={() => toggleItem(actualIndex)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                aria-expanded={openIndex === actualIndex}
              >
                <span className="text-sm font-semibold text-[#1E3A5F] sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-[#38BDF8] transition-transform duration-300",
                    openIndex === actualIndex && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === actualIndex
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <p className="text-sm leading-relaxed text-[#1E3A5F]/70 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        );
      })}
    </div>
  );
}

export function FAQ() {
  const { t } = useTranslation();

  const rehabilitationSection = t("faq.rehabilitationSection", { returnObjects: true }) as FAQSection;
  const cardiometabolicSection = t("faq.cardiometabolicSection", { returnObjects: true }) as FAQSection;

  const [openRehabIndex, setOpenRehabIndex] = useState<number | null>(0);
  const [openCardioIndex, setOpenCardioIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-gradient-to-b from-white to-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Header */}
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("faq.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("faq.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#1E3A5F]/70 sm:text-lg">
              {t("faq.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Two sections side by side on desktop */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Rehabilitación Cardiopulmonar Section */}
          <div>
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              duration={500}
              easing="smooth"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10">
                  <Heart className="h-5 w-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                  {rehabilitationSection.title}
                </h3>
              </div>
            </AnimateOnScroll>

            <FAQAccordion
              items={rehabilitationSection.items}
              openIndex={openRehabIndex}
              setOpenIndex={setOpenRehabIndex}
              startIndex={0}
            />

            {/* CTA Rehabilitación */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <a
                  href={getWhatsAppLink("rehabilitation")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="default">
                    <Icons.whatsapp />
                    {rehabilitationSection.cta}
                  </Button>
                </a>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>

          {/* Medicina General y Cardiometabólica Section */}
          <div>
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={100}
              duration={500}
              easing="smooth"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10">
                  <Stethoscope className="h-5 w-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                  {cardiometabolicSection.title}
                </h3>
              </div>
            </AnimateOnScroll>

            <FAQAccordion
              items={cardiometabolicSection.items}
              openIndex={openCardioIndex}
              setOpenIndex={setOpenCardioIndex}
              startIndex={100}
            />

            {/* CTA Cardiometabólica */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <a
                  href={getWhatsAppLink("cardiometabolic")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="default">
                    <Icons.whatsapp />
                    {cardiometabolicSection.cta}
                  </Button>
                </a>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>

        {/* General CTA */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-up"
          delay={300}
          duration={500}
          easing="smooth"
        >
          <div className="mt-14 rounded-2xl bg-[#1E3A5F] p-6 text-center sm:mt-16 sm:p-8 lg:p-10">
            <p className="mb-4 text-base font-medium text-white/90 sm:text-lg">
              ¿Tenés más preguntas?
            </p>
            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="default">
                <Icons.whatsapp />
                {t("faq.cta")}
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
