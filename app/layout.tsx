import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talon Software",
  description: "Talon Software delivers professional software solutions to businesses across the United States. We specialize in SaaS applications, custom website features, and business software consulting.",
  openGraph: {
    title: "Talon Software",
    description: "Professional software solutions for businesses across the United States. Specializing in SaaS applications, custom website features, and business software consulting.",
    url: "https://talonsoftware.com",
    siteName: "Talon Software",
    images: [
      {
        url: "/Talon Software Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Talon Software - Professional Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talon Software",
    description: "Professional software solutions for businesses across the United States.",
    images: ["/Talon Software Logo.jpg"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://talonsoftware.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
