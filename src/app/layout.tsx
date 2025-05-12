import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const satoshi = localFont({
  src: "../../public/fonts/satoshi.otf",
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dharma | Portfolio",
  description:
    "Dharma's Personal Portfolio - Building Scalable Apps for Web, Mobile & Desktop",
  keywords: [
    "portfolio",
    "developer",
    "web development",
    "mobile development",
    "desktop apps",
  ],
  authors: [{ name: "Dharma Yudistira" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Dharma | Portfolio",
    description:
      "Dharma's Personal Portfolio - Building Scalable Apps for Web, Mobile & Desktop",
    siteName: "Dharma's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharma | Portfolio",
    description:
      "Dharma's Personal Portfolio - Building Scalable Apps for Web, Mobile & Desktop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(satoshi.variable, firaCode.variable, "antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
