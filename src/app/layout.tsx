import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const satoshi = localFont({
  src: "../../public/fonts/satoshi.otf",
  variable: "--font-satoshi",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Dharma | Portfolio",
  description: "Dharma's Personal Portfolio",
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
