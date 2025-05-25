import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/JsonLd";

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
    "Dharma Yudistira",
    "Full Stack Developer",
    "Web Development",
    "Mobile Development",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "UI/UX Development",
    "Software Engineer",
    "Portfolio",
    "Web Applications",
    "Mobile Apps",
    "Desktop Applications",
  ],
  authors: [
    {
      name: "Dharma Yudistira",
      url: "https://www.dharma-yudistira.com/",
    },
  ],
  creator: "Dharma Yudistira",
  publisher: "Dharma Yudistira",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dharma-yudistira.com/",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dharma Yudistira",
    url: "https://www.dharma-yudistira.com/",
    jobTitle: "Product Engineer",
    description: "Building Scalable Web, Mobile & Desktop Applications",
    sameAs: [
      "https://github.com/dharmayudistira",
      "https://www.linkedin.com/in/dharmayudistira/",
      "https://www.instagram.com/dharmayudistira_/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dharma Yudistira's Portfolio",
    url: "https://www.dharma-yudistira.com/",
    description:
      "Professional portfolio showcasing web, mobile, and desktop development projects",
    author: {
      "@type": "Person",
      name: "Dharma Yudistira",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body
        className={cn(satoshi.variable, firaCode.variable, "antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
