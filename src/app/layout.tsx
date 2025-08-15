import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Portfolio - Muhammed Sahshad",
  description: "Modern, personal portfolio showcasing skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-serif: ${montserrat.variable};
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
        `}</style>
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="lght" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
