import { Victor_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  variable: "--font-victor-mono",
});

const siteUrl = "https://ianstewart.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ian Stewart | Student Developer (AI & Web)", template: "%s | Ian Stewart" },
  description: "Ian Stewart's portfolio",
  keywords: ["Ian Stewart", "Software Engineer", "Portfolio", "Web Developer"],
  authors: [{ name: "Ian Stewart" }],
  creator: "Ian Stewart",
  publisher: "Ian Stewart",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ian Stewart | Student Developer (AI & Web)",
    description: "Ian Stewart's portfolio",
    siteName: "Ian Stewart",
    images: [
      {
        url: "/og", // dynamic OG image route
        width: 1200,
        height: 630,
        alt: "Ian Stewart | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Stewart | Student Developer (AI & Web)",
    description: "Ian Stewart's portfolio",
    images: ["/og"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "PXUQfPF-FRBSea3uMDK2fp3biVnhOp2H2i0pTbVrfIk",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ian Stewart",
    url: siteUrl,
    jobTitle: "Student Developer",
    sameAs: [
      "https://github.com/ghost1034",
      "https://www.linkedin.com/in/ianstewart26/",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ian Stewart",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${victorMono.variable} font-mono antialiased`}>
        <Script id="jsonld-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
        <Script id="jsonld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
