import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Canales | Fotoperiodista",
  description:
    "Portfolio profesional de fotografía documental, actualidad, eventos acreditados, política, deporte, cultura y movimientos sociales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}