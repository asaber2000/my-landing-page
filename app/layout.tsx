import type { Metadata } from "next";
import "./globals.css";
import { fontHeadingEn, fontBodyEn } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://tents.baitalnokhada.com"),
  title: {
    default: "Tent Manufacturer & Rental in UAE & Saudi Arabia | Bait Al Nokhada",
    template: "%s | Bait Al Nokhada",
  },
  description:
    "Leading tent supplier in UAE & KSA. Custom warehouse, exhibition, and event tent rental or purchase solutions. Get your custom quote today.",
  keywords: [
    "Tent Manufacturers in UAE",
    "Tent Manufacturers in Saudi Arabia",
    "Event Tents Dubai",
    "Commercial Tents GCC",
    "Tent Rental UAE",
    "Tent Rental Saudi Arabia",
    "Tent Rental Dubai",
    "Tent Supplier in UAE",
    "Tent Supplier in Dubai",
    "Tents Dubai",
    "Tents for Sale in UAE",
    "Tents for Sale in Saudi Arabia",
    "Tents for Sale in Dubai",
    "Clear Span Tents",
    "Bait Al Nokhada",
  ],
  authors: [{ name: "Bait Al Nokhada Tents Factory" }],
  creator: "Bait Al Nokhada",
  publisher: "Bait Al Nokhada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tent Manufacturer & Rental in UAE & Saudi Arabia | Bait Al Nokhada",
    description:
      "Top tent manufacturer & tent rental of event tents, industrial storage tents, and labor tents across the UAE & Saudi Arabia and GCC. Get a quote today.",
    url: "https://tents.baitalnokhada.com",
    siteName: "Bait Al Nokhada",
    images: [
      {
        url: "/webp/gitex2025.webp",
        width: 1200,
        height: 630,
        alt: "Large-Scale Clear Span Exhibition Tent Exterior and Interior for GITEX Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tent Manufacturer & Rental in UAE & Saudi Arabia | Bait Al Nokhada",
    description:
      "Top tent manufacturer & tent rental of event tents, industrial storage tents, and labor tents across the UAE & Saudi Arabia and GCC. Get a quote today.",
    images: ["/webp/gitex2025.webp"],
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
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tents.baitalnokhada.com/#organization",
      "name": "Bait Al Nokhada Tents Factory",
      "alternateName": "مصنع بيت النوخذة للخيام",
      "url": "https://tents.baitalnokhada.com",
      "logo": "https://tents.baitalnokhada.com/logooo.svg",
      "foundingDate": "1997",
      "description": "Leading manufacturer and rental provider of large-scale event tents, industrial warehouse structures, and labor accommodation tents across the UAE, Saudi Arabia, and GCC.",
      "telephone": "+971558850631",
      "email": "Info@baitalnokhada.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Techno Park, Jebel Ali",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "sameAs": ["https://baitalnokhada.com", "https://www.linkedin.com/company/baitalnokhada/"]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://tents.baitalnokhada.com/#localbusiness",
      "name": "Bait Al Nokhada Tents - UAE & KSA Operations",
      "parentOrganization": {
        "@id": "https://tents.baitalnokhada.com/#organization"
      },
      "url": "https://tents.baitalnokhada.com",
      "telephone": "+971558850631",
      "email": "Info@baitalnokhada.com",
      "image": "https://tents.baitalnokhada.com/webp/gitex2025.webp",
      "priceRange": "$$$$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Techno Park, Jebel Ali",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "M41, ICAD-1, Mussafah",
          "addressLocality": "Abu Dhabi",
          "addressRegion": "Abu Dhabi",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Al Olaya District",
          "addressLocality": "Riyadh",
          "addressRegion": "Riyadh",
          "postalCode": "12211",
          "addressCountry": "SA"
        }
      ],
      "areaServed": [
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "AdministrativeArea", "name": "GCC" }
      ]
    },
   {
      "@type": "WebPage",
      "@id": "https://tents.baitalnokhada.com/#webpage",
      "url": "https://tents.baitalnokhada.com",
      "name": "Custom Tent Solutions & Featured Projects | Bait Al Nokhada",
      "isPartOf": { "@id": "https://tents.baitalnokhada.com/#organization" },
      "description": "Explore our portfolio of featured projects including GITEX, Gulfood, and Dubai Airshow. We engineer scalable custom solutions across the UAE & KSA, including event tents, exhibition tents, sports structures, luxury wedding tents, and heavy-duty warehouse tents."
    }
  ]
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://d3g07f5oxrfvni.cloudfront.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/GITEX-EVENT-TENT.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaJsonLd),
          }}
        />
      </head>

      <body
        className={`${fontHeadingEn.variable} ${fontBodyEn.variable} antialiased bg-[#070B14] text-white`}
      >
        <Script
          id="gtm-delayed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function loadGTM() {
                if (window.gtmDidInit) return;
                window.gtmDidInit = true;
                window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = document.getElementsByTagName('script')[0],
                    j = document.createElement('script');
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WSX2RPG7';
                f.parentNode.insertBefore(j, f);
              }
              // يشتغل فوراً إذا حرك المستخدم الماوس أو لمس الشاشة
              ['scroll', 'mousemove', 'touchstart'].forEach(function(e) {
                window.addEventListener(e, loadGTM, { once: true, passive: true });
              });
              // أو يشتغل تلقائياً بعد 3.5 ثوانٍ للزائر الهادئ
              setTimeout(loadGTM, 3500);
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}