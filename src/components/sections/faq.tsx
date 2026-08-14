"use client";

import { useState } from "react";
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
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      className="bg-white"
    >
      <Container size="narrow">
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("faq.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("faq.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E3A5F]/70">
              {t("faq.subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {items.map((item, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              mobileAnimation="fade-in"
              staggerIndex={index}
              staggerDelay={50}
              duration={400}
              easing="smooth"
            >
              <div
                className={cn(
                  "rounded-xl border transition-all duration-300",
                  openIndex === index
                    ? "border-[#38BDF8] bg-[#38BDF8]/5 shadow-md"
                    : "border-[#38BDF8]/20 bg-white hover:border-[#38BDF8]/40"
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-[#1E3A5F]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-[#38BDF8] transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-5 pb-5">
                    <p className="text-[#1E3A5F]/70">{item.answer}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
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
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <Icons.whatsapp />
                {t("faq.cta")}
              </Button>
            </a>
          </ButtonGroup>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
