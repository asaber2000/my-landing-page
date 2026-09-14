import type { Metadata } from "next";
import "./globals.css";
import { fontHeadingEn, fontBodyEn } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Solutions & Services Landing Page",
  description: "High-Performance Tensile Structures & Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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