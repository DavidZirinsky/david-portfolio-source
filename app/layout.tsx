import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://davidzirinsky.com"),
  title: "David Zirinsky's Personal Site",
  description: "Personal website of David Zirinsky, software developer",
  keywords: [
    "David Zirinsky",
    "software developer",
    "web developer",
    "programmer",
    "portfolio",
    "Python",
    "Kubernetes",
    "TypeScript",
  ],
  authors: [{ name: "David Zirinsky" }],
  alternates: {
    canonical: "https://davidzirinsky.com/",
  },
  openGraph: {
    title: "David Zirinsky - Software Developer",
    description:
      "Explore the software development projects David Zirinsky. A portfolio showcasing expertise in web development, programming, and Android development.",
    url: "https://davidzirinsky.com",
    siteName: "David Zirinsky's Portfolio",
    images: [
      {
        url: "https://davidzirinsky.com/couponClipper.png",
        width: 800,
        height: 600,
        alt: "Coupon Clipper Project Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Zirinsky - Software Developer",
    description:
      "Explore the software development projects David Zirinsky. A portfolio showcasing expertise in web development, programming, and Android development.",
    creator: "@davidzirinsky",
    images: ["https://davidzirinsky.com/couponClipper.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-75041643-2"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-75041643-2');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
