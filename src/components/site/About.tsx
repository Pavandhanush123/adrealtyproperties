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
            alt="Premium Hyderabad residence interior"
            loading="lazy"
            className="rounded-2xl shadow-luxury w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 glass-panel rounded-2xl p-6 hidden md:block">
            <div className="font-display text-5xl text-gold">15+</div>
            <div className="text-sm text-navy tracking-wide">Years guiding Hyderabad</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-eyebrow">About AD Realty Properties</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-tight">
            Trusted advisors for every property decision
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            AD Realty Properties is a Hyderabad-based real estate consulting and property
            advisory firm focused on helping clients make confident and informed property
            decisions.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            With expertise across residential, commercial, luxury and investment properties,
            we are committed to transparent guidance, verified opportunities and personalised
            support throughout the property journey.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From first-time homebuyers to seasoned investors, our work is built on trust,
            market knowledge and long-term client relationships.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <div className="font-display text-4xl text-gold">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Verified listings</div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold">1,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Clients advised</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
