import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Building2, Globe2, LineChart } from "lucide-react";

const pillars = [
  { icon: TrendingUp, label: "Capital Growth", value: "8–14% p.a." },
  { icon: LineChart, label: "Rental Yields", value: "Up to 7–9%" },
  { icon: Building2, label: "Commercial Mix", value: "Office · Retail · Hospitality" },
  { icon: Globe2, label: "Global Clientele", value: "32 Countries" },
];

export function Investment() {
  return (
    <section className="py-32 bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-eyebrow">Investment Advisory</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-tight">
              Real estate as a long-term position
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe real estate is a long-term wealth creation asset. By focusing on
              prime locations, quality developments, and future growth potential, we help
              investors build enduring value and secure their financial future.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 bg-navy text-primary-foreground px-8 py-4 rounded-full hover:bg-navy/90 transition-all hover:shadow-luxury"
            >
              Speak to an advisor
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {pillars.map((p) => (
              <div
                key={p.label}
                className="p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <p.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <div className="mt-6 text-sm text-muted-foreground tracking-wide">{p.label}</div>
                <div className="mt-1 font-display text-2xl text-navy">{p.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
