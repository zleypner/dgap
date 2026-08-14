import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import { Header, Footer, WhatsAppButton } from "@/components/layout";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drapinto.com"),
  title: {
    default: "Dra. Eimy Pinto | Rehabilitacion Cardiopulmonar y Salud Cardiometabolica en San Jose, Costa Rica",
    template: "%s | Dra. Eimy Pinto",
  },
  description:
    "Dra. Eimy Pinto en Hospital Internacional La Catolica. Rehabilitacion cardiopulmonar, salud cardiometabolica, Holter, MAPA y electrocardiograma con acompanamiento cercano en San Jose, Costa Rica.",
  keywords: [
    "rehabilitacion cardiopulmonar Costa Rica",
    "rehabilitacion pulmonar Costa Rica",
    "rehabilitacion cardiaca Costa Rica",
    "salud cardiometabolica Costa Rica",
    "riesgo cardiometabolico",
    "prevencion cardiometabolica",
    "Holter Costa Rica",
    "Holter 24 horas",
    "MAPA 24 horas",
    "monitoreo ambulatorio de presion arterial",
    "electrocardiograma Costa Rica",
    "cardiologia no invasiva",
    "Dra. Eimy Pinto",
    "Hospital Internacional La Catolica",
    "medico San Jose Costa Rica",
    "analisis de composicion corporal",
    "valoracion cardiometabolica",
  ],
  authors: [{ name: "Dra. Eimy Stephany Pinto Arita" }],
  creator: "Dra. Eimy Stephany Pinto Arita",
  publisher: "Dra. Eimy Stephany Pinto Arita",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: "en_US",
    url: "https://drapinto.com",
    siteName: "Dra. Eimy Stephany Pinto Arita",
    title: "Dra. Eimy Pinto | Rehabilitacion Cardiopulmonar y Salud Cardiometabolica",
    description:
      "Rehabilitacion cardiopulmonar, salud cardiometabolica, Holter, MAPA y electrocardiograma en Hospital Internacional La Catolica, San Jose, Costa Rica. Atencion con empatia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Eimy Pinto - Rehabilitacion Cardiopulmonar y Salud Cardiometabolica en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Eimy Pinto | Rehabilitacion Cardiopulmonar y Salud Cardiometabolica",
    description:
      "Rehabilitacion cardiopulmonar, salud cardiometabolica y cardiologia no invasiva en San Jose, Costa Rica.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://drapinto.com",
    languages: {
      "es-CR": "https://drapinto.com",
      "en-US": "https://drapinto.com/en",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A5F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org structured data for medical practice */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dra. Eimy Stephany Pinto Arita",
              description:
                "Medico especialista en rehabilitacion cardiopulmonar, salud cardiometabolica y cardiologia no invasiva en San Jose, Costa Rica. Atencion en Hospital Internacional La Catolica con acompanamiento cercano y empatia.",
              medicalSpecialty: [
                "Cardiology",
                "Preventive Medicine",
                "Pulmonary Rehabilitation",
              ],
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Rehabilitacion Cardiopulmonar",
                  description: "Programa de rehabilitacion cardiaca y pulmonar para recuperacion cardiovascular en Costa Rica",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Valoracion Cardiometabolica",
                  description: "Evaluacion integral de salud cardiometabolica y prevencion de riesgo cardiovascular",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Electrocardiograma con interpretacion",
                  description: "ECG con interpretacion medica en San Jose, Costa Rica",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Holter 24 horas",
                  description: "Monitoreo Holter de 24 horas hasta 14 dias con dispositivos Spacelabs y Novi",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "MAPA - Monitoreo Ambulatorio de Presion Arterial",
                  description: "MAPA 24 horas para evaluacion de presion arterial",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Analisis de Composicion Corporal",
                  description: "Evaluacion de composicion corporal para salud cardiometabolica",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Torre Medica, Piso 5, Consultorios 501/502, San Antonio de Guadalupe, frente a los Tribunales de Justicia",
                addressLocality: "Goicoechea",
                addressRegion: "San Jose",
                addressCountry: "CR",
              },
              location: {
                "@type": "Hospital",
                name: "Hospital Internacional La Catolica",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Calle Blancos",
                  addressLocality: "Goicoechea",
                  addressRegion: "San Jose",
                  addressCountry: "CR",
                },
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "9.9406",
                longitude: "-84.0536",
              },
              telephone: "+506 2246 3226",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              areaServed: {
                "@type": "City",
                name: "San Jose, Costa Rica",
              },
              sameAs: [],
              memberOf: {
                "@type": "Organization",
                name: "Colegio de Medicos y Cirujanos de Costa Rica",
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Medical License",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Colegio de Medicos y Cirujanos de Costa Rica",
                  },
                  identifier: "MED10809",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Diploma",
                  name: "Diplomado en prevencion de riesgo cardiometabolico",
                },
              ],
              knowsLanguage: ["es", "en"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#1E3A5F] focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            Saltar al contenido principal
          </a>

          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
