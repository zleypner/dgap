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
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Location() {
  const { t } = useTranslation();

  return (
    <Section
      id="ubicacion"
      className="bg-gradient-to-b from-[#F5F5F5] to-white"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("location.badge")}
              </p>
              <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                {t("location.title")}
              </h2>
              <p className="mb-6 text-lg font-medium text-[#38BDF8]">
                {t("location.subtitle")}
              </p>
              <p className="mb-8 text-[#1E3A5F]/70">
                {t("location.description")}
              </p>
            </AnimateOnScroll>

            {/* Contact info */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={100}
              duration={500}
              easing="smooth"
            >
              <div className="mb-8 space-y-4">
                {/* Consultorio Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">
                      Consultorio
                    </p>
                    <p className="text-sm text-[#1E3A5F]/70">
                      {siteConfig.location.consultorio}
                    </p>
                    <p className="text-sm text-[#1E3A5F]/60">
                      {siteConfig.location.consultorioAddress}
                    </p>
                  </div>
                </div>

                {/* Hospital Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Icons.building className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">
                      {siteConfig.location.hospital}
                    </p>
                    <p className="text-sm text-[#1E3A5F]/70">
                      {siteConfig.location.hospitalAddress}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Telefonos</p>
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="block text-sm text-[#38BDF8] hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <a
                      href="tel:+50622463193"
                      className="block text-sm text-[#38BDF8] hover:underline"
                    >
                      {siteConfig.contact.phone2}
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Correo electronico</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="block text-sm text-[#38BDF8] hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email2}`}
                      className="block text-sm text-[#38BDF8] hover:underline"
                    >
                      {siteConfig.contact.email2}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">
                      Horario de atencion
                    </p>
                    <p className="text-sm text-[#1E3A5F]/70">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup className="flex flex-col items-center text-center">
                <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
                  {t("location.ctaPreText")}
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("location.cta")}
                  </Button>
                </a>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>

          {/* Map placeholder */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg lg:aspect-[4/3]">
                {/* Google Maps Embed */}
                <iframe
                  src={siteConfig.location.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del consultorio - Torre Médica, San Antonio de Guadalupe"
                  className="absolute inset-0"
                />
              </div>

              {/* Navigation buttons */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#1E3A5F] shadow-md transition-all hover:shadow-lg"
                >
                  <MapPin className="h-4 w-4 text-[#EA4335]" />
                  Google Maps
                </a>
                <a
                  href={siteConfig.location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#1E3A5F] shadow-md transition-all hover:shadow-lg"
                >
                  <Icons.waze className="h-4 w-4 text-[#33CCFF]" />
                  Waze
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
