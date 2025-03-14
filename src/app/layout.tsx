import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitch from "../components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";


const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moin Afzal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}
      >
        <ThemeContextProvider>

        <Navbar />
        {children}
        <Footer />

        <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
