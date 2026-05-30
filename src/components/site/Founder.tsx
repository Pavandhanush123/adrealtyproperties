import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="py-32 bg-navy text-white overflow-hidden">
      <div className="container-luxury grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-luxury bg-gradient-to-br from-white/5 to-white/0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-[8rem] leading-none text-gold/80">AD</div>
                <div className="mt-4 text-xs tracking-[0.4em] uppercase text-white/50">
                  Portrait coming soon
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy via-navy/70 to-transparent">
              <div className="font-display text-2xl text-white">Anil Datla</div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mt-1">
                Founder &amp; Managing Director
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <span className="text-eyebrow text-gold">Founder Spotlight</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-white leading-tight">
            A vision built on trust &amp; transparency
          </h2>

          <div className="mt-10 relative pl-10">
            <Quote className="absolute left-0 top-0 h-7 w-7 text-gold" strokeWidth={1.5} />
            <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug italic">
              At AD Realty Properties, our mission is to help clients make confident real
              estate decisions through transparency, market expertise and personalised
              guidance. We believe every property journey should be seamless, trustworthy
              and value-driven.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
            <div>
              <div className="font-display text-xl text-white">Anil Datla</div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mt-1">
                Founder &amp; Managing Director, AD Realty Properties
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
