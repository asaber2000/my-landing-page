import type { Metadata } from "next";
import "./globals.css";
import { fontHeadingEn, fontBodyEn } from "./fonts";
import { GoogleTagManager } from '@next/third-parties/google';



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
      <GoogleTagManager gtmId="GTM-WSX2RPG7" />
      <body
        className={`${fontHeadingEn.variable} ${fontBodyEn.variable} antialiased bg-[#070B14] text-white`}
      >
        {children}
      </body>
    </html>
  );
}