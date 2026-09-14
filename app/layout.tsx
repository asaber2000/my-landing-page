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
  id="gtm"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    `,
  }}
/>
<Script
  id="gtm-loader"
  strategy="lazyOnload"
  src="https://www.googletagmanager.com/gtm.js?id=GTM-WSX2RPG7"
/>
        {children}
      </body>
    </html>
  );
}