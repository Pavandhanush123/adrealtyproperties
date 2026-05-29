import { motion } from "framer-motion";
import { Award, ShieldCheck, MapPinned, TrendingUp } from "lucide-react";

const items = [
  { icon: Award, title: "Recognised Expertise", desc: "A team of senior advisors specialising in prime residential and investment real estate." },
  { icon: ShieldCheck, title: "Trusted Service", desc: "Transparent, discreet representation backed by a 96% client retention rate." },
  { icon: MapPinned, title: "Premium Locations", desc: "Access to the most sought-after addresses, including off-market opportunities." },
  { icon: TrendingUp, title: "Investment Intelligence", desc: "Data-driven advisory on yield, capital growth and emerging luxury markets." },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-eyebrow">Why AD Realty</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy">
            Built on principles, measured in trust
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-luxury transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                <item.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
