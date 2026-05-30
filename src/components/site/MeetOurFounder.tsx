import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, MapPin, Award, Globe } from "lucide-react";

export function MeetOurFounder() {
  return (
    <section id="meet-founder" className="py-24 md:py-32 bg-sand overflow-hidden">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-eyebrow">Leadership</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-navy leading-tight">
            Meet Our Founder
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-luxury bg-gradient-to-br from-navy/5 to-navy/0">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-display text-[7rem] leading-none text-gold/70">AD</div>
                <div className="mt-5 text-xs tracking-[0.35em] uppercase text-navy/40">
                  Portrait coming soon
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy via-navy/70 to-transparent">
                <div className="font-display text-2xl text-white">Anil Datla</div>
                <div className="mt-1 text-xs tracking-[0.25em] uppercase text-gold">
                  International Realtor | RERA-Approved Realtor | Founder, AD Realty Properties
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="mt-8 p-6 md:p-8 glass-panel rounded-2xl border border-border">
              <h3 className="font-display text-xl text-navy mb-5">Connect With Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://chat.whatsapp.com/C7HVhsXWxVuDqGIGSBDIGv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gold text-gold-foreground px-6 py-3.5 rounded-full font-medium text-sm hover:shadow-luxury transition-all group"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join WhatsApp Community
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaSTtUY5K3zPyrWHBw18"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-navy text-primary-foreground px-6 py-3.5 rounded-full font-medium text-sm hover:bg-navy/90 transition-all group"
                >
                  <MessageCircle className="h-4 w-4" />
                  Follow WhatsApp Channel
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                <Award className="h-3.5 w-3.5" />
                RERA-Approved
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-navy/70 bg-navy/5 px-3 py-1.5 rounded-full">
                <Globe className="h-3.5 w-3.5" />
                International Reach
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-navy leading-snug">
              Anil Datla
            </h3>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground uppercase">
              International Realtor | RERA-Approved Realtor | Founder, AD Realty Properties
            </p>

            <div className="mt-8 space-y-5 text-navy/80 text-lg leading-relaxed">
              <p>
                Anil Datla is a <strong className="text-navy">Telangana RERA-approved Realtor</strong> and the Founder of AD Realty Properties. With extensive experience in residential, commercial, and investment real estate, he works closely with homebuyers, investors, and landowners to help them make confident property decisions.
              </p>
              <p>
                As a trusted channel partner for leading A-grade builders across <strong className="text-navy">Hyderabad and Bangalore</strong>, he provides access to carefully selected opportunities in gated communities, villas, premium apartments, commercial spaces, farmlands, and plotted developments.
              </p>
              <p>
                His expertise also extends to real estate opportunities in <strong className="text-navy">Goa, Dubai, and the USA</strong>, helping clients explore both local and international investment options.
              </p>
              <p>
                With a strong focus on transparency, market knowledge, and long-term value creation, Anil Datla is committed to guiding clients through every stage of their real estate journey.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-navy">Headquarters</div>
                  <div className="text-xs text-muted-foreground">Hyderabad, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center">
                  <Globe className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium text-navy">Markets</div>
                  <div className="text-xs text-muted-foreground">Hyderabad, Bangalore, Goa, Dubai, USA</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
