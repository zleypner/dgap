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
import { GraduationCap, Award, Building2, Languages } from "lucide-react";

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
  const certifications = t("about.certifications", { returnObjects: true }) as {
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
      id="sobre-mi"
      className="overflow-hidden bg-white"
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
              {/* Main image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#1E3A5F]/10 shadow-lg">
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
                <div className="absolute -right-4 -bottom-4 hidden rounded-xl border-4 border-white bg-[#1E3A5F] px-5 py-4 shadow-xl md:block">
                  <p className="text-xs font-medium text-[#38BDF8] uppercase tracking-wider">
                    {college.title}
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {college.code}
                  </p>
                  <p className="text-sm text-white/70">
                    {college.type} • {college.status}
                  </p>
                </div>
              </Floating>

              {/* Decorative elements */}
              <Floating amplitude={8} duration={5} delay={0}>
                <div className="absolute -top-4 -left-4 hidden h-20 w-20 rounded-2xl bg-[#38BDF8]/20 lg:block" />
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
                {t("about.badge")}
              </p>
              <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                {t("about.name")}
              </h2>
              <p className="mb-2 text-lg font-medium text-[#38BDF8]">
                {t("about.tagline")}
              </p>
              <p className="mb-6 text-sm text-[#1E3A5F]/60">
                {t("about.credentials")}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={100}
              duration={500}
              easing="smooth"
            >
              <p className="mb-4 text-lg font-medium text-[#1E3A5F]/80">
                {t("about.intro")}
              </p>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-[#1E3A5F]/70">
                  {paragraph}
                </p>
              ))}
            </AnimateOnScroll>

            {/* Quote */}
            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="spring"
            >
              <blockquote className="mb-8 border-l-4 border-[#38BDF8] pl-4 italic">
                <p className="text-lg text-[#1E3A5F]/80">
                  &ldquo;{t("about.quote")}&rdquo;
                </p>
                <cite className="mt-2 block text-sm text-[#1E3A5F]/60 not-italic">
                  {t("about.quoteAttribution")}
                </cite>
              </blockquote>
            </AnimateOnScroll>

            {/* Credentials grid */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={300}
              duration={500}
              easing="smooth"
            >
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {/* Education */}
                <div className="rounded-xl border border-[#38BDF8]/20 bg-[#F5F5F5] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[#38BDF8]">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {education.title}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#1E3A5F]">
                    {education.degree}
                  </p>
                  <p className="text-xs text-[#1E3A5F]/60">
                    {education.university}
                  </p>
                  <p className="text-xs text-[#1E3A5F]/50">
                    {education.period}
                  </p>
                </div>

                {/* Specialty */}
                <div className="rounded-xl border border-[#38BDF8]/20 bg-[#F5F5F5] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[#38BDF8]">
                    <Award className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {specialty.title}
                    </span>
                  </div>
                  {specialty.items.map((item, index) => (
                    <p key={index} className="text-sm text-[#1E3A5F]/70">
                      • {item}
                    </p>
                  ))}
                </div>

                {/* Languages */}
                <div className="rounded-xl border border-[#38BDF8]/20 bg-[#F5F5F5] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[#38BDF8]">
                    <Languages className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Idiomas
                    </span>
                  </div>
                  <p className="text-sm text-[#1E3A5F]/70">
                    {languages.join(" • ")}
                  </p>
                </div>

                {/* College - mobile */}
                <div className="rounded-xl border border-[#38BDF8]/20 bg-[#F5F5F5] p-4 md:hidden">
                  <div className="mb-2 flex items-center gap-2 text-[#38BDF8]">
                    <Building2 className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Colegiatura
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#1E3A5F]">
                    {college.code}
                  </p>
                  <p className="text-xs text-[#1E3A5F]/60">
                    {college.type} • {college.status}
                  </p>
                </div>
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
              <ButtonGroup>
                <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
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
                <ButtonMicrocopy>{t("about.ctaMicrocopy")}</ButtonMicrocopy>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
