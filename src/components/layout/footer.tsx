"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import { Icons, Container } from "@/components/ui";
import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="overflow-x-hidden border-t border-[#E5E7EB] bg-white">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 overflow-hidden md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo and description */}
          <div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/icons/logo.jpeg"
                  alt="Dra. Eimy Pinto Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-semibold text-[#1E3A5F]">
                  Dra. Eimy Pinto
                </span>
              </div>
              <p className="mb-6 max-w-xs text-sm text-[#1E3A5F]/70">
                {t("footer.description")}
              </p>
              <div className="flex gap-3">
                {siteConfig.links.instagram !== "[INSTAGRAM_URL]" && (
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#1E3A5F]/70 transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
                    aria-label="Instagram"
                  >
                    <Icons.instagram className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.links.facebook !== "[FACEBOOK_URL]" && (
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#1E3A5F]/70 transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
                    aria-label="Facebook"
                  >
                    <Icons.facebook className="h-5 w-5" />
                  </a>
                )}
              </div>
          </div>

          {/* Contact */}
          <div>
              <h4 className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("footer.contact")}
              </h4>
              <div className="space-y-3">
                {/* Call Now Button */}
                <a
                  href={`tel:${siteConfig.contact.phoneLink}`}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#1E3A5F] px-6 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#2D4A6F] hover:shadow-lg active:scale-[0.98]"
                >
                  <Phone className="h-[18px] w-[18px]" />
                  {t("footer.callNow")}
                </a>

                {/* WhatsApp Button */}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#20BD5A] hover:shadow-lg active:scale-[0.98]"
                >
                  <Icons.whatsapp className="h-[18px] w-[18px]" />
                  {t("footer.bookNow")}
                </a>

                {/* Consultorio */}
                <div className="flex items-start gap-3 pt-2 text-sm text-[#1E3A5F]/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                  <span>
                    {siteConfig.location.consultorio}
                    <br />
                    {siteConfig.location.consultorioAddress}
                  </span>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3 text-sm text-[#1E3A5F]/70">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                  <span>
                    {siteConfig.contact.phone}
                    <br />
                    {siteConfig.contact.phone2}
                  </span>
                </div>
              </div>
          </div>

          {/* Hours */}
          <div>
              <h4 className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("footer.hours")}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                  <div className="text-sm">
                    <p className="font-medium text-[#1E3A5F]">
                      {siteConfig.schedule.weekdays !== "[SCHEDULE]"
                        ? siteConfig.schedule.weekdays
                        : t("footer.schedulePending")}
                    </p>
                    <p className="text-[#1E3A5F]/70">
                      {t("footer.contactToSchedule")}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-10 border-t border-[#E5E7EB] pt-8 text-center sm:mt-12">
          <p className="mb-4 text-sm font-medium text-[#1E3A5F]/80">
            {t("footer.credentials")}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#E5E7EB] pt-6 sm:gap-4 md:flex-row">
          <p className="text-sm text-[#9CA3AF]">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <p className="text-sm text-[#9CA3AF]">{t("footer.location")}</p>
        </div>
      </Container>
    </footer>
  );
}
