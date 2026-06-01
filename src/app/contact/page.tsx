import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | LayerSeven Solutions",
  description:
    "Contact LayerSeven Solutions about SaaS MVPs, AI integrations, backend systems, or ongoing software support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building"
        description="If you already have scope, timeline, or budget details, include them. If you are still figuring things out, that is fine too."
        accent="blue"
      />
      <div className="mt-4">
        <Contact />
      </div>
    </main>
  );
}
