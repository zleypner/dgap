"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Button,
  Icons,
  AnimateOnScroll,
  Container,
  Floating,
} from "@/components/ui";
import { HeartPulse, Activity, Building2, BadgeCheck, UserRound } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-[#F8FAFC] pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#38BDF8]/[0.03] blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-[#1E3A5F]/[0.02] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 pb-8 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          {/* Content - Left side */}
          <div className="order-1 lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <AnimateOnScroll
              animation="fade-in"
              mobileAnimation="fade-in"
              delay={0}
              duration={500}
              easing="smooth"
            >
              <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#38BDF8] uppercase sm:mb-5 sm:text-xs">
                Rehabilitación y salud integral
              </p>
            </AnimateOnScroll>

            {/* Headline */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={100}
              duration={700}
              easing="smooth"
            >
              <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#1E3A5F]">
                Rehabilitación cardiopulmonar y salud cardiometabólica
              </h1>
              <p className="mt-2 text-[clamp(1.25rem,3.5vw,2.5rem)] font-medium leading-[1.2] tracking-tight text-[#38BDF8] italic sm:mt-3">
                con acompañamiento cercano.
              </p>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={250}
              duration={600}
              easing="smooth"
            >
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#1E3A5F]/70 sm:mt-8 sm:text-lg">
                Atención médica enfocada en prevención, recuperación y bienestar
                cardiopulmonar, con una atención cercana y personalizada de la
                Dra. Eimy Pinto.
              </p>
            </AnimateOnScroll>

            {/* CTAs */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={600}
              easing="smooth"
            >
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" className="w-full sm:w-auto">
                    <Icons.whatsapp />
                    Agendar una consulta
                  </Button>
                </a>
                <a href="#servicios">
                  <Button variant="ghost" className="group w-full sm:w-auto">
                    Conocer servicios
                    <Icons.arrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image - Right side */}
          <div className="relative order-2 lg:col-span-6 xl:col-span-7">
            <AnimateOnScroll
              animation="fade-in"
              mobileAnimation="scale"
              delay={200}
              duration={800}
              easing="smooth"
            >
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:mr-0 lg:ml-auto lg:max-w-none">
                {/* Decorative celeste element behind */}
                <div className="absolute -right-4 top-8 h-[85%] w-[85%] rounded-[2rem] bg-gradient-to-br from-[#38BDF8]/10 to-[#38BDF8]/5 sm:-right-6 sm:top-10 lg:-right-8 lg:rounded-[2.5rem]" />

                {/* Main image container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg sm:aspect-[4/5] sm:rounded-3xl lg:aspect-[3/4] xl:aspect-[4/5]">
                  <Image
                    src={siteConfig.images.hero}
                    alt="Dra. Eimy Stephany Pinto Arita - Medicina con Empatía"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>

                {/* Floating Card 1 - Rehabilitación cardiopulmonar */}
                <Floating amplitude={4} duration={5} delay={0}>
                  <div className="absolute -left-2 top-[15%] z-20 sm:-left-4 lg:-left-8">
                    <AnimateOnScroll
                      animation="scale-up"
                      delay={600}
                      duration={500}
                      easing="spring"
                    >
                      <div className="flex items-center gap-2.5 rounded-xl border border-white/60 bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#38BDF8]/10 sm:h-9 sm:w-9">
                          <HeartPulse className="h-4 w-4 text-[#38BDF8] sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1E3A5F] sm:text-sm">
                            Rehabilitación cardiopulmonar
                          </p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </Floating>

                {/* Floating Card 2 - Salud cardiometabólica */}
                <Floating amplitude={5} duration={6} delay={0.5}>
                  <div className="absolute -right-2 bottom-[20%] z-20 sm:-right-4 lg:-right-6">
                    <AnimateOnScroll
                      animation="scale-up"
                      delay={750}
                      duration={500}
                      easing="spring"
                    >
                      <div className="rounded-xl border border-white/60 bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-3">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E3A5F]/10 sm:h-9 sm:w-9">
                            <Activity className="h-4 w-4 text-[#1E3A5F] sm:h-5 sm:w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#1E3A5F] sm:text-sm">
                              Salud cardiometabólica
                            </p>
                            <p className="text-[10px] text-[#1E3A5F]/60 sm:text-xs">
                              Prevención · Control · Seguimiento
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </Floating>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Trust bar */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-in"
          delay={600}
          duration={500}
          easing="smooth"
        >
          <div className="mt-8 border-t border-[#E5E7EB]/60 pt-6 sm:mt-12 sm:pt-8 lg:mt-0 lg:border-t-0 lg:pt-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#1E3A5F]/60 sm:gap-x-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <UserRound className="h-4 w-4 text-[#38BDF8]" />
                <span>Atención personalizada</span>
              </div>
              <div className="hidden h-4 w-px bg-[#E5E7EB] sm:block" />
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#38BDF8]" />
                <span>Hospital La Católica</span>
              </div>
              <div className="hidden h-4 w-px bg-[#E5E7EB] sm:block" />
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#38BDF8]" />
                <span>MED10809</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
