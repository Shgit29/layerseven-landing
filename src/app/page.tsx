import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ValueProposition from "@/components/ValueProposition";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <SelectedWork />
      <ProductsSection />
      <Services />
      <Process />
      <ValueProposition />
      <About />
      <Contact />
    </main>
  );
}
