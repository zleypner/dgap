"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import { useScrollHeader } from "@/hooks";
import { Button, Icons, LanguageSwitcher } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader(50);

  const navigation = [
    { label: t("header.nav.services"), href: "#servicios" },
    { label: t("header.nav.rehabilitation"), href: "#rehabilitacion" },
    { label: t("header.nav.about"), href: "#sobre" },
    { label: t("header.nav.faq"), href: "#faq" },
    { label: t("header.nav.contact"), href: "#contacto" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled || mobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="#inicio"
              className="flex items-center gap-3"
              onClick={handleNavClick}
            >
              <Image
                src="/images/icons/logo.jpeg"
                alt="Dra. Eimy Pinto Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-lg leading-tight font-semibold text-[#1E3A5F]">
                  Dra. Eimy Pinto
                </p>
                <p className="text-xs tracking-wider text-[#1E3A5F]/70 uppercase">
                  {t("header.tagline")}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-[#1E3A5F]/70 transition-colors hover:bg-[#F5F5F5] hover:text-[#1E3A5F]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA and Language Switcher */}
            <div className="hidden items-center gap-4 lg:flex">
              <LanguageSwitcher />
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="compact">
                  <Icons.whatsapp />
                  {t("header.cta")}
                </Button>
              </a>
            </div>

            {/* Mobile CTA - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:hidden">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="small">
                  <Icons.whatsapp />
                  {t("header.mobileCta")}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-lg p-2 text-[#1E3A5F] transition-colors hover:bg-[#F5F5F5] lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen
                  ? t("accessibility.menuClose")
                  : t("accessibility.menuOpen")
              }
            >
              {mobileMenuOpen ? (
                <Icons.x className="h-6 w-6" />
              ) : (
                <Icons.menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-20 z-40 bg-white transition-all duration-300 lg:hidden",
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          )}
        >
          <nav className="flex flex-col items-center gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full rounded-lg px-4 py-3 text-center text-base font-medium text-[#1E3A5F] transition-colors hover:bg-[#F5F5F5]"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}

            <hr className="my-4 w-full border-[#E5E7EB]" />

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-2 px-4 py-2">
              <LanguageSwitcher />
            </div>

            <hr className="my-4 w-full border-[#E5E7EB]" />

            <div className="flex w-full justify-center px-4">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full max-w-xs"
              >
                <Button variant="whatsapp" size="full">
                  <Icons.whatsapp />
                  {t("header.cta")}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
