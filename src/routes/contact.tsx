import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { MapSection } from "@/components/site/MapSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AD Realty Properties | Hyderabad Real Estate Advisors" },
      { name: "description", content: "Get in touch with AD Realty Properties. Visit our Hyderabad office at RMZ Spire, HITEC City or reach out via phone, email, or WhatsApp." },
      { name: "keywords", content: "contact AD Realty, Hyderabad real estate contact, property consultants Hyderabad, Anil Datla contact, RMZ Spire HITEC City" },
      { property: "og:title", content: "Contact AD Realty Properties — Hyderabad" },
      { property: "og:description", content: "Visit our Hyderabad headquarters or reach out for premium real estate advisory." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-navy text-white">
          <div className="container-luxury">
            <span className="text-eyebrow text-gold">Get in Touch</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
              Let's begin a quiet conversation
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
              Visit our Hyderabad headquarters or reach out directly. A senior advisor will respond personally within one business day.
            </p>
          </div>
        </section>
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
