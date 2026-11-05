import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/web/ConvexClientProvider";
import { ThemeProvider } from "@/components/web/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "cn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rekahdo.vercel.app"),
  title: {
    default: "Richard T. Okafor | Next.js Web Engineer",
    template: "%s | Richard T. Okafor",
  },
  description:
    "I build scalable web applications, custom UI components, and high-converting websites that give businesses strong online visibility.",
  keywords: [
    "Richard Okafor",
    "Rekahdo",
    "Next.js Engineer",
    "Next.js Developer",
    "Frontend Developer",
    "Convex Developer",
  ],
  authors: [{ name: "Richard T. Okafor", url: "https://rekahdo.vercel.app" }],
  creator: "Richard T. Okafor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rekahdo.vercel.app",
    siteName: "Richard T. Okafor Portfolio",
    title: "Richard T. Okafor | Next.js Web Engineer",
    description:
      "I build scalable web applications, custom UI components, and high-converting websites with Next.js, React, and Convex.",
    images: [
      {
        url: "https://rekahdo.vercel.app/images/ogs/og.jpg",
        width: 1200,
        height: 630,
        alt: "Richard T. Okafor — Next.js Web Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard T. Okafor | Next.js Web Engineer",
    description:
      "I build scalable web applications, custom UI components, and high-converting websites with Next.js, React, and Convex.",
    images: ["https://rekahdo.vercel.app/images/ogs/og.jpg"],
    creator: "@real_rekahdo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={cn(
        "min-h-full flex flex-col",
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
