import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Award, Globe } from "lucide-react";

// Official WhatsApp brand mark
function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

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
          {/* Portrait */}
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
                  Founder, AD Realty Properties
                </div>
              </div>
            </div>

            {/* WhatsApp CTAs */}
            <div className="mt-8 p-6 md:p-7 glass-panel rounded-2xl border border-border">
              <h3 className="font-display text-xl text-navy mb-5">Connect on WhatsApp</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://chat.whatsapp.com/C7HVhsXWxVuDqGIGSBDIGv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-medium text-sm hover:bg-[#1ebe57] hover:shadow-luxury hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Join WhatsApp Community
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaSTtUY5K3zPyrWHBw18"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-[#075E54] border border-[#25D366]/30 px-6 py-3.5 rounded-full font-medium text-sm hover:bg-[#25D366]/5 hover:border-[#25D366] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  Follow WhatsApp Channel
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                <Award className="h-3.5 w-3.5" />
                RERA-Approved Realtor
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-navy/70 bg-navy/5 px-3 py-1.5 rounded-full">
                <Globe className="h-3.5 w-3.5" />
                International Realtor
              </span>
            </div>

            <h3 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              Anil Datla
            </h3>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground uppercase">
              Founder, AD Realty Properties
            </p>

            <p className="mt-8 text-navy/80 text-lg leading-relaxed">
              My expertise extends to properties in Goa, Dubai, and USA.
            </p>
            <p className="mt-4 text-navy/80 text-lg leading-relaxed">
              I specialize in landowner/investor share properties, including gated community flats, villas, commercial spaces, farmlands, and gated community plots.
            </p>
            <p className="mt-4 text-navy/80 text-lg leading-relaxed">
              For any property-related inquiries, whether you are looking to buy or sell, please feel free to contact me. I invite you to join my WhatsApp group and follow my WhatsApp channel for exclusive updates and super deals on upcoming projects.
            </p>
            <p className="mt-4 text-navy/80 text-lg leading-relaxed">
              For exclusive super deals and group booking opportunities in upcoming projects, please contact me. You can also join my WhatsApp Group and follow my WhatsApp Channel for the latest real estate investment updates.
            </p>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
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
                  <div className="text-xs text-muted-foreground">India · Goa · Dubai · USA</div>
                </div>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="mt-10">
              <span className="text-eyebrow inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                Professional Memberships &amp; Certifications
              </span>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {memberships.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="p-5 rounded-xl bg-background border border-border hover:border-gold/40 hover:shadow-soft transition-all duration-300 text-center"
                  >
                    <div className="font-display text-2xl text-navy">{m.name}</div>
                    <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      {m.sub}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
