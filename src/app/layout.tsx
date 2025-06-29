import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Dharma Yudistira | Portfolio",
    template: "%s | Dharma's Portfolio",
  },
  description:
    "I'm a passionate Product Engineer specializing in building high-performance, scalable web and mobile applications. Explore my projects and let's build something amazing together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(satoshi.variable, firaCode.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
