import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import ricsLogo from "@/assets/rics-logo.jpeg.asset.json";
import narIndiaLogo from "@/assets/nar-india-logo.jpeg.asset.json";
import narUsaLogo from "@/assets/nar-usa-logo.jpeg.asset.json";

const logos = [
  { name: "RICS Certified Professional", src: ricsLogo.url },
  { name: "Member of NAR India", src: narIndiaLogo.url },
  { name: "Member of NAR USA", src: narUsaLogo.url },
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-14 bg-background border-b border-border">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-eyebrow inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Trusted &amp; Recognised
          </span>
          <h2 className="mt-3 font-display text-2xl md:text-3xl text-navy">
            Affiliated with the most respected bodies in real estate
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.25em] uppercase text-navy font-medium">
              International Realtor
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-0.5"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
