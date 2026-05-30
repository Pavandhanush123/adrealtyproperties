import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBadges } from "@/components/site/TrustBadges";
import { Properties } from "@/components/site/Properties";
import { About } from "@/components/site/About";
import { Founder } from "@/components/site/Founder";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Investment } from "@/components/site/Investment";
import { Contact } from "@/components/site/Contact";
import { MeetOurFounder } from "@/components/site/MeetOurFounder";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AD Realty Properties — Trusted Real Estate Advisors in Hyderabad" },
      { name: "description", content: "AD Realty Properties is a Hyderabad-based real estate advisory firm offering residential, commercial and investment property expertise with transparency and trust." },
      { name: "keywords", content: "Hyderabad real estate, property advisors Hyderabad, luxury homes Hyderabad, HITEC City property, commercial property Hyderabad, AD Realty Properties, Anil Datla" },
      { property: "og:title", content: "AD Realty Properties — Hyderabad Real Estate Advisors" },
      { property: "og:description", content: "Trusted property consultants for residential, commercial and investment real estate across Hyderabad." },
      { property: "og:type", content: "website" },
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
        <TrustBadges />
        <Properties />
        <About />
        <Founder />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <Investment />
        <Contact />
        <MeetOurFounder />
      </main>
      <Footer />
    </div>
  );
}
