import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://layerseven.com";

export const metadata: Metadata = {
  title: "LayerSeven Solutions | SaaS Development & AI Integrations",
  description:
    "LayerSeven Solutions is a Bahrain-registered software development company helping startups and businesses build SaaS products, AI integrations, backend systems, and scalable web platforms.",
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
