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
import { GraduationCap, Award, Languages } from "lucide-react";

export function About() {
  const { t } = useTranslation();
  const education = t("about.education", { returnObjects: true }) as {
    title: string;
    degree: string;
    university: string;
    period: string;
  };
  const specialty = t("about.specialty", { returnObjects: true }) as {
    title: string;
    items: string[];
  };
  const college = t("about.college", { returnObjects: true }) as {
    title: string;
    code: string;
    status: string;
    type: string;
  };
  const languages = t("about.languages", { returnObjects: true }) as string[];
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <Section
      id="sobre"
      className="overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      <Container>
        {/* ═══════════════════════════════════════════════════════════════
            LEVEL 1 — Introduction (wider, horizontal layout)
        ═══════════════════════════════════════════════════════════════ */}
        <AnimateOnScroll
          animation="blur-in"
          mobileAnimation="fade-in"
          duration={600}
          easing="smooth"
        >
          <div className="mx-auto mb-8 max-w-[950px] sm:mb-10 lg:mb-12">
            {/* Badge */}
            <p className="mb-2 text-xs font-semibold tracking-widest text-[#38BDF8] uppercase sm:text-sm lg:mb-3">
              {t("about.badge")}
            </p>

            {/* Name - clamp typography */}
            <h2 className="mb-2 text-[clamp(1.625rem,3.7vw,2.5rem)] font-bold leading-[1.1] text-[#1E3A5F] sm:mb-3">
              {t("about.name")}
            </h2>

            {/* Tagline */}
            <p className="mb-3 text-lg font-medium text-[#38BDF8] sm:text-xl">
              {t("about.tagline")}
            </p>

            {/* Credentials summary */}
            <p className="mb-5 text-sm text-[#1E3A5F]/60 sm:mb-6">
              {t("about.credentials")}
            </p>

            {/* Intro paragraph */}
            <p className="mb-3 text-base font-medium leading-[1.6] text-[#1E3A5F]/80 sm:text-lg">
              {t("about.intro")}
            </p>

            {/* Additional paragraphs */}
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-3 text-sm leading-[1.6] text-[#1E3A5F]/70 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimateOnScroll>

        {/* ═══════════════════════════════════════════════════════════════
            LEVEL 2 — Image + Quote/Credentials/CTA (2 columns 50/50)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8">

          {/* LEFT: Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
            className="order-first"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-[1.15/1] lg:rounded-[28px]">
                <Image
                  src={siteConfig.images.about}
                  alt="Dra. Eimy Stephany Pinto Arita"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Credentials floating card */}
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -right-3 -bottom-3 hidden rounded-xl border-4 border-white bg-[#1E3A5F] px-4 py-3 shadow-xl md:block lg:-right-4 lg:-bottom-4">
                  <p className="text-[10px] font-medium text-[#38BDF8] uppercase tracking-wider">
                    {college.title}
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white lg:text-lg">
                    {college.code}
                  </p>
                  <p className="text-xs text-white/70">
                    {college.type} • {college.status}
                  </p>
                </div>
              </Floating>
            </div>
          </AnimateOnScroll>

          {/* RIGHT: Quote + Credentials grid + CTA */}
          <div className="flex flex-col">
            {/* Quote */}
            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={50}
              duration={500}
              easing="spring"
            >
              <blockquote className="mb-5 border-l-4 border-[#38BDF8] pl-4 italic sm:mb-6">
                <p className="text-base text-[#1E3A5F]/80 sm:text-lg">
                  &ldquo;{t("about.quote")}&rdquo;
                </p>
                <cite className="mt-1.5 block text-sm text-[#1E3A5F]/60 not-italic">
                  {t("about.quoteAttribution")}
                </cite>
              </blockquote>
            </AnimateOnScroll>

            {/* Credentials 2x2 grid - compact */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {/* Education */}
              <AnimateOnScroll
                animation="scale-up"
                mobileAnimation="fade-in"
                staggerIndex={0}
                staggerDelay={50}
                duration={400}
                easing="spring"
              >
                <div className="group rounded-[18px] border border-[#38BDF8]/15 bg-[#F9FAFB] p-4 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md lg:p-5">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-colors duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                    <GraduationCap className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                    {education.title}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold leading-tight text-[#1E3A5F]">
                    {education.degree}
                  </p>
                  <p className="text-[12px] text-[#1E3A5F]/60 line-clamp-2">
                    {education.university}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Specialty */}
              <AnimateOnScroll
                animation="scale-up"
                mobileAnimation="fade-in"
                staggerIndex={1}
                staggerDelay={50}
                duration={400}
                easing="spring"
              >
                <div className="group rounded-[18px] border border-[#38BDF8]/15 bg-[#F9FAFB] p-4 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md lg:p-5">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-colors duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                    <Award className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                    {specialty.title}
                  </p>
                  {specialty.items.slice(0, 2).map((item, index) => (
                    <p key={index} className="mt-1 text-[13px] leading-snug text-[#1E3A5F]/70 line-clamp-1">
                      • {item}
                    </p>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Languages */}
              <AnimateOnScroll
                animation="scale-up"
                mobileAnimation="fade-in"
                staggerIndex={2}
                staggerDelay={50}
                duration={400}
                easing="spring"
              >
                <div className="group rounded-[18px] border border-[#38BDF8]/15 bg-[#F9FAFB] p-4 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md lg:p-5">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] transition-colors duration-300 group-hover:bg-[#38BDF8] group-hover:text-white">
                    <Languages className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                    {t("about.languagesLabel")}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold leading-tight text-[#1E3A5F]">
                    {languages.join(" • ")}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* College - mobile only */}
              <AnimateOnScroll
                animation="scale-up"
                mobileAnimation="fade-in"
                staggerIndex={3}
                staggerDelay={50}
                duration={400}
                easing="spring"
                className="md:hidden"
              >
                <div className="group rounded-[18px] border border-[#38BDF8]/15 bg-[#F9FAFB] p-4 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-md">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                    {t("about.collegeLabel")}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold leading-tight text-[#1E3A5F]">
                    {college.code}
                  </p>
                  <p className="text-[12px] text-[#1E3A5F]/60">
                    {college.type} • {college.status}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* CTA below credentials grid */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={150}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="mt-5 flex flex-col items-center text-center sm:mt-6 lg:items-start lg:text-left">
                <p className="mb-4 text-sm font-medium text-[#1E3A5F]/70">
                  {t("about.ctaPreText")}
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("about.cta")}
                  </Button>
                </a>
                <ButtonMicrocopy className="lg:text-left">
                  {t("about.ctaMicrocopy")}
                </ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
