import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const badges = [
  { name: "RICS", sub: "Certified Professional" },
  { name: "HRA", sub: "Hyderabad Realtors Association" },
  { name: "NAR India", sub: "National Association of Realtors" },
  { name: "NAR USA", sub: "Global Real Estate Network" },
];

export function TrustBadges() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-eyebrow inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Trusted &amp; Recognised
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy">
            Affiliated with the most respected bodies in real estate
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.25em] uppercase text-navy font-medium">
              International Realtor
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {badges.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background px-6 py-10 text-center hover:bg-sand transition-colors"
            >
              <div className="font-display text-3xl md:text-4xl text-navy">{b.name}</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {b.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
