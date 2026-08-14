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
  StarRating,
} from "@/components/ui";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { t } = useTranslation();
  const placeholder = t("testimonials.placeholder", { returnObjects: true }) as {
    text: string;
    name: string;
    role: string;
  };

  // Placeholder testimonials - will be replaced with real ones
  const placeholderTestimonials = [
    {
      text: placeholder.text,
      name: placeholder.name,
      role: placeholder.role,
      rating: 5,
    },
    {
      text: placeholder.text,
      name: placeholder.name,
      role: placeholder.role,
      rating: 5,
    },
    {
      text: placeholder.text,
      name: placeholder.name,
      role: placeholder.role,
      rating: 5,
    },
  ];

  return (
    <Section
      id="testimonios"
      className="bg-gradient-to-b from-[#F5F5F5] to-white"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
              {t("testimonials.badge")}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
              {t("testimonials.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E3A5F]/70">
              {t("testimonials.subtitle")}
            </p>
            {/* Note about pending testimonials */}
            <p className="mx-auto mt-4 max-w-md text-sm text-[#38BDF8]/70 italic">
              {t("testimonials.note")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {placeholderTestimonials.map((testimonial, index) => (
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
              <div className="group flex h-full flex-col rounded-2xl border border-[#38BDF8]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#38BDF8] hover:shadow-lg">
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-[#38BDF8]/30" />

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Text */}
                <p className="mb-6 flex-grow text-[#1E3A5F]/70 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#38BDF8]/10">
                    <Icons.user className="h-5 w-5 text-[#38BDF8]/50" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#1E3A5F]/60">
                      {testimonial.role}
                    </p>
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
            <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
              {t("testimonials.ctaPreText")}
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <Icons.whatsapp />
                {t("testimonials.cta")}
              </Button>
            </a>
          </ButtonGroup>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
