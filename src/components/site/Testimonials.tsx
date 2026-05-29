import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "AD Realty understood exactly what we were looking for before we did. The home they found us isn't just a property — it's the right one.",
    name: "Sarah & Rohan Mehta",
    role: "Private Clients",
  },
  {
    quote: "Discreet, intelligent, and completely aligned with our investment thesis. They've become an extension of our family office.",
    name: "James Okafor",
    role: "Investor",
  },
  {
    quote: "From first viewing to handover, every detail was handled with quiet precision. A genuinely premium experience.",
    name: "Lina Haddad",
    role: "Penthouse Owner",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-sand relative overflow-hidden">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-eyebrow">Client Voices</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy">
            Represented with care
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="glass-panel rounded-2xl p-8 shadow-soft"
            >
              <Quote className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <blockquote className="mt-5 font-display text-xl leading-snug text-navy">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-navy/10">
                <div className="font-medium text-navy">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
