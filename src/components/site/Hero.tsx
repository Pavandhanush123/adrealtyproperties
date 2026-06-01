import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

const stats = [
  { value: "500+", label: "Verified Listings" },
  { value: "1,000+", label: "Clients Advised" },
  { value: "15+", label: "Years in Hyderabad" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury residence in Hyderabad at twilight"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/95" />
      </div>

      <div className="relative container-luxury pb-32 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-eyebrow">Across Global Markets Advisory</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
            Find the right property, <em className="text-gold not-italic">make informed</em> decisions
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Residential, commercial and investment property expertise across India and international markets —
            guided by transparency, market knowledge and a personalised approach.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#properties"
              className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-full font-medium hover:shadow-luxury transition-all"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-dark rounded-xl p-6 text-white"
            >
              <div className="font-display text-4xl text-gold">{s.value}</div>
              <div className="mt-1 text-sm tracking-wide text-white/70">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
