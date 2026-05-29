import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Investment } from "@/components/site/Investment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AD Realty Properties — Signature Luxury Real Estate" },
      { name: "description", content: "Curated luxury residences, premium projects and investment advisory for a global community of discerning clients." },
      { property: "og:title", content: "AD Realty Properties" },
      { property: "og:description", content: "Signature luxury real estate, individually curated." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <About />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <Investment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
