import { Victor_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  variable: "--font-victor-mono",
});

export const metadata: Metadata = {
  title: "Ian Stewart",
  description: "Ian Stewart's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${victorMono.variable} font-mono antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
