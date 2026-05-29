import { motion } from "framer-motion";
import interior from "@/assets/interior.jpg";

export function About() {
  return (
    <section id="about" className="py-32 bg-sand">
      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src={interior}
            alt="Luxury interior"
            loading="lazy"
            className="rounded-2xl shadow-luxury w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 glass-panel rounded-2xl p-6 hidden md:block">
            <div className="font-display text-5xl text-gold">15+</div>
            <div className="text-sm text-navy tracking-wide">Years defining luxury</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-eyebrow">About AD Realty</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-tight">
            A new standard for property, built on quiet confidence
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            For over fifteen years, AD Realty Properties has connected discerning clients
            with the most considered residences in the region. We don't sell square meters —
            we curate addresses, perspectives, and futures.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Every property in our portfolio is selected for its architecture, its location,
            and the lifestyle it makes possible. Our clients return because we represent
            them with discretion, intelligence, and a genuine eye for what lasts.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <div className="font-display text-4xl text-gold">$2B+</div>
              <div className="text-sm text-muted-foreground mt-1">Transacted value</div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold">96%</div>
              <div className="text-sm text-muted-foreground mt-1">Client retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
