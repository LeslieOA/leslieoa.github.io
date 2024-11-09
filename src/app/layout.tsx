import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = localFont({
  src: "./fonts/manrope/manrope-variablefont_wght.ttf",
  variable: "--font-manrope",
  weight: "200 800",
});
export const metadata: Metadata = {
  title: "Leslie Owusu-Appiah",
  description: "Code + Experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body className={`${manrope.variable} antialiased`}>
        <div className="flex flex-col h-dvh p-[clamp(1rem,4vw,5rem)]">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
