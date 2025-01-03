import { env } from "@/env/client";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { La_Belle_Aurore as FontHandwritting, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHandwritting = FontHandwritting({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-handwritting",
});

const MonaLisa = localFont({
  src: "@/assets/fonts/MonoLisa-regular.ttf",
  variable: "--font-monalisa",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: 'Heath Babb Portfolio & Blog',

  description:
    'Heath Babb is a Full-Stack Software Engineer and indie hacker with a proven track record in building impactful, consumer-facing products. Specializing in rapid prototyping, full-stack development, and emerging technologies like AI and blockchain, Heath Babb is passionately building innovative solutions and upskilling in Web3, AI, and Machine Learning while releasing quality apps to the public.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Heath Babb Portfolio & Blog',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    images: '/images/png/portfolio-preview.png',
    siteName: 'Heath Babb Portfolio & Blog',
    title: 'Heath Babb Portfolio & Blog',
    description:
      'Heath Babb is a Full-Stack Software Engineer and indie hacker with a proven track record in building impactful, consumer-facing products. Specializing in rapid prototyping, full-stack development, and emerging technologies like AI and blockchain, Heath Babb is passionately building innovative solutions and upskilling in Web3, AI, and Machine Learning while releasing quality apps to the public.',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/png/portfolio-preview.png',
    title: 'Heath Babb Portfolio & Blog',
    description:
      'Heath Babb is a Full-Stack Software Engineer and indie hacker with a proven track record in building impactful, consumer-facing products. Specializing in rapid prototyping, full-stack development, and emerging technologies like AI and blockchain, Heath Babb is passionately building innovative solutions and upskilling in Web3, AI, and Machine Learning while releasing quality apps to the public.',
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-bg-default font-sans antialiased",
          fontSans.variable,
          fontHandwritting.variable,
          MonaLisa.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
