import type { Metadata } from "next";
import "./globals.css";
import { fontHeadingEn, fontBodyEn, fontHeadingAr, fontBodyAr } from "./fonts";
import { Lato } from 'next/font/google';


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
        className={`${fontHeadingEn.variable} ${fontBodyEn.variable} ${fontHeadingAr.variable} ${fontBodyAr.variable} antialiased bg-[#070B14] text-white`}
      >
        {children}
      </body>
    </html>
  );
}